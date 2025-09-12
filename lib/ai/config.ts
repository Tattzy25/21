import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';
import { createOpenAI } from '@ai-sdk/openai';

// AI Provider Configuration
export const aiProviders = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4o',
    fallbackModel: 'gpt-3.5-turbo',
  },
  anthropic: {
    apiKey: process.env.ANTHROPIC_API_KEY,
    model: 'claude-3-5-sonnet-20241022',
    fallbackModel: 'claude-3-haiku-20240307',
  },
  google: {
    apiKey: process.env.GOOGLE_VERTEX_API_KEY,
    model: 'gemini-1.5-pro',
    fallbackModel: 'gemini-1.5-flash',
  },
  groq: {
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1',
    model: 'llama-3.3-70b-versatile',
    fallbackModel: 'llama-3.1-8b-instant',
  },
  vercelGateway: {
    apiKey: process.env.AI_GATEWAY_API_KEY,
    baseURL: 'https://gateway.ai.cloudflare.com/v1/YOUR_ACCOUNT_ID/bridgit-ai',
  },
} as const;

// AI Model Instances
export const models = {
  openai: openai(aiProviders.openai.model),
  anthropic: anthropic(aiProviders.anthropic.model),
  google: google(aiProviders.google.model),
  groq: createOpenAI({
    apiKey: aiProviders.groq.apiKey,
    baseURL: aiProviders.groq.baseURL,
  }),
};

// Provider Priority (for fallback logic)
export const providerPriority = [
  'vercelGateway', // Use gateway first for cost optimization
  'anthropic',     // Claude for complex reasoning
  'openai',        // GPT-4 for general tasks
  'google',        // Gemini for fast responses
  'groq',          // Groq for ultra-fast inference
] as const;

// Model Capabilities
export const modelCapabilities = {
  'gpt-4o': {
    maxTokens: 128000,
    supports: ['text', 'vision', 'function-calling', 'streaming'],
    costPerToken: 0.00003,
  },
  'claude-3-5-sonnet-20241022': {
    maxTokens: 200000,
    supports: ['text', 'vision', 'function-calling', 'streaming'],
    costPerToken: 0.000015,
  },
  'gemini-1.5-pro': {
    maxTokens: 2097152,
    supports: ['text', 'vision', 'function-calling', 'streaming'],
    costPerToken: 0.000007,
  },
  'llama-3.3-70b-versatile': {
    maxTokens: 128000,
    supports: ['text', 'function-calling', 'streaming'],
    costPerToken: 0.000002,
  },
} as const;

// Utility Functions
export function getProviderConfig(provider: keyof typeof aiProviders) {
  return aiProviders[provider];
}

export function getModelCapabilities(model: string) {
  return modelCapabilities[model as keyof typeof modelCapabilities];
}

export function validateApiKeys() {
  const missingKeys: string[] = [];

  Object.entries(aiProviders).forEach(([provider, config]) => {
    if (!config.apiKey) {
      missingKeys.push(`${provider.toUpperCase()}_API_KEY`);
    }
  });

  return {
    isValid: missingKeys.length === 0,
    missingKeys,
  };
}

// Default export for easy importing
const aiConfig = {
  providers: aiProviders,
  models,
  priority: providerPriority,
  capabilities: modelCapabilities,
  validateApiKeys,
  getProviderConfig,
  getModelCapabilities,
};

export default aiConfig;