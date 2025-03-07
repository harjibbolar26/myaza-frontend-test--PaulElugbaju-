import { Metadata } from "next";
import Sidebar from "./(home)/component/Sidebar";

export const metadata: Metadata = {
  title: {
    default: "UiFry",
    template: "UiFry",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div className="fixed font-sans z-50 hidden lg:block">
            <Sidebar />
          </div>
          <div className="flex-1 bg-backgroundSec min-h-screen text-white">
            <div className="px-8 py-6 lg:ml-64">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
