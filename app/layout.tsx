import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

export const metadata: Metadata = { title: "Ember & Bean | Slow coffee, well made", description: "A neighbourhood coffee house for slow mornings and good company." };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className="h-full antialiased"><body className="min-h-full"><CartProvider><Header />{children}<CartDrawer /><Footer /></CartProvider></body></html>;
}
