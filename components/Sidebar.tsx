"use client"

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music, Code, Settings } from "lucide-react"
import { usePathname } from 'next/navigation'
import FreeCounter from "@/components/FreeCounter";
import { Badge } from "./ui/badge";

const poppins = Poppins({
    weight: "600",
    subsets: ["latin"]
});

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
       
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
        beta: true
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
        beta: true
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
        beta: true
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-700"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },
]

interface SidebarProps {
    apiLimitCount: number;
    isPro: boolean;
};

export default function Sidebar({
    apiLimitCount = 0,
    isPro = false
}: SidebarProps) {
    const pathname = usePathname();
  return (

    <div 
    className="space-y-4 py-4 flex flex-col h-full
    bg-[#111827] text-white
    "
    >
        <div className="px-3 py-2 mb-12 md:mb-0 flex-1 md:flex-initial">
            <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
                <div className="relative w-8 h-8 mr-4">
                    <Image 
                        fill
                        alt="Logo"
                        src="/logo.png"
                    />
                </div>
                <h1 className={cn("text-2xl font-bold", poppins.className)}>IAmagination</h1>
            </Link>
            <div className="space-y-1">
                {routes.map((route) => (
                    <Link
                    href={route.href}
                    key={route.href}
                    className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointerhover:text-white hover:bg-white/10 rounded-lg transition "
                    , pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
                    >
                        <div className="flex items-center flex-1 gap-2">
                            <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                            {route.label}
                            {route.beta == true ? (
                                <Badge variant='premium'>Beta</Badge>
                            ) : ( "" )}
                            
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        <FreeCounter 
        isPro={isPro}
        apiLimitCount={apiLimitCount}
        />  
    </div>
  )
}
