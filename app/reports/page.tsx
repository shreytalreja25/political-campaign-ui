import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export default function ReportsPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Reports" 
        text="Generate and download campaign reports"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Voter Engagement Report</CardTitle>
            <CardDescription>Detailed analysis of voter interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" /> Download Report
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Social Media Impact Report</CardTitle>
            <CardDescription>Comprehensive social media performance analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" /> Download Report
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Campaign Finance Report</CardTitle>
            <CardDescription>Detailed breakdown of campaign finances</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" /> Download Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

