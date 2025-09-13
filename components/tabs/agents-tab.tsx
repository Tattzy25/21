// Using new rectangular Agent Badge Card instead of legacy circular AIModelCard
import BadgeCard from "@/components/ui/agent-badge-card"

export function AgentsTab() {
  const handleTryModel = () => {
    console.log("Launching GPT-5...")
    // Add your model interaction logic here
  }

  return (
    <div className="space-y-6">
      <div className="bg-muted/50 min-h-[50vh] flex-1 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Agents Dashboard</h2>
        <p className="text-muted-foreground mb-6">Manage your AI agents and configurations</p>

        {/* All Agents Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-6">All</h3>
          
          {/* Model Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            <div onClick={handleTryModel}>
              <BadgeCard
                providerName="OpenAI"
                modelName="GPT-5"
                capabilities={["Multimodal", "Orchestration", "Multi-Context"]}
                ctaLabel="TAP TO TRY"
              />
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <div className="grid gap-4 mt-12">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Team Management</h3>
            <p className="text-sm text-muted-foreground">Manage team access and permissions</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Billing</h3>
            <p className="text-sm text-muted-foreground">Monitor usage and billing information</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Limits</h3>
            <p className="text-sm text-muted-foreground">Configure rate limits and quotas</p>
          </div>
        </div>
      </div>
    </div>
  )
}