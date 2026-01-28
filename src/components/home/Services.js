'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Scale, Dumbbell, Heart, Baby } from 'lucide-react'

const icons = {
  weightControl: Scale,
  athlete: Dumbbell,
  disease: Heart,
  pregnancy: Baby,
}

export default function Services() {
  const t = useTranslations('home.services')

  const services = [
    {
      key: 'weightControl',
      icon: 'weightControl',
    },
    {
      key: 'athlete',
      icon: 'athlete',
    },
    {
      key: 'disease',
      icon: 'disease',
    },
    {
      key: 'pregnancy',
      icon: 'pregnancy',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-meira text-gray-900 mb-4">
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = icons[service.icon]
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-beige-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-beige-100"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-primary-700" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`${service.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`${service.key}.description`)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}




