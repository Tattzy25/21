'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { AgentConfigForm } from '@/components/agent-config-form'
import BadgeCard from '@/components/ui/agent-badge-card'

export function AgentConfigWorkstation() {
  const [providerName, setProviderName] = useState('OpenAI')
  const [modelName, setModelName] = useState('GPT-5')
  const [capabilities, setCapabilities] = useState<string[]>([
    'Multimodal',
    'Orchestration',
    'Multi-Context',
  ])
  const [ctaLabel, setCtaLabel] = useState('TAP TO TRY')
  const [fontByField, setFontByField] = useState<{provider: string; model: string; cta: string; cap0: string; cap1: string; cap2: string}>({
    provider: 'Audiowide',
    model: 'Orbitron',
    cta: 'Orbitron',
    cap0: 'Geist',
    cap1: 'Geist',
    cap2: 'Geist',
  })
  const [sizeByField, setSizeByField] = useState<{provider: string; model: string; cta: string; cap0: string; cap1: string; cap2: string}>({
    provider: '14',
    model: '22',
    cta: '12',
    cap0: '14',
    cap1: '14',
    cap2: '14',
  })
  const [alignByField, setAlignByField] = useState<{provider: 'left'|'center'|'right'; model: 'left'|'center'|'right'; cta: 'left'|'center'|'right'; cap0: 'left'|'center'|'right'; cap1: 'left'|'center'|'right'; cap2: 'left'|'center'|'right'}>({
    provider: 'left',
    model: 'left',
    cta: 'center',
    cap0: 'left',
    cap1: 'left',
    cap2: 'left',
  })

  const handleTryClick = () => {
    console.log('Try clicked with:', { providerName, modelName, capabilities })
  }

  const handleSave = () => {
    // Persist model config here (API, local storage, etc.)
    console.log('Save model:', { providerName, modelName, capabilities })
  }

  return (
    <div className="h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full p-6">
        {/* Left: Config form */}
        <AgentConfigForm
          providerName={providerName}
          modelName={modelName}
          capabilities={capabilities}
          onChange={(update) => {
            if (update.providerName !== undefined) setProviderName(update.providerName)
            if (update.modelName !== undefined) setModelName(update.modelName)
            if (update.capabilities !== undefined) setCapabilities(update.capabilities)
          }}
          onTry={handleTryClick}
          onSave={handleSave}
          ctaLabel={ctaLabel}
          onCtaChange={setCtaLabel}
          onSetFont={(field, font) => setFontByField((p) => ({ ...p, [field]: font }))}
          onSetSize={(field, size) => setSizeByField((p) => ({ ...p, [field]: size }))}
          onSetAlign={(field, align) => setAlignByField((p) => ({ ...p, [field]: align }))}
          currentFonts={fontByField as any}
          currentSizes={sizeByField as any}
          currentAligns={alignByField as any}
        />

        {/* Right: Provided styled card with updated typography */}
        <Card className="min-h-[400px] flex items-center justify-center">
          <BadgeCard
            providerName={providerName}
            modelName={modelName}
            capabilities={capabilities}
            ctaLabel={ctaLabel}
            providerFont={fontByField.provider}
            modelFont={fontByField.model}
            ctaFont={fontByField.cta}
            providerSizePx={parseInt(sizeByField.provider || '14', 10)}
            modelSizePx={parseInt(sizeByField.model || '22', 10)}
            ctaSizePx={parseInt(sizeByField.cta || '12', 10)}
            providerAlign={alignByField.provider}
            modelAlign={alignByField.model}
            ctaAlign={alignByField.cta}
            capabilityFonts={[fontByField.cap0, fontByField.cap1, fontByField.cap2]}
            capabilitySizesPx={[parseInt(sizeByField.cap0 || '14', 10), parseInt(sizeByField.cap1 || '14', 10), parseInt(sizeByField.cap2 || '14', 10)]}
            capabilityAligns={[alignByField.cap0, alignByField.cap1, alignByField.cap2]}
          />
        </Card>
      </div>
    </div>
  )
}
