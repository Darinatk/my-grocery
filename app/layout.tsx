import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title:"My Grocery", description:"Personal grocery assistant" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
