import { LandingNavbar } from "@/components/Landing-navbar";

const PoliticsLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="h-full bg-dark overflow-auto">
        <div className="mx-auto max-w-screen-xl h-full w-full">
            <LandingNavbar />
            {children}
        </div>
      </main>
     );
  }
   
  export default PoliticsLayout;