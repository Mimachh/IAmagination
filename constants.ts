import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
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