import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Settings" 
        text="Manage your campaign settings"
      />
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Update your account information</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <Button>Save Changes</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Manage your notification settings</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="flex items-center space-x-2">
                <Input id="email-notifications" type="checkbox" />
                <Label htmlFor="email-notifications">Email Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input id="sms-notifications" type="checkbox" />
                <Label htmlFor="sms-notifications">SMS Notifications</Label>
              </div>
              <Button>Save Preferences</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

