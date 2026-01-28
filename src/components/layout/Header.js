'use client'
import { useState, useEffect } from 'react'
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

  // Mobil menü açıkken scroll'u engelle
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navItems = [
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
    <>
      <header className="sticky top-0 z-50 bg-beige50 backdrop-blur-sm shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <Image src={mainIcon} alt="Sudenur Özgündöndü" width={48} height={48} />
              <span className="text-md sm:text-xl lg:text-2xl font-bold text-primary-600">
                {t('dietician')}
                <br className="block sm:hidden" /> Sudenur Özgündöndü
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
              className="md:hidden p-2 text-gray-700 relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="font-meira fixed inset-0 z-40 md:hidden bg-beige-50"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
              {/* Logo - Mobil menüde */}
              <div className="mb-8">
                <Image src={mainIcon} alt="Sudenur Özgündöndü" width={64} height={64} />
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xl text-gray-700 hover:text-primary-600 transition-colors font-small"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Language Select */}
              <select
                value={locale}
                onChange={(e) => changeLocale(e.target.value)}
                className="bg-transparent border border-gray-300 rounded-md px-4 py-2 text-base mt-4"
              >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}