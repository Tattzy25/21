"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AIModelCardProps {
  modelName: string
  provider: string
  abilities: string[]
  onTryModel: () => void
}

export function AIModelCard({ modelName, provider, abilities, onTryModel }: AIModelCardProps) {
  return (
    <div className="relative group">
      {/* Violet Glow Background */}
      <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-full opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
      
      {/* Main Circular Card */}
      <Card className="relative w-80 h-80 rounded-full border-2 border-white/20 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 overflow-hidden group-hover:scale-105 transition-all duration-500 shadow-2xl">
        {/* Liquid Glass Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full" />
        <div className="absolute top-4 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-8 right-12 w-12 h-12 bg-violet-400/20 rounded-full blur-lg" />
        
        {/* Animated Border Gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-50 animate-spin-slow" style={{ animationDuration: '8s' }} />
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl" />
        
        {/* Content Container (absolute placements to match badge layout) */}
        <div className="relative h-full">
          {/* Provider (top center) */}
          <div
            className="absolute text-white/90 font-inter text-sm tracking-wider"
            style={{ top: "12%", left: "50%", transform: "translateX(-50%)" }}
          >
            {provider}
          </div>

          {/* Model Name (upper-right) */}
          <div
            className="absolute text-white font-inter font-bold tracking-tight"
            style={{ top: "28%", right: "14%" }}
          >
            <span className="text-3xl">{modelName}</span>
          </div>

          {/* Abilities (left stack with underlines) */}
          <div
            className="absolute left-[14%] top-[38%] space-y-3 text-left"
          >
            {abilities.map((ability, index) => (
              <div key={index} className="text-white/85">
                <div className="text-sm font-medium font-inter tracking-wide">
                  {ability}
                </div>
                <div className="mt-1 h-[2px] w-32 bg-white/25" />
              </div>
            ))}
          </div>

          {/* Try Button (bottom center) */}
          <div
            className="absolute"
            style={{ bottom: "10%", left: "50%", transform: "translateX(-50%)" }}
          >
            <Button
              onClick={onTryModel}
              aria-label="Tap to try model"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-white/30 text-white font-inter font-semibold tracking-wide px-8 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
            >
              Tap to Try
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-12 right-16 w-2 h-2 bg-violet-400 rounded-full animate-ping" />
        <div className="absolute bottom-16 left-12 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
      </Card>
    </div>
  )
}
