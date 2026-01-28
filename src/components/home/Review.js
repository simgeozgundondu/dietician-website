'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { getReviews } from '@/lib/data/reviews'
import { useLocale } from 'next-intl'

export default function ReviewsCarousel() {
  const locale = useLocale() // aktif dil
  const reviews = getReviews(locale) // locale göre çekiyoruz

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
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const firstCard = container.querySelector('article')
    if (!firstCard) return

    const cardWidth = firstCard.offsetWidth
    const gap = 16
    const scrollAmount = cardWidth + gap

    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    setTimeout(checkScrollability, 300)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-meira text-gray-900"
          >
            {locale === 'en' ? 'Reviews' : 'Geri Bildirimler'}
          </motion.h2>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-xl shadow-md p-6 flex-shrink-0 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] min-w-[260px]"
              >
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < review.rating ? '#FACC15' : 'none'}
                      stroke={i < review.rating ? '#FACC15' : '#D1D5DB'}
                                      />
                  ))}
                </div>
                <p className="text-gray-800 mb-4 h-40">{review.text}</p>
                <span className="font-semibold text-gray-900">{review.name}</span>
              </motion.article>
            ))}
          </div>

          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10 hover:bg-gray-100"
              aria-label={locale === 'en' ? 'Previous' : 'Önceki'}
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10 hover:bg-gray-100"
              aria-label={locale === 'en' ? 'Next' : 'Sonraki'}
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
