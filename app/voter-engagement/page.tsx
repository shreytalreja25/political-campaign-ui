import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VoterEngagementWidget } from "@/components/widgets/voter-engagement-widget"

export default function VoterEngagementPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Voter Engagement" 
        text="Track and analyze voter engagement metrics"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Engagement Overview</CardTitle>
            <CardDescription>Monthly voter engagement trends</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <VoterEngagementWidget />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
            <CardDescription>Important engagement statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt>Total Registered Voters:</dt>
                <dd className="font-semibold">50,000</dd>
              </div>
              <div className="flex justify-between">
                <dt>Active Supporters:</dt>
                <dd className="font-semibold">15,000</dd>
              </div>
              <div className="flex justify-between">
                <dt>Event Attendees:</dt>
                <dd className="font-semibold">5,000</dd>
              </div>
              <div className="flex justify-between">
                <dt>Volunteer Sign-ups:</dt>
                <dd className="font-semibold">2,500</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

