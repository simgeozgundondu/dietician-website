'use client'

import { MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const t = useTranslations('contact.whatsapp')
  const phoneNumber = '905352599685'
  const message = encodeURIComponent(t('text'))

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-colors z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle size={28} />
    </motion.a>
  )
}




