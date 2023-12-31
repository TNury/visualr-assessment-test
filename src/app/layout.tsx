import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';

import { Sidebar } from '@vat/components/layout/sidebar/Sidebar';
import { Snackbar } from '@vat/components/ui/snackbar/Snackbar';

import { SnackbarProvider } from '@vat/context/snackbar-context/SnackbarContext';

import { cn } from '@vat/lib/utils';

import '@vat/styles/globals.css';

const barlow = Barlow({
  weight: ['400', '500', '600'],
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jaegar Resto',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/assets/media/png/logo.png' sizes='512x512' />
      </head>
      <SnackbarProvider>
        <body
          className={cn(
            barlow.className,
            'bg-base-dark-bg-1 transition-opacity duration-150'
          )}>
          <Sidebar />
          {children}
        </body>
        <Snackbar />
      </SnackbarProvider>
    </html>
  );
};

export default RootLayout;
