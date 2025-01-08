"use client"

import { Home, BarChart, Users, MessageSquare, FileText, Settings, User } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

const navItems = [
  { icon: Home, title: 'Dashboard', url: '/' },
  { icon: BarChart, title: 'Analytics', url: '/analytics' },
  { icon: Users, title: 'Voter Engagement', url: '/voter-engagement' },
  { icon: MessageSquare, title: 'Social Media', url: '/social-media' },
  { icon: FileText, title: 'Reports', url: '/reports' },
  { icon: Settings, title: 'Settings', url: '/settings' },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center px-4 py-2">
        <h2 className="text-lg font-semibold">Campaign HQ</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center">
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarGroup className="mt-auto">
        <SidebarGroupLabel>Profile</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/profile" className="flex items-center">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src="/avatar.png" alt="Candidate" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarRail />
    </Sidebar>
  )
}

