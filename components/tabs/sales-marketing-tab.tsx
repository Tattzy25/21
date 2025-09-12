export function SalesMarketingTab() {
  return (
    <div className="space-y-6">
      <div className="bg-muted/50 min-h-[50vh] flex-1 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Sales & Marketing</h2>
        <p className="text-muted-foreground mb-6">Sales analytics and marketing tools</p>

        <div className="grid gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Sales Dashboard</h3>
            <p className="text-sm text-muted-foreground">Track sales performance and metrics</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Marketing Campaigns</h3>
            <p className="text-sm text-muted-foreground">Manage and analyze marketing campaigns</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Lead Generation</h3>
            <p className="text-sm text-muted-foreground">Lead management and conversion tracking</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Customer Analytics</h3>
            <p className="text-sm text-muted-foreground">Customer behavior and segmentation analysis</p>
          </div>
        </div>
      </div>
    </div>
  )
}