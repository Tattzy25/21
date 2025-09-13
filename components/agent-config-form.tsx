'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function AgentConfigForm() {
  const [providerName, setProviderName] = useState('')
  const [modelName, setModelName] = useState('')
  const [capabilities, setCapabilities] = useState(['', '', ''])

  const handleCapabilityChange = (index: number, value: string) => {
    const newCapabilities = [...capabilities]
    newCapabilities[index] = value
    setCapabilities(newCapabilities)
  }

  const handleTryClick = () => {
    console.log('Try clicked with:', {
      providerName,
      modelName,
      capabilities
    })
    // TODO: Implement the try functionality
  }

  return (
    <Card className="min-h-[400px]">
      <CardHeader>
        <CardTitle>Agent Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="provider">Provider Name</Label>
          <Input
            id="provider"
            value={providerName}
            onChange={(e) => setProviderName(e.target.value)}
            placeholder="Enter provider name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="model">Model Name</Label>
          <Input
            id="model"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            placeholder="Enter model name"
          />
        </div>

        <div className="space-y-2">
          <Label>Capabilities</Label>
          {capabilities.map((capability, index) => (
            <Input
              key={index}
              value={capability}
              onChange={(e) => handleCapabilityChange(index, e.target.value)}
              placeholder={`Capability ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={handleTryClick}
          className="w-full"
          disabled={!providerName || !modelName || capabilities.some(c => !c)}
        >
          Tap to Try
        </Button>
      </CardContent>
    </Card>
  )
}