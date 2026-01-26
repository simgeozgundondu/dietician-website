'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

import heroImage from '@/images/hero-image.png'
import mainIcon from '@/images/main-icon.png'

export default function Hero() {
  const t = useTranslations('home')
  const tWhatsApp = useTranslations('contact.whatsapp')
  const locale = useLocale()
  const phoneNumber = '905352599685'
  const message = encodeURIComponent(tWhatsApp('text'))

  return (
    <section className="relative min-h-screen bg-beige-50 overflow-hidden flex items-center -mt-20 pt-20">
      {/* Sağ taraf pastel pembe diyagonal arka plan */}
      <div
        className="absolute inset-0 bg-primary-100 hidden lg:block"
        style={{
          clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 45% 100%)',
        }}
      />

      {/* Sağ taraf görsel */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[46%] pointer-events-none opacity-50 hidden lg:block">
        <div
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        >
          <Image
            src={heroImage}
            alt="Diyetisyen Sudenur Özgündöndü"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: 'center top' }}
          />
          {/* Hafif soft overlay */}
          <div className="absolute inset-0 bg-white/10" />
        </div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 w-full max-w-7xl lg:ml-20 sm:mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[80vh] py-20">
          {/* Sol taraf – metin */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 lg:pl-6"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <Image
                src={mainIcon}
                alt=""
                width={96}
                height={96}
                className="opacity-80 mx-auto"
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(216, 155, 184, 0.25))',
                }}
                priority
              />
            </motion.div>

            {/* Başlık */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-meira text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-gray-900 mb-6 leading-[1.1]"
            >
              {t('title')}
            </motion.h1>

            {/* Alt başlık */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-meira text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                {t('cta')}
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Sağ boş kolon (sadece layout için) */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
