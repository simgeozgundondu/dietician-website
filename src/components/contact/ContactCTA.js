'use client'

import { MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function ContactCTA() {
  const t = useTranslations('contact')
  const tWhatsApp = useTranslations('contact.whatsapp')
  const phoneNumber = '905352599685'
  const message = encodeURIComponent(tWhatsApp('text'))

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MessageCircle size={24} />
      <span>{t('ctaButton')}</span>
    </motion.a>
  )
}


