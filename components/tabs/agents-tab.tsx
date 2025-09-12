export function AgentsTab() {
  return (
    <div className="space-y-6">
      <div className="bg-muted/50 min-h-[50vh] flex-1 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Agents Dashboard</h2>
        <p className="text-muted-foreground mb-6">Manage your AI agents and configurations</p>

        <div className="grid gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">All Agents</h3>
            <p className="text-sm text-muted-foreground">View and manage all your agents</p>
          </div>
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