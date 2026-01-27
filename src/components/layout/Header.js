'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import mainIcon from '@/images/main-icon.png'

export default function Header() {
  const t = useTranslations('common')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [/*  */
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/hakkimda`, label: t('about') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/tarifler`, label: t('recipes') },
    { href: `/${locale}/iletisim`, label: t('contact') },
  ]

  const changeLocale = (newLocale) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-beige50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <Image
              src={mainIcon}
              alt="Sudenur Özgündöndü"
              width={48}
              height={48}
            />
            <span className="text-md sm:text-2xl font-bold text-primary-600">
               {t('dietician')} <br className="block sm:hidden" />
              Sudenur Özgündöndü
            </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Select */}
            <select
              value={locale}
              onChange={(e) => changeLocale(e.target.value)}
              className="bg-transparent border border-gray-300 rounded-md px-2 py-1 text-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <option value="tr">TR</option>
              <option value="en">EN</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              <div className="flex flex-col items-center space-y-4 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Language Select */}
                <div>
                  <select
                    value={locale}
                    onChange={(e) => changeLocale(e.target.value)}
                    className=" bg-transparent border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="tr">Türkçe</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
