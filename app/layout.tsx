import Sidebar from "@/components/Sidebar"
import "./globals.css"
import MobileNav from "@/components/MobileNav"

export const metadata = {
  title: "EDE — Portfolio",
  description: "Backend Developer expanding into Frontend",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ display: "flex", minHeight: "100vh" }}>
        <MobileNav />
        <Sidebar />
        <main style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>{children}</main>
      </body>
    </html>
  )
}