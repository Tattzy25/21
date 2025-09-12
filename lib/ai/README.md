# Bridgit-AI Service Module

This module provides a unified interface for multiple AI providers with automatic fallback and cost optimization.

## Features

- **Multi-Provider Support**: OpenAI, Anthropic, Google, Groq, and Vercel AI Gateway
- **Automatic Fallback**: Seamless switching between providers if one fails
- **Cost Optimization**: Uses Vercel AI Gateway for unified billing
- **Streaming Support**: Real-time responses for all providers
- **Type Safety**: Full TypeScript support with proper type definitions

## Quick Start

### 1. Environment Setup

Copy the environment template and fill in your API keys:

```bash
cp .env.example .env.local
# Edit .env.local with your API keys
```

### 2. Basic Usage

```typescript
import { aiService } from '@/lib/ai/service-manager';

// Simple text generation
const response = await aiService.processRequest({
  messages: [{ role: 'user', content: 'Hello, how are you?' }],
  model: 'gpt-4o',
  temperature: 0.7,
});

// Streaming response
const streamingResponse = await aiService.processRequest({
  messages: [{ role: 'user', content: 'Tell me a story' }],
  stream: true,
});
```

### 3. Provider-Specific Requests

```typescript
// Force specific provider
const claudeResponse = await aiService.processRequest({
  messages: [{ role: 'user', content: 'Analyze this code' }],
  provider: 'anthropic',
  model: 'claude-3-5-sonnet-20241022',
});
```

## API Endpoints

### Unified AI Endpoint

**POST** `/api/ai`

Request body:
```json
{
  "messages": [
    { "role": "user", "content": "Hello!" }
  ],
  "model": "gpt-4o",
  "temperature": 0.7,
  "maxTokens": 1000,
  "provider": "openai", // optional
  "stream": false
}
```

Response:
```json
{
  "text": "Hello! How can I help you today?",
  "provider": "openai",
  "model": "gpt-4o",
  "usage": {
    "promptTokens": 10,
    "completionTokens": 15,
    "totalTokens": 25
  }
}
```

### Health Check

**GET** `/api/ai`

Returns the status of all AI providers:
```json
{
  "status": "ok",
  "providers": {
    "vercelGateway": true,
    "anthropic": true,
    "openai": true,
    "google": true,
    "groq": true
  }
}
```

## Provider Priority

Requests are routed in this order for optimal performance and cost:

1. **Vercel AI Gateway** - Unified billing and caching
2. **Anthropic** - Best for complex reasoning
3. **OpenAI** - General purpose tasks
4. **Google** - Fast responses with Gemini
5. **Groq** - Ultra-fast inference

## Configuration

### Custom Provider Configuration

```typescript
import { aiProviders } from '@/lib/ai/config';

// Access provider settings
const openaiConfig = aiProviders.openai;
console.log(openaiConfig.model); // 'gpt-4o'
```

### Model Capabilities

```typescript
import { getModelCapabilities } from '@/lib/ai/config';

const gpt4Capabilities = getModelCapabilities('gpt-4o');
console.log(gpt4Capabilities.maxTokens); // 128000
```

## Error Handling

The service includes comprehensive error handling:

```typescript
try {
  const response = await aiService.processRequest({
    messages: [{ role: 'user', content: 'Hello' }],
  });
} catch (error) {
  if (error.message.includes('API key')) {
    // Handle authentication error
  } else if (error.message.includes('rate limit')) {
    // Handle rate limiting
  } else {
    // Handle other errors
  }
}
```

## Advanced Usage

### Custom System Prompts

```typescript
const response = await aiService.processRequest({
  messages: [
    { role: 'system', content: 'You are a helpful coding assistant.' },
    { role: 'user', content: 'How do I use React hooks?' }
  ],
  temperature: 0.3, // Lower temperature for more focused responses
});
```

### Function Calling

```typescript
const response = await aiService.processRequest({
  messages: [{ role: 'user', content: 'What\'s the weather in Tokyo?' }],
  model: 'gpt-4o', // Function calling works best with GPT-4
  // Add function definitions here
});
```

## Best Practices

1. **Use appropriate models**: Choose models based on task complexity
2. **Monitor usage**: Track token usage for cost management
3. **Handle errors gracefully**: Implement fallback logic
4. **Cache responses**: For frequently asked questions
5. **Rate limiting**: Implement client-side rate limiting

## Troubleshooting

### Common Issues

1. **API Key Errors**: Check that all required environment variables are set
2. **Rate Limits**: Implement exponential backoff for retries
3. **Network Issues**: Add timeout and retry logic
4. **Model Availability**: Some models may have regional restrictions

### Debug Mode

Enable debug logging:

```typescript
// Add to your environment
DEBUG=ai-service:*

// Or in code
console.log('Provider health:', await aiService.healthCheck());
```

## Contributing

When adding new providers:

1. Add configuration to `lib/ai/config.ts`
2. Implement provider method in `service-manager.ts`
3. Add API route template in `templates/`
4. Update documentation

## License

This module is part of the Bridgit-AI platform.