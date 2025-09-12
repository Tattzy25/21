export function ControlPanelTab() {
  return (
    <div className="space-y-6">
      <div className="bg-muted/50 min-h-[50vh] flex-1 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Control Panel</h2>
        <p className="text-muted-foreground mb-6">System administration and configuration</p>

        <div className="grid gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Agent Configuration</h3>
            <p className="text-sm text-muted-foreground">Configure agent settings and parameters</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">System Settings</h3>
            <p className="text-sm text-muted-foreground">General system configuration</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Monitoring</h3>
            <p className="text-sm text-muted-foreground">System health and performance metrics</p>
          </div>
        </div>
      </div>
    </div>
  )
}