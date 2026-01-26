'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { blogPosts } from '@/lib/data/blog'
import { formatDate, calculateReadingTime } from '@/lib/utils'
import { ArrowRight, Clock } from 'lucide-react'

export default function BlogPreview() {
  const t = useTranslations('home.blog')
  const tCommon = useTranslations('common')
  const locale = useLocale()
  const latestPosts = blogPosts.slice(0, 3)

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
              href={`/${locale}/blog`}
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-2"
            >
              <span>{t('viewAll')}</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <Link href={`/${locale}/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary-600 uppercase">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Clock size={14} />
                      <span>{post.readingTime} {tCommon('readTime')}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-primary-600 font-medium text-sm hover:underline">
                    {tCommon('readMore')} →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}




