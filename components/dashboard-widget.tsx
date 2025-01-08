"use client"

import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'

interface DashboardWidgetProps {
  id: string
  title: string
  children: React.ReactNode
  index: number
  moveWidget: (dragIndex: number, hoverIndex: number) => void
  onRemove: () => void
}

export function DashboardWidget({ id, title, children, index, moveWidget, onRemove }: DashboardWidgetProps) {
  const ref = useRef<HTMLDivElement>(null)

  const [{ handlerId }, drop] = useDrop({
    accept: 'widget',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: { index: number }, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      moveWidget(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'widget',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <Card ref={ref} data-handler-id={handlerId} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Button variant="ghost" size="icon" onClick={onRemove}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

