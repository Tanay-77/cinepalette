import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'CinePalette | Guess the Movie From Its Colors',
  description: 'A cinematic movie guessing game where users identify films from generated color palette timelines.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="bg-[#14181C] text-[#8A939B] font-sans antialiased selection:bg-[#00E054]/30">
        {children}
      </body>
    </html>
  );
}
