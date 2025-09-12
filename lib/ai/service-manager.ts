import { streamText, generateText, type CoreMessage, type LanguageModelUsage } from 'ai';
import { aiProviders, providerPriority } from './config';
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';
import { createOpenAI } from '@ai-sdk/openai';

interface AIRequest {
  messages: CoreMessage[];
  model?: string;
  temperature?: number;
  maxTokens?: number;
  provider?: string;
  stream?: boolean;
}

interface AIResponse {
  text: string;
  provider: string;
  model: string;
  usage?: LanguageModelUsage;
}

class AIServiceManager {
  private groqClient: ReturnType<typeof createOpenAI>;

  constructor() {
    this.groqClient = createOpenAI({
      apiKey: aiProviders.groq.apiKey!,
      baseURL: 'https://api.groq.com/openai/v1',
    });
  }

  async processRequest(request: AIRequest): Promise<AIResponse> {
    const { provider, stream = false, ...params } = request;

    // If specific provider requested, use it
    if (provider) {
      return this.callProvider(provider, params, stream);
    }

    // Otherwise, use priority-based fallback
    for (const providerName of providerPriority) {
      try {
        const result = await this.callProvider(providerName, params, stream);
        return result;
      } catch (error) {
        console.warn(`${providerName} failed, trying next provider:`, error);
        continue;
      }
    }

    throw new Error('All AI providers failed');
  }

  private async callProvider(
    provider: string,
    params: Omit<AIRequest, 'provider' | 'stream'>,
    stream: boolean
  ): Promise<AIResponse> {
    const { messages, model, temperature = 0.7, maxTokens } = params;

    switch (provider) {
      case 'openai':
        return this.callOpenAI(messages, model || 'gpt-4o', temperature, maxTokens, stream);

      case 'anthropic':
        return this.callAnthropic(messages, model || 'claude-3-5-sonnet-20241022', temperature, maxTokens, stream);

      case 'google':
        return this.callGoogle(messages, model || 'gemini-1.5-pro', temperature, maxTokens, stream);

      case 'groq':
        return this.callGroq(messages, model || 'llama-3.3-70b-versatile', temperature, maxTokens, stream);

      case 'vercelGateway':
        return this.callVercelGateway(messages, model || 'gpt-4o', temperature, maxTokens, stream);

      default:
        throw new Error(`Unknown provider: ${provider}`);
    }
  }

  private async callOpenAI(messages: CoreMessage[], model: string, temperature: number, maxTokens?: number, stream?: boolean): Promise<AIResponse> {
    if (stream) {
      const result = await streamText({
        model: openai(model),
        messages,
        temperature,
        ...(maxTokens && { maxTokens }),
      });
      return {
        text: 'Streaming response',
        provider: 'openai',
        model,
        usage: await result.usage,
      };
    } else {
      const result = await generateText({
        model: openai(model),
        messages,
        temperature,
        ...(maxTokens && { maxTokens }),
      });
      return {
        text: result.text,
        provider: 'openai',
        model,
        usage: result.usage,
      };
    }
  }

  private async callAnthropic(messages: CoreMessage[], model: string, temperature: number, maxTokens?: number, stream?: boolean): Promise<AIResponse> {
    if (stream) {
      const result = await streamText({
        model: anthropic(model),
        messages,
        temperature,
        ...(maxTokens && { maxTokens }),
      });
      return {
        text: 'Streaming response',
        provider: 'anthropic',
        model,
        usage: await result.usage,
      };
    } else {
      const result = await generateText({
        model: anthropic(model),
        messages,
        temperature,
        ...(maxTokens && { maxTokens }),
      });
      return {
        text: result.text,
        provider: 'anthropic',
        model,
        usage: result.usage,
      };
    }
  }

  private async callGoogle(messages: CoreMessage[], model: string, temperature: number, maxTokens?: number, stream?: boolean): Promise<AIResponse> {
    if (stream) {
      const result = await streamText({
        model: google(model),
        messages,
        temperature,
        ...(maxTokens && { maxTokens }),
      });
      return {
        text: 'Streaming response',
        provider: 'google',
        model,
        usage: await result.usage,
      };
    } else {
      const result = await generateText({
        model: google(model),
        messages,
        temperature,
        ...(maxTokens && { maxTokens }),
      });
      return {
        text: result.text,
        provider: 'google',
        model,
        usage: result.usage,
      };
    }
  }

  private async callGroq(messages: CoreMessage[], model: string, temperature: number, maxTokens?: number, stream?: boolean): Promise<AIResponse> {
    if (stream) {
      const result = await streamText({
        model: this.groqClient(model),
        messages,
        temperature,
        ...(maxTokens && { maxTokens }),
      });
      return {
        text: 'Streaming response',
        provider: 'groq',
        model,
        usage: await result.usage,
      };
    } else {
      const result = await generateText({
        model: this.groqClient(model),
        messages,
        temperature,
        ...(maxTokens && { maxTokens }),
      });
      return {
        text: result.text,
        provider: 'groq',
        model,
        usage: result.usage,
      };
    }
  }

  private async callVercelGateway(messages: CoreMessage[], model: string, temperature: number, maxTokens?: number, stream?: boolean): Promise<AIResponse> {
    const gatewayClient = createOpenAI({
      apiKey: aiProviders.vercelGateway.apiKey!,
      baseURL: aiProviders.vercelGateway.baseURL,
    });

    if (stream) {
      const result = await streamText({
        model: gatewayClient(model),
        messages,
        temperature,
        ...(maxTokens && { maxTokens }),
      });
      return {
        text: 'Streaming response',
        provider: 'vercelGateway',
        model,
        usage: await result.usage,
      };
    } else {
      const result = await generateText({
        model: gatewayClient(model),
        messages,
        temperature,
        ...(maxTokens && { maxTokens }),
      });
      return {
        text: result.text,
        provider: 'vercelGateway',
        model,
        usage: result.usage,
      };
    }
  }  // Health check for all providers
  async healthCheck() {
    const results: Record<string, boolean> = {};

    for (const provider of providerPriority) {
      try {
        await this.callProvider(provider, {
          messages: [{ role: 'user', content: 'Hello' }],
          maxTokens: 10,
        }, false);
        results[provider] = true;
      } catch {
        results[provider] = false;
      }
    }

    return results;
  }
}

// Export singleton instance
export const aiService = new AIServiceManager();
export default aiService;