import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VoterEngagementWidget } from "@/components/widgets/voter-engagement-widget"
import { SocialMediaWidget } from "@/components/widgets/social-media-widget"
import { AdPerformanceWidget } from "@/components/widgets/ad-performance-widget"

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Analytics" 
        text="Comprehensive analytics for your campaign"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Voter Engagement</CardTitle>
            <CardDescription>Monthly engagement trends</CardDescription>
          </CardHeader>
          <CardContent>
            <VoterEngagementWidget />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Social Media Performance</CardTitle>
            <CardDescription>Daily social media metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <SocialMediaWidget />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ad Performance</CardTitle>
            <CardDescription>Overview of ad campaign results</CardDescription>
          </CardHeader>
          <CardContent>
            <AdPerformanceWidget />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

