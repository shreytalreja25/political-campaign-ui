import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Candidate Profile" 
        text="View and manage your profile information"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your basic profile details</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/avatar.png" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-muted-foreground">Democratic Candidate for Senate</p>
            <Button>Edit Profile</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Campaign Summary</CardTitle>
            <CardDescription>Key information about your campaign</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt>Campaign Start Date:</dt>
                <dd className="font-semibold">January 1, 2023</dd>
              </div>
              <div className="flex justify-between">
                <dt>Election Date:</dt>
                <dd className="font-semibold">November 5, 2024</dd>
              </div>
              <div className="flex justify-between">
                <dt>Campaign Manager:</dt>
                <dd className="font-semibold">Sarah Johnson</dd>
              </div>
              <div className="flex justify-between">
                <dt>Fundraising Goal:</dt>
                <dd className="font-semibold">$5,000,000</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

