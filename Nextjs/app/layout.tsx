'use client';

import { Inter } from "next/font/google";
import { parseCookies, setCookie } from "nookies";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "./component/common/module/header";
import { useEffect, useState } from "react";
import { getAuth } from "./component/users/service/user.slice";
import { useSelector } from "react-redux";
import DashHeader from "./component/common/module/dash-header";

const ReduxProvider = dynamic(() => import("@/redux/redux-provider"), {
  ssr: false
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {parseCookies().message === 'SUCCESS' && <Header />}
        {parseCookies().message === 'ADIMIN' && <DashHeader />}
        <div className="mt-200">
          <ReduxProvider> {children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}
