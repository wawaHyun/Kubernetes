'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "./component/common/style/header";
import { useState } from "react";

const ReduxProvider = dynamic(() => import("@/redux/redux-provider"), {
  ssr: false
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [showHeader, setShowHeader] = useState<boolean>(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        {showHeader && <Header />}
        <div className="mt-200">
        <ReduxProvider> {children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}
