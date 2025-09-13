'use client'

import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
// no icon imports needed

interface AgentConfigFormProps {
  providerName: string
  modelName: string
  capabilities: string[]
  onChange: (update: { providerName?: string; modelName?: string; capabilities?: string[] }) => void
  onTry?: () => void
  onSave?: () => void
  // Typography controls (provided by parent so preview updates)
  onSetFont?: (field: 'provider' | 'model' | 'cta' | 'cap0' | 'cap1' | 'cap2', font: string) => void
  onSetSize?: (field: 'provider' | 'model' | 'cta' | 'cap0' | 'cap1' | 'cap2', sizePx: string) => void
  ctaLabel?: string
  onCtaChange?: (label: string) => void
  onSetAlign?: (field: 'provider' | 'model' | 'cta' | 'cap0' | 'cap1' | 'cap2', align: 'left' | 'center' | 'right') => void
  onToggleEffect?: (field: 'provider' | 'model' | 'cta' | 'cap0' | 'cap1' | 'cap2', key: 'glow' | 'neon' | 'outline' | 'shadow' | 'uppercase' | 'gradient') => void
  onSetColor?: (field: 'provider' | 'model' | 'cta' | 'cap0' | 'cap1' | 'cap2', color: string) => void
  currentEffects?: Record<string, Record<string, boolean>>
  currentColors?: Record<string, string>
  currentFonts?: Record<string, string>
  currentSizes?: Record<string, string>
  currentAligns?: Record<string, 'left' | 'center' | 'right'>
}

export function AgentConfigForm({ providerName, modelName, capabilities, onChange, onTry, onSave, onSetFont, onSetSize, ctaLabel = 'TAP TO TRY', onCtaChange, onSetAlign, onToggleEffect, onSetColor, currentFonts = {}, currentSizes = {}, currentAligns = {}, currentEffects = {}, currentColors = {} }: AgentConfigFormProps) {
  // Which field is currently targeted by font/size controls
  const [activeField, setActiveField] = React.useState<'provider' | 'model' | 'cta' | 'cap0' | 'cap1' | 'cap2' | 'none'>('none')

  const setFont = (font: string) => {
    if (activeField === 'none') return
    onSetFont?.(activeField, font)
  }
  const setSize = (size: string) => {
    if (activeField === 'none') return
    onSetSize?.(activeField, size)
  }
  const handleCapabilityChange = (index: number, value: string) => {
    const next = [...capabilities]
    next[index] = value
    onChange({ capabilities: next })
  }

  const disabled = !providerName || !modelName || capabilities.some((c) => !c)

  return (
    <Card className="min-h-[400px]">
      <CardHeader>
        <CardTitle>Agent Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Provider / Model side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="provider">Provider Name</Label>
            <Input
              id="provider"
              value={providerName}
              onFocus={() => setActiveField('provider')}
              onChange={(e) => onChange({ providerName: e.target.value })}
              placeholder="Enter provider name"
              className={
                activeField === 'provider'
                  ? 'ring-2 ring-purple-500 shadow-[0_0_18px_rgba(147,51,234,0.6)] transition-shadow'
                  : ''
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Model Name</Label>
            <Input
              id="model"
              value={modelName}
              onFocus={() => setActiveField('model')}
              onChange={(e) => onChange({ modelName: e.target.value })}
              placeholder="Enter model name"
              className={
                activeField === 'model'
                  ? 'ring-2 ring-purple-500 shadow-[0_0_18px_rgba(147,51,234,0.6)] transition-shadow'
                  : ''
              }
            />
          </div>
        </div>

        {/* Font + Size + Align controls */}
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-40 justify-between">{`Font${activeField !== 'none' && currentFonts[activeField] ? `: ${currentFonts[activeField]}` : ''}`}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onSelect={() => setFont('Audiowide')}>Audiowide</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFont('Orbitron')}>Orbitron</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFont('Geist')}>Geist</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFont('Rajdhani')}>Rajdhani</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFont('Russo One')}>Russo One</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFont('Bebas Neue')}>Bebas Neue</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFont('Space Grotesk')}>Space Grotesk</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFont('Teko')}>Teko</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFont('Exo')}>Exo</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFont('Share Tech Mono')}>Share Tech Mono</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-28 justify-between">{`Size${activeField !== 'none' && currentSizes[activeField] ? `: ${currentSizes[activeField]}px` : ''}`}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onSelect={() => setSize('12')}>12px</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setSize('14')}>14px</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setSize('16')}>16px</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setSize('18')}>18px</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setSize('20')}>20px</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setSize('22')}>22px</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setSize('24')}>24px</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setSize('28')}>28px</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setSize('32')}>32px</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-28 justify-between">{`Align${activeField !== 'none' && currentAligns[activeField] ? `: ${currentAligns[activeField]}` : ''}`}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onSelect={() => onSetAlign?.(activeField, 'left')}>Left</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onSetAlign?.(activeField, 'center')}>Center</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onSetAlign?.(activeField, 'right')}>Right</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="space-y-2">
          <Label>Capabilities</Label>
          <div className="space-y-2">
            {capabilities.slice(0,3).map((capability, index) => (
              <Input
                key={index}
                value={capability}
                onFocus={() => setActiveField((`cap${index}`) as any)}
                onChange={(e) => handleCapabilityChange(index, e.target.value)}
                placeholder={`Capability ${index + 1}`}
                className={
                  activeField === (`cap${index}` as any)
                    ? 'ring-2 ring-purple-500 shadow-[0_0_18px_rgba(147,51,234,0.6)] transition-shadow'
                    : ''
                }
              />
            ))}
          </div>
          {/* No add/remove per instruction: exactly three editable items */}
        </div>

        {/* CTA Label as input field (applies to preview label later) */}
        <div className="space-y-2">
          <Label htmlFor="cta">CTA Label</Label>
          <Input
            id="cta"
            value={ctaLabel}
            onFocus={() => setActiveField('cta')}
            onChange={(e) => onCtaChange?.(e.target.value)}
            placeholder="e.g., TAP TO TRY"
            className={
              activeField === 'cta'
                ? 'ring-2 ring-purple-500 shadow-[0_0_18px_rgba(147,51,234,0.6)] transition-shadow'
                : ''
            }
          />
        </div>

        <Button onClick={onSave} className="w-full" disabled={disabled}>
          Save Model
        </Button>
      </CardContent>
    </Card>
  )
}
