import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SocialMediaWidget } from "@/components/widgets/social-media-widget"

export default function SocialMediaPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Social Media" 
        text="Monitor your social media performance"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Social Media Overview</CardTitle>
            <CardDescription>Daily social media performance</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <SocialMediaWidget />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Platform Breakdown</CardTitle>
            <CardDescription>Followers across platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt>Facebook:</dt>
                <dd className="font-semibold">25,000</dd>
              </div>
              <div className="flex justify-between">
                <dt>Twitter:</dt>
                <dd className="font-semibold">40,000</dd>
              </div>
              <div className="flex justify-between">
                <dt>Instagram:</dt>
                <dd className="font-semibold">30,000</dd>
              </div>
              <div className="flex justify-between">
                <dt>LinkedIn:</dt>
                <dd className="font-semibold">15,000</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

