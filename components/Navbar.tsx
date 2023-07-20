import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "@/components/Mobile-sidebar"
import { getApiLimitCount } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
        <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
        <div className="flex w-full justify-end items-center gap-2">
          <UserButton afterSignOutUrl="/"/>
        </div>
    </div>
  )
}

export default Navbar