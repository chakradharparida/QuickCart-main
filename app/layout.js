import './globals.css';
import { Outfit } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { AppContextProvider } from '@/context/AppContext';

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] });

export const metadata = {
  title: "QuickCart - GreatStack",
  description: "E-Commerce with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
        <ClerkProvider>
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </ClerkProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}

