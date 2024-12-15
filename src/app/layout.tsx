import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Victory - 당신만의 KBO 골든 글러브 수상자 예측',
  description: 'KBO 리그를 올해의 골든 글러브 수상자 예측합니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
