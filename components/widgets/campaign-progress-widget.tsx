"use client"

import { Progress } from "@/components/ui/progress"

export function CampaignProgressWidget() {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium">Fundraising Goal</p>
            <p className="text-2xl font-bold">$500,000 / $1,000,000</p>
          </div>
          <div className="text-sm text-muted-foreground">50%</div>
        </div>
        <Progress value={50} className="mt-2" />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium">Voter Outreach</p>
            <p className="text-2xl font-bold">75,000 / 100,000</p>
          </div>
          <div className="text-sm text-muted-foreground">75%</div>
        </div>
        <Progress value={75} className="mt-2" />
      </div>
    </div>
  )
}

