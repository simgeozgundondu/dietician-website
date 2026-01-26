'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function RecipeCard({ recipe }) {
  const locale = useLocale()
  const t = useTranslations('common')

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-beige-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-beige-100"
    >
      <Link href={`/${locale}/tarifler/${recipe.slug}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {recipe.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {recipe.excerpt}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>{recipe.prepTime} {t('minutes')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users size={16} />
              <span>{recipe.serving} {t('person')}</span>
            </div>
            <span className="text-primary-600 font-semibold">
              {recipe.calories} {t('kcal')}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}




