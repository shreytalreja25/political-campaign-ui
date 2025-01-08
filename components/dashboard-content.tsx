"use client"

import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DashboardWidget } from "@/components/dashboard-widget"
import { VoterEngagementWidget } from "@/components/widgets/voter-engagement-widget"
import { SocialMediaWidget } from "@/components/widgets/social-media-widget"
import { AdPerformanceWidget } from "@/components/widgets/ad-performance-widget"
import { CampaignProgressWidget } from "@/components/widgets/campaign-progress-widget"
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'

const availableWidgets = [
  { id: 'voter-engagement', title: 'Voter Engagement', component: VoterEngagementWidget },
  { id: 'social-media', title: 'Social Media Metrics', component: SocialMediaWidget },
  { id: 'ad-performance', title: 'Ad Performance', component: AdPerformanceWidget },
  { id: 'campaign-progress', title: 'Campaign Progress', component: CampaignProgressWidget },
]

export function DashboardContent() {
  const [activeWidgets, setActiveWidgets] = useState(availableWidgets)

  const handleAddWidget = () => {
    // For simplicity, we're just adding a random widget here
    const remainingWidgets = availableWidgets.filter(
      widget => !activeWidgets.find(w => w.id === widget.id)
    )
    if (remainingWidgets.length > 0) {
      const randomWidget = remainingWidgets[Math.floor(Math.random() * remainingWidgets.length)]
      setActiveWidgets([...activeWidgets, randomWidget])
    }
  }

  const handleRemoveWidget = (id: string) => {
    setActiveWidgets(activeWidgets.filter(widget => widget.id !== id))
  }

  const moveWidget = (dragIndex: number, hoverIndex: number) => {
    const newWidgets = [...activeWidgets]
    const draggedWidget = newWidgets[dragIndex]
    newWidgets.splice(dragIndex, 1)
    newWidgets.splice(hoverIndex, 0, draggedWidget)
    setActiveWidgets(newWidgets)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="mt-6">
        <Button onClick={handleAddWidget}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Widget
        </Button>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activeWidgets.map((widget, index) => (
          <DashboardWidget
            key={widget.id}
            id={widget.id}
            title={widget.title}
            index={index}
            moveWidget={moveWidget}
            onRemove={() => handleRemoveWidget(widget.id)}
          >
            <widget.component />
          </DashboardWidget>
        ))}
      </div>
    </DndProvider>
  )
}

