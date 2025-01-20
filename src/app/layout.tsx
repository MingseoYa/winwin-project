import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/commons/styles/reset.css";
import ApolloSetting from "@/commons/settings/apollo";

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
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased`}>
        <ApolloSetting>
          {children}
          {modal}
        </ApolloSetting>
      </body>
    </html>
  );
}
