import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { KPICard } from "@/components/kpi-card"
import { VoterEngagementWidget } from "@/components/widgets/voter-engagement-widget"
import { SocialMediaWidget } from "@/components/widgets/social-media-widget"
import { DataTable } from "@/components/data-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const recentActivitiesColumns = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "activity",
    header: "Activity",
  },
  {
    accessorKey: "impact",
    header: "Impact",
  },
]

const recentActivitiesData = [
  { date: "2023-06-01", activity: "Town Hall Meeting", impact: "High" },
  { date: "2023-06-03", activity: "Social Media Campaign", impact: "Medium" },
  { date: "2023-06-05", activity: "Door-to-Door Canvassing", impact: "High" },
  { date: "2023-06-07", activity: "Press Conference", impact: "Medium" },
  { date: "2023-06-09", activity: "Fundraising Event", impact: "High" },
]

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Campaign Dashboard" 
        text="Monitor and manage your political campaign metrics"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Supporters"
          value="54,321"
          description="Total number of registered supporters"
          change={2.5}
        />
        <KPICard
          title="Funds Raised"
          value="$1,234,567"
          description="Total campaign funds raised"
          change={5.1}
        />
        <KPICard
          title="Social Media Followers"
          value="987,654"
          description="Total followers across all platforms"
          change={-1.2}
        />
        <KPICard
          title="Volunteer Sign-ups"
          value="3,210"
          description="Total number of volunteer sign-ups"
          change={3.7}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Voter Engagement</CardTitle>
            <CardDescription>Monthly voter engagement trends</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <VoterEngagementWidget />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Social Media Performance</CardTitle>
            <CardDescription>Daily social media metrics</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <SocialMediaWidget />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Campaign Activities</CardTitle>
          <CardDescription>Overview of recent campaign events and their impact</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={recentActivitiesColumns} data={recentActivitiesData} />
        </CardContent>
      </Card>
    </DashboardShell>
  )
}

