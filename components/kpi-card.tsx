import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

interface KPICardProps {
  title: string
  value: string
  description: string
  change: number
}

export function KPICard({ title, value, description, change }: KPICardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {change > 0 ? (
          <ArrowUpIcon className="h-4 w-4 text-green-500" />
        ) : (
          <ArrowDownIcon className="h-4 w-4 text-red-500" />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        <p className={`text-xs mt-1 ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change > 0 ? '+' : ''}{change}%
        </p>
      </CardContent>
    </Card>
  )
}

