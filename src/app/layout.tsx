"use client";

import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { AntdProvider } from "@/providers/AntdProvider";
import dynamic from "next/dynamic";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <AntdProvider>
            <MainLayout>{children}</MainLayout>
          </AntdProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
