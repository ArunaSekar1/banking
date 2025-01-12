import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Aruna", lastName: 'JSM' };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      
      <div className="flex flex-1 flex-col">
        <div className="root-layout flex items-center gap-4 p-4">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            {/* Check if this div renders */}
            <MobileNav user=
            {loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
