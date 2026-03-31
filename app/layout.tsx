import type {Metadata} from 'next';
import { Noto_Serif, Manrope } from 'next/font/google';
import './globals.css';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Barbearia Gomez | Experiência Premium em Paciência, RJ',
  description: 'Mais que um corte, um refúgio de sofisticação. Profissionais qualificados, planos mensais e procedimentos de alto padrão em Paciência, RJ.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${notoSerif.variable} ${manrope.variable} scroll-smooth`}>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
