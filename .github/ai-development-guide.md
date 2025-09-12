# AI Development Guide: Modular SPA with Hash Routing

## Overview
This guide establishes the standard pattern for building modular single-page applications (SPAs) with hash-based routing. The goal is to maintain clean, scalable code with files never exceeding 100-150 lines, ensuring maintainability and developer experience.

**📋 Related Files:**
- `.github/copilot-instructions.md` - Basic project setup and immediate development rules
- `.cursorrules` - **BRIDGIT-AI EXCLUSIVE RULES** - Complete project vision and requirements
- This file - Detailed implementation patterns and complete file structure

## 🎯 BRIDGIT-AI PROJECT VISION
**Bridgit-AI (bridgit-ai.com)** is a comprehensive AI platform featuring:
- AI model marketplace and display
- Model builder and character creation
- Multi-chat interface (up to 6 models/characters simultaneously)
- Canva-style automation builder with drag & drop
- Widget/embed code generation
- AI Agent Live for chat interface generation
- Mini game builder
- Community section for sharing work
- Music and image features
- Multi-agent automations with MCP connections
- API key management and branding
- Subscription/token-based pricing tiers

**⚠️ CRITICAL**: See `.cursorrules` for complete project requirements, quality standards, and development rules. All work must align with these exclusive Bridgit-AI specifications.

## Core Principles

### 1. Single Responsibility Principle
- **Each file has one clear purpose**
- **Components are focused and minimal**
- **Logic is separated by concern**

### 2. File Size Limits
- **Core components**: 50-80 lines
- **Utility functions**: 30-50 lines
- **Index files**: 20-30 lines
- **Complex components**: 80-120 lines max

### 3. Hash Routing Pattern
- **No page reloads**: Maintain SPA performance
- **Shareable URLs**: Deep linking support
- **Browser history**: Back/forward navigation
- **Bookmarkable**: Direct access to content sections

### 4. Component Usage Rules (CRITICAL)
- **NEVER build custom components** unless explicitly instructed by the user
- **ALWAYS use shadcn/ui components first** - they are the primary choice
- **Only consider Vercel v0 components** if shadcn/ui doesn't have what's needed AND user approves
- **No external component libraries** without explicit permission
- **Custom components require user approval** before implementation

### 5. AI Integration & Multi-Provider Support
- **Vercel AI Gateway**: Primary AI integration for unified access to 100+ models
- **Environment Variables**: Use `.env.local` for API keys (AI_GATEWAY_API_KEY, etc.)
- **Multi-Provider Ready**: Support OpenAI, Anthropic, Google, and other providers
- **Fallback Strategy**: Graceful degradation if primary provider unavailable

### 6. Typography & Fonts
- **Google Fonts Integration**: Available via API for custom typography needs
- **System Fonts First**: Prefer system fonts for performance
- **Custom Fonts**: Only when explicitly requested and API key is available

## Current Project Setup Status

### ✅ Installed Dependencies
- **AI SDK**: `ai@5.0.42` - Vercel AI Gateway integration
- **AI Providers**: 
  - `@ai-sdk/openai@2.0.29` - OpenAI GPT models
  - `@ai-sdk/anthropic@2.0.15` - Anthropic Claude models  
  - `@ai-sdk/google@2.0.13` - Google Gemini models
- **Environment Management**: `dotenv@17.2.2` - API key management
- **Font Optimization**: `@next/font@14.2.15` - Google Fonts support

### 🔧 Environment Setup Required
Create `.env.local` with your API keys:
```bash
AI_GATEWAY_API_KEY=your_vercel_ai_gateway_key
OPENAI_API_KEY=your_openai_key          # optional fallback
ANTHROPIC_API_KEY=your_anthropic_key    # optional fallback
GOOGLE_API_KEY=your_google_key          # optional fallback
GOOGLE_FONTS_API_KEY=your_google_fonts_key  # for custom fonts
```

### 🚀 Ready for Multi-Provider AI Integration
The project is now configured to use Vercel AI Gateway as the primary AI integration with automatic fallback to individual providers (OpenAI, Anthropic, Google) for maximum reliability.

## Component Usage Hierarchy (MANDATORY)

### 1. Primary Choice: shadcn/ui Components
```tsx
// ✅ ALWAYS FIRST CHOICE
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

// Use these components for ALL UI needs
```

### 2. Secondary Choice: Vercel v0 Components (Only if approved)
```tsx
// ⚠️ ONLY IF shadcn/ui doesn't have it AND user explicitly approves
import { SomeV0Component } from '@vercel/v0';

// Must get user permission before using v0 components
```

### 3. Custom Components: NEVER without explicit instruction
```tsx
// ❌ NEVER DO THIS without explicit user instruction
function CustomButton({ children, ...props }) {
  return <button className="custom-styles" {...props}>{children}</button>;
}

// ✅ ONLY if user specifically requests it
// "Please create a custom button component for this specific use case"
```

### 4. Google Fonts Integration
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Only use when explicitly requested and API key available
```

## Development Rules for AI Agents

### Component Creation Rules
1. **Check shadcn/ui first** - Search existing components before suggesting new ones
2. **Get user approval** - Never create custom components without explicit permission
3. **Document exceptions** - If custom component is needed, explain why shadcn/ui isn't sufficient
4. **Follow modular pattern** - Even custom components must follow the file structure rules

### AI Provider Rules
1. **Use Vercel AI Gateway** as primary integration
2. **Support multiple providers** for reliability
3. **Environment variables** for all API keys
4. **Graceful fallbacks** when primary provider fails
5. **Error handling** for all AI operations

### Font Usage Rules
1. **System fonts first** for optimal performance
2. **Google Fonts only** when explicitly requested
3. **API key required** for Google Fonts usage
4. **Performance considerations** - use `display: swap` and font optimization

```
your-project/
├── app/
│   ├── layout.tsx                    # Main app layout with hash routing (60-80 lines)
│   ├── page.tsx                      # Default page content (30-50 lines)
│   ├── globals.css                   # Global styles
│   └── api/
│       └── chat/
│           └── route.ts              # API endpoints (40-60 lines)
├── components/
│   ├── ui/
│   │   └── sidebar/                  # Modular sidebar system
│   │       ├── index.ts              # Main exports (25-35 lines)
│   │       ├── constants.ts          # All constants (20-30 lines)
│   │       ├── types.ts              # TypeScript types (25-35 lines)
│   │       ├── context.tsx           # Context & hooks (40-60 lines)
│   │       ├── provider.tsx          # SidebarProvider (50-70 lines)
│   │       ├── sidebar.tsx           # Main Sidebar (60-80 lines)
│   │       ├── trigger.tsx           # SidebarTrigger (25-35 lines)
│   │       ├── rail.tsx              # SidebarRail (30-40 lines)
│   │       ├── inset.tsx             # SidebarInset (25-35 lines)
│   │       ├── menu/
│   │       │   ├── index.ts          # Menu exports (20-25 lines)
│   │       │   ├── menu.tsx          # SidebarMenu (25-35 lines)
│   │       │   ├── menu-item.tsx     # SidebarMenuItem (20-30 lines)
│   │       │   ├── menu-button.tsx   # SidebarMenuButton (50-70 lines)
│   │       │   ├── menu-action.tsx   # SidebarMenuAction (30-40 lines)
│   │       │   ├── menu-badge.tsx    # SidebarMenuBadge (25-35 lines)
│   │       │   └── menu-skeleton.tsx # SidebarMenuSkeleton (30-40 lines)
│   │       ├── sub-menu/
│   │       │   ├── index.ts          # Sub-menu exports (15-20 lines)
│   │       │   ├── sub-menu.tsx      # SidebarMenuSub (25-35 lines)
│   │       │   ├── sub-item.tsx      # SidebarMenuSubItem (20-30 lines)
│   │       │   └── sub-button.tsx    # SidebarMenuSubButton (40-50 lines)
│   │       └── utils/
│   │           ├── index.ts          # Utility exports (20-25 lines)
│   │           ├── input.tsx         # SidebarInput (20-30 lines)
│   │           ├── header.tsx        # SidebarHeader (20-30 lines)
│   │           ├── footer.tsx        # SidebarFooter (20-30 lines)
│   │           ├── separator.tsx     # SidebarSeparator (20-30 lines)
│   │           ├── content.tsx       # SidebarContent (25-35 lines)
│   │           ├── group.tsx         # SidebarGroup (20-30 lines)
│   │           ├── group-label.tsx   # SidebarGroupLabel (25-35 lines)
│   │           ├── group-action.tsx  # SidebarGroupAction (25-35 lines)
│   │           └── group-content.tsx # SidebarGroupContent (20-30 lines)
│   ├── layout/
│   │   └── sidebar-content.tsx       # Main sidebar navigation (50-70 lines)
│   └── content/                      # Content components
│       ├── index.ts                  # Content exports (20-25 lines)
│       ├── home-content.tsx          # Home page content (40-60 lines)
│       ├── documentation-content.tsx # Documentation content (40-60 lines)
│       ├── test-content.tsx          # Test page content (40-60 lines)
│       └── settings-content.tsx      # Settings content (40-60 lines)
├── hooks/
│   └── use-mobile.ts                 # Mobile detection hook (25-35 lines)
├── lib/
│   └── utils.ts                      # Utility functions (30-40 lines)
├── .env.local                        # Environment variables
└── package.json                      # Dependencies
```

## Implementation Patterns

### 1. Main App Layout with Hash Routing

```tsx
// app/layout.tsx (60-80 lines)
'use client';

import { useState, useEffect } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Sidebar } from '@/components/ui/sidebar';
import { SidebarContentComponent } from '@/components/layout/sidebar-content';
import { ContentArea } from '@/components/content';

export type ContentType = 'home' | 'documentation' | 'test' | 'settings';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeContent, setActiveContent] = useState<ContentType>('home');

  // Hash routing logic
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'documentation', 'test', 'settings'].includes(hash)) {
        setActiveContent(hash as ContentType);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleContentChange = (content: ContentType) => {
    setActiveContent(content);
    window.location.hash = content;
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContentComponent
          activeContent={activeContent}
          onContentChange={handleContentChange}
        />
      </Sidebar>
      <SidebarInset>
        <ContentArea activeContent={activeContent} />
      </SidebarInset>
    </SidebarProvider>
  );
}
```

### 2. Sidebar Navigation Component

```tsx
// components/layout/sidebar-content.tsx (50-70 lines)
'use client';

import { ContentType } from '@/app/layout';
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import {
  BookOpen,
  FileText,
  Home,
  Settings,
} from 'lucide-react';

interface SidebarContentComponentProps {
  activeContent: ContentType;
  onContentChange: (content: ContentType) => void;
}

export function SidebarContentComponent({
  activeContent,
  onContentChange
}: SidebarContentComponentProps) {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={activeContent === 'home'}
              onClick={() => onContentChange('home')}
            >
              <Home />
              <span>Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <BookOpen />
              <span>Documentation</span>
            </SidebarMenuButton>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton
                  isActive={activeContent === 'test'}
                  onClick={() => onContentChange('test')}
                >
                  <FileText />
                  <span>test</span>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={activeContent === 'settings'}
              onClick={() => onContentChange('settings')}
            >
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
}
```

### 3. Content Area with Conditional Rendering

```tsx
// components/content/index.tsx (20-25 lines)
'use client';

import { ContentType } from '@/app/layout';
import { HomeContent } from './home-content';
import { DocumentationContent } from './documentation-content';
import { TestContent } from './test-content';
import { SettingsContent } from './settings-content';

interface ContentAreaProps {
  activeContent: ContentType;
}

export function ContentArea({ activeContent }: ContentAreaProps) {
  switch (activeContent) {
    case 'home':
      return <HomeContent />;
    case 'documentation':
      return <DocumentationContent />;
    case 'test':
      return <TestContent />;
    case 'settings':
      return <SettingsContent />;
    default:
      return <HomeContent />;
  }
}
```

### 4. Individual Content Components

```tsx
// components/content/test-content.tsx (40-60 lines)
export function TestContent() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">test</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to the test section. This content is shareable via URL:
          <code className="bg-muted px-2 py-1 rounded text-sm ml-2">
            {typeof window !== 'undefined' ? window.location.href : ''}
          </code>
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2>What is test?</h2>
        <p>
          This is the test content that can be shared with others.
          When someone clicks the shared link, they'll land directly here!
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Feature 1: Description of feature 1</li>
          <li>Feature 2: Description of feature 2</li>
          <li>Feature 3: Description of feature 3</li>
        </ul>

        <h2>Getting Started</h2>
        <p>
          To get started with test, follow these simple steps:
        </p>
        <ol>
          <li>Step 1: Do something</li>
          <li>Step 2: Do something else</li>
          <li>Step 3: You're done!</li>
        </ol>
      </div>
    </div>
  );
}
```

## Modular Sidebar Component Examples

### Core Component Pattern

```tsx
// components/ui/sidebar/sidebar.tsx (60-80 lines)
"use client"

import * as React from "react"
import { useSidebar } from "./context"
import { cn } from "@/lib/utils"

interface SidebarProps extends React.ComponentProps<"div"> {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}

export function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: SidebarProps) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  // Mobile and desktop implementations...
  // (Keep each section focused and under 80 lines)
}
```

### Menu Component Pattern

```tsx
// components/ui/sidebar/menu/menu-button.tsx (50-70 lines)
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import { useSidebar } from "../context"
import { cn } from "@/lib/utils"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface SidebarMenuButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
}

export function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: SidebarMenuButtonProps) {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  // Tooltip logic (keep focused)
  if (!tooltip) {
    return button
  }

  // Handle tooltip rendering...
}
```

## Best Practices

### 1. File Organization
- **Group related components** in subdirectories
- **Use index.ts files** for clean imports
- **Keep utility functions** separate from components
- **Maintain consistent naming** conventions

### 2. Code Splitting
- **Lazy load content components** for better performance
- **Split large components** into smaller, focused pieces
- **Use custom hooks** for complex logic
- **Extract reusable utilities**

### 3. State Management
- **Centralize routing logic** in main layout
- **Use context for shared state** (like sidebar state)
- **Keep component state local** when possible
- **Avoid prop drilling** with proper context usage

### 4. Performance Considerations
- **Memoize expensive operations**
- **Use React.memo** for stable components
- **Lazy load route components**
- **Optimize re-renders** with proper dependencies

### 5. Testing Strategy
- **Unit test individual components**
- **Integration test page flows**
- **Test routing behavior**
- **Mock external dependencies**

## Adding New Features

### 1. New Content Section
1. Add to `ContentType` in `app/layout.tsx`
2. Create content component in `components/content/`
3. Add to `ContentArea` switch statement
4. Add navigation in `sidebar-content.tsx`
5. Update hash routing validation

### 2. New Sidebar Component
1. Create component file in appropriate subdirectory
2. Add to relevant `index.ts` export
3. Update main sidebar `index.ts`
4. Add TypeScript types if needed
5. Update documentation

### 3. New Utility Function
1. Add to `lib/utils.ts` or create new utility file
2. Export from appropriate index file
3. Add JSDoc comments
4. Write unit tests

## Maintenance Guidelines

### Code Reviews
- **Check file sizes** against limits
- **Verify single responsibility** principle
- **Ensure proper exports** and imports
- **Review TypeScript types** and interfaces

### Refactoring Triggers
- **File exceeds 100 lines**: Split into smaller components
- **Component has multiple responsibilities**: Extract focused components
- **Repeated logic**: Create custom hooks or utilities
- **Complex state logic**: Consider state management solutions

### Documentation Updates
- **Update this guide** when patterns change
- **Document new components** and their usage
- **Maintain file structure** documentation
- **Update examples** with new patterns

## Migration Strategy

When working with existing codebases:

1. **Audit current structure** against this guide
2. **Identify oversized files** for refactoring
3. **Plan migration in phases** to avoid breaking changes
4. **Update imports and exports** systematically
5. **Test thoroughly** after each migration step

This guide ensures consistent, maintainable, and scalable code across all future development. Follow these patterns to keep your codebase clean and your development experience optimal.</content>
<parameter name="filePath">c:\Users\relay\Downloads\21\21\.github\ai-development-guide.md



---

## CRITICAL RULES FOR ALL AI AGENTS

### 🚫 Component Creation Rules (MANDATORY)
- **NEVER build custom components** unless explicitly instructed by the user
- **ALWAYS use shadcn/ui components first** - they are the primary choice for ALL UI needs
- **Only consider Vercel v0 components** if shadcn/ui doesn't have what's needed AND user explicitly approves
- **No external component libraries** without explicit user permission
- **Custom components require written user approval** before implementation

### 🤖 AI Integration Rules
- **Vercel AI Gateway**: Primary AI integration for unified access to 100+ models
- **Multi-Provider Support**: Ready for OpenAI, Anthropic, Google, Cohere, and other providers
- **Environment Variables**: Use `.env.local` for API keys (AI_GATEWAY_API_KEY, etc.)
- **Fallback Strategy**: Graceful degradation if primary provider unavailable

### 🔤 Typography Rules
- **Google Fonts Integration**: Available via API for custom typography needs
- **System Fonts First**: Prefer system fonts for performance
- **Custom Fonts**: Only when explicitly requested and API key is available

### 📁 File Structure Rules
- **Modular Architecture**: Keep files under 100-150 lines maximum
- **Single Responsibility**: Each file has one clear purpose
- **Hash Routing**: Use hash-based routing for SPA navigation and sharing
- **Clean Imports**: Use index.ts files for organized exports

### ⚡ Performance Rules
- **Lazy Loading**: Implement for route components and heavy features
- **Memoization**: Use React.memo and useMemo for expensive operations
- **Bundle Optimization**: Keep initial bundle size minimal
- **Font Optimization**: Use `display: swap` and preload critical fonts

---

## AI Agent Decision Framework

### When to Use shadcn/ui (Default Choice)
```tsx
// ✅ ALWAYS FIRST - Check shadcn/ui components first
import { Button, Input, Card, Dialog, DropdownMenu } from '@/components/ui/*';
```

### When to Ask for Permission (Custom Components)
```tsx
// ❌ NEVER without explicit user instruction
// "Please create a custom component for this specific use case"
function MyCustomComponent() { /* ... */ }
```

### When to Use Vercel v0 (Secondary Choice)
```tsx
// ⚠️ ONLY after user approval and shadcn/ui doesn't suffice
import { SomeV0Component } from '@vercel/v0';
```

### When to Use Google Fonts
```tsx
// 🔤 ONLY when explicitly requested
import { Inter } from 'next/font/google'; // After user says "use Google Fonts"
```

---

If any section is unclear or missing, please provide feedback for further refinement.
