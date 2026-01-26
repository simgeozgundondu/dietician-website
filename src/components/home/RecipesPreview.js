'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { recipes } from '@/lib/data/recipes'
import { Clock, Users } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export default function RecipesPreview() {
  const t = useTranslations('home.recipes')
  const tCommon = useTranslations('common')
  const locale = useLocale()
  const latestRecipes = recipes.slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            {t('title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/${locale}/tarifler`}
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-2"
            >
              <span>{t('viewAll')}</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestRecipes.map((recipe, index) => (
            <motion.article
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-beige-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {recipe.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{recipe.prepTime} {tCommon('minutes')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{recipe.serving} {tCommon('person')}</span>
                    </div>
                    <span className="text-primary-600 font-semibold">
                      {recipe.calories} {tCommon('kcal')}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}




