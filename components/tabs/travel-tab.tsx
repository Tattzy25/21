export function TravelTab() {
  return (
    <div className="space-y-6">
      <div className="bg-muted/50 min-h-[50vh] flex-1 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Travel</h2>
        <p className="text-muted-foreground mb-6">Travel planning and management</p>

        <div className="grid gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Trip Planning</h3>
            <p className="text-sm text-muted-foreground">Plan and organize business trips</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Booking Management</h3>
            <p className="text-sm text-muted-foreground">Manage flight, hotel, and transportation bookings</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Expense Tracking</h3>
            <p className="text-sm text-muted-foreground">Track and report travel expenses</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Travel Policies</h3>
            <p className="text-sm text-muted-foreground">Company travel policy management</p>
          </div>
        </div>
      </div>
    </div>
  )
}