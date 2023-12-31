"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "@/components/Sidebar"
import { useEffect, useState } from "react"

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}
export default function MobileSidebar({
  apiLimitCount = 0,
  isPro = false
}:MobileSidebarProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [])
  if(!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
            <Menu className="md:hidden"/>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
      </SheetContent>
    </Sheet>
  )
}
