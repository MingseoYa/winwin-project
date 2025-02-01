import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/commons/styles/reset.css";
import "@/commons/styles/slick.css";
import "@/commons/styles/slick-theme.css";
import ApolloSetting from "@/commons/settings/apollo";
import LayoutComponent from "@/commons/layout";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "winwin",
  description: "프리랜서와 클라이언트를 연결하는 최적의 외주 플랫폼",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased`}>
        <ApolloSetting>
          <LayoutComponent>
            {children}
            {auth}
          </LayoutComponent>
        </ApolloSetting>
      </body>
    </html>
  );
}
