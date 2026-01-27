import { DM_Serif_Display } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import '../globals.css'

const locales = ['tr', 'en']

const meira = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-meira',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  return {
    title: 'Diyetisyen Sudenur Özgündöndü - Gönen/BALIKESİR',
    description: 'Gönen’de diyetisyen arayanlar için Diyetisyen Sudenur Özgündöndü, en iyi diyet hizmetleri sunar. Kilo kontrolü ve sağlıklı beslenme danışmanlığı için bizi tercih edin.',
    keywords:'gönen diyetisyen,gönen alo diyetisyen,gönen en iyi diyetisyen, diyetisyen sudenur özgündöndü'
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`antialiased ${meira.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

