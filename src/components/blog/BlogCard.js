'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function BlogCard({ post }) {
  const locale = useLocale()
  const t = useTranslations('common')

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-beige-100"
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
              <span>{post.readingTime} {t('readTime')}</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <span className="text-primary-600 font-medium text-sm hover:underline">
            {t('readMore')} →
          </span>
        </div>
      </Link>
    </motion.article>
  )
}




