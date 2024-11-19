import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Victory",
  description: "KBO 데이터와 나의 팀 춫천",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
