# Bridgit-AI 🤖✨

**Bridgit-AI (bridgit-ai.com)** is a comprehensive AI platform featuring advanced AI capabilities, multi-model support, and intuitive design. Built with Next.js 13+, TypeScript, and cutting-edge AI integrations.

## 🎯 Project Vision

Bridgit-AI is a comprehensive AI platform featuring:
- **AI Model Marketplace** - Browse and select from 100+ AI models
- **Character Creation System** - Build custom AI characters and personalities
- **Multi-Chat Interface** - Chat with up to 6 different models simultaneously
- **Canva-Style Automation Builder** - Drag & drop workflow creation
- **Widget Generation** - Embeddable AI chat widgets with custom branding
- **AI Agent Live** - Real-time AI agent creation and deployment
- **Mini Game Builder** - Create AI-powered interactive games
- **Community Features** - Share and clone AI creations
- **API Key Management** - Secure key storage and branding
- **Subscription System** - Token-based pricing with PayPal integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm/yarn
- Supabase account (for database)
- AI provider API keys (OpenAI, Anthropic, Google, etc.)

### Installation

1. **Clone and install dependencies:**
```bash
pnpm install
```

2. **Set up environment variables:**
Create `.env.local` with your API keys:
```bash
# AI Gateway (Primary)
AI_GATEWAY_API_KEY=your_vercel_ai_gateway_key

# Provider Fallbacks (Optional)
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
GOOGLE_API_KEY=your_google_key

# Google Fonts (Optional)
GOOGLE_FONTS_API_KEY=your_google_fonts_key

# Supabase (When ready)
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. **Start development server:**
```bash
pnpm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 📋 Development Rules & Standards

### ⚠️ CRITICAL REQUIREMENTS
- **NO FALLBACKS** - Every feature must be fully functional
- **NO DEMOS** - Only production-ready implementations
- **NO MOCKS** - Real functionality, no placeholder data
- **PRODUCTION READY** - Every line of code must be deployment-ready
- **NO "PRODUCTION READY" COMMENTS** - Code quality speaks for itself

### 🔧 Development Approach
- **Task-by-Task** - Work only on assigned tasks
- **Component Rules** - shadcn/ui first, explicit approval for custom components
- **File Size Limits** - Core components: 50-80 lines, Complex: 80-120 lines max
- **Hash Routing** - SPA navigation with shareable URLs
- **Multi-Provider AI** - Vercel AI Gateway with automatic fallbacks

### 📖 Documentation
- **`.cursorrules`** - Complete project requirements and exclusive rules
- **`.github/copilot-instructions.md`** - Basic project setup and immediate development rules
- **`.github/ai-development-guide.md`** - Detailed implementation patterns and architecture

## 🛠️ Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **AI Integration:** Vercel AI Gateway + Multi-Provider Support
- **Database:** Supabase (very light setup initially)
- **Deployment:** Vercel
- **Payment:** PayPal Integration

## 📁 Project Structure

```
bridgit-ai/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with hash routing
│   ├── page.tsx          # Homepage
│   └── dashboard/        # Dashboard pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── layout/           # Layout components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── .cursorrules          # Exclusive project rules
├── .github/              # Development documentation
└── supabase/             # Database migrations (when ready)
```

## 🎨 Design Principles

- **Award-Winning Quality** - Oscar/Grammy level design and functionality
- **Modern Interface** - Futuristic, clean, and intuitive
- **Responsive Design** - Perfect on all devices
- **Accessibility** - WCAG compliant
- **Performance First** - Lightning-fast loading and interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Manual Build
```bash
pnpm run build
pnpm run start
```

## 🤝 Contributing

This project follows strict quality standards. Before contributing:

1. Read `.cursorrules` for complete requirements
2. Understand the project vision and feature set
3. Follow the established development patterns
4. Ensure all work meets production-ready standards

## 📄 License

This project is part of the Bridgit-AI platform development.

---

**Built with ❤️ for the future of AI interaction**
