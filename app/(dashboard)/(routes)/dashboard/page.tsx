"use client"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { MessageSquare, ArrowRight, ImageIcon, VideoIcon, Music, Code } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: "bg-violet-500/10 dark:bg-violet-500/20",
    href: "/conversation"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    bgColor: "bg-pink-500/10 dark:bg-pink-500/20",
    color: "text-pink-700"
},
{
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
    color: "text-orange-700"
},
{
    label: "Music Generation",
    icon: Music,
    href: "/music",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
    color: "text-emerald-500"
},
{
    label: "Code Generation",
    icon: Code,
    href: "/code",
    bgColor: "bg-green-500/10 dark:bg-green-500/20",
    color: "text-green-700"
},
]
export default function DashboardPage() {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">IAmagination</h2>
        <p className="text-muted-foreground
        font-light text-sm text-center md:text-lg
        ">Built with <Link className="underline" target="_blank" href={"https://openai.com/"}>Open AI</Link></p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
            <Card 
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 dark:border-white/20 flex items-center
            justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">
                  {tool.label}
                </div>
              </div>
              <ArrowRight />
            </Card>
          ))}
      </div>
    </div>
  )
}
