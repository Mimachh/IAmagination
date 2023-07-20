import Image from "next/image";

interface EmptyProps {
    label: string;
}
export default function Empty({
    label
}: EmptyProps) {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
        <div className="relative h-72 w-72">
            <Image 
            alt="Empty"
            fill
            src="/empty.jpg"
            sizes="33vh"
            priority
            />
            <a href="https://fr.freepik.com/vecteurs-libre/aucune-illustration-concept-donnees_5928293.htm#query=empty&position=12&from_view=search&track=sph">Image de storyset</a> sur Freepik
        </div>
        <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  )
}
