import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const onest = localFont({
  src: [
    {
      path: '../../public/fonts/onest/Onest-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/onest/Onest-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/onest/Onest-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-onest',
});

export const metadata: Metadata = {
  title: 'Ershova Presentation',
  description: 'Оригинально визуализирую сложные идеи🌟',

  icons: {
    icon: '/favicon.ico', // /public путь
    shortcut: '/favicon.ico', // альтернативная иконка
    apple: '/favicon-apple.png', // для Apple устройств
    other: {
      rel: 'icon',
      url: '/favicon-apple.png', // современные браузеры
      type: 'image/png',
    },
  },

  openGraph: {
    title: 'Ershova Presentation',
    description: 'Оригинально визуализирую сложные идеи🌟',
    url: 'https://ershova-presentation.ru/',
    siteName: 'Ershova Presentation',
    images: [
      {
        url: '/cover.png', // или полный URL
        width: 1200,
        height: 630,
        alt: 'Ershova Presentation',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} bg-light-blue antialiased`}>
        {children}
      </body>
    </html>
  );
}
