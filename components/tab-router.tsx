'use client'

import { useState, useEffect } from 'react'
import { AgentsTab } from './tabs/agents-tab'
import { ControlPanelTab } from './tabs/control-panel-tab'
import { SalesMarketingTab } from './tabs/sales-marketing-tab'
import { TravelTab } from './tabs/travel-tab'

export function TabRouter() {
  const [currentTab, setCurrentTab] = useState('agents')

  useEffect(() => {
    // Get initial hash from URL
    const hash = window.location.hash.replace('#/', '') || 'agents'
    setCurrentTab(hash)

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#/', '') || 'agents'
      setCurrentTab(newHash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderTab = () => {
    switch (currentTab) {
      case 'agents':
        return <AgentsTab />
      case 'control-panel':
        return <ControlPanelTab />
      case 'sales-marketing':
        return <SalesMarketingTab />
      case 'travel':
        return <TravelTab />
      default:
        return <AgentsTab />
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {renderTab()}
    </div>
  )
}