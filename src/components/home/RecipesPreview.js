'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { recipes } from '@/lib/data/recipes'
import { getRecipeBySlug } from '@/lib/data/recipes'
import { Clock, Users, ArrowRight, ChevronLeft, ChevronRight , Instagram} from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function RecipesPreview() {
  const t = useTranslations('home.recipes')
  const tCommon = useTranslations('common')
  const locale = useLocale()
  const tRecipes = useTranslations('recipes')
  const allRecipes = recipes.map(recipe => getRecipeBySlug(recipe.slug, locale))
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollability()
    window.addEventListener('resize', checkScrollability)
    return () => window.removeEventListener('resize', checkScrollability)
  }, [])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const firstCard = container.querySelector('article')
      if (!firstCard) return
      
      const cardWidth = firstCard.offsetWidth
      const gap = 32 // gap-8 = 2rem = 32px
      const scrollAmount = cardWidth + gap
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
      
      setTimeout(checkScrollability, 300)
    }
  }

  return (
    <section className="py-20 bg-beige-50">
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

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allRecipes.map((recipe, index) => (
              <motion.article
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-beige-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] min-w-[280px]"
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
                    {recipe.instagramReelLink && (
                      <a
                        href={recipe.instagramReelLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm text-[#E4405F] hover:text-[#C13584] font-medium transition-colors"
                      >
                      <Instagram size={16} />
                      <span>{tRecipes('watchReel')}</span>
                      </a>
                )}
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10 hover:bg-primary-50"
              aria-label="Önceki"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10 hover:bg-primary-50"
              aria-label="Sonraki"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}




