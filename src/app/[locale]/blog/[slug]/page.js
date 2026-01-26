import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { getBlogPostBySlug, blogPosts } from '@/lib/data/blog'
import { formatDate } from '@/lib/utils'
import { Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı',
    }
  }

  return {
    title: `${post.title} - Dyt.Sudenur Özgündöndü`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug, locale } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const t = await getTranslations('common')
  const tBlog = await getTranslations('blog')

  return (
    <article className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeft size={20} />
          <span>{tBlog('back')}</span>
        </Link>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-primary-600 uppercase">
              {post.category}
            </span>
            <div className="flex items-center space-x-1 text-gray-500 text-sm">
              <Clock size={16} />
              <span>{post.readingTime} {t('readTime')}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            {post.excerpt}
          </p>
          <time className="text-gray-500 text-sm">
            {formatDate(post.date)}
          </time>
        </div>

        <div className="relative mb-12 rounded-xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed">
            {post.content.split('\n\n').map((section, sectionIndex) => {
              const lines = section.split('\n')
              const elements = []
              let currentList = []
              let listKey = 0

              lines.forEach((line, lineIndex) => {
                const key = `${sectionIndex}-${lineIndex}`
                
                if (line.startsWith('## ')) {
                  if (currentList.length > 0) {
                    elements.push(
                      <ul key={`list-${listKey++}`} className="list-disc list-inside mb-4 space-y-2">
                        {currentList.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )
                    currentList = []
                  }
                  elements.push(
                    <h2 key={key} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      {line.replace('## ', '')}
                    </h2>
                  )
                } else if (line.startsWith('- ')) {
                  currentList.push(line.replace('- ', ''))
                } else if (line.trim()) {
                  if (currentList.length > 0) {
                    elements.push(
                      <ul key={`list-${listKey++}`} className="list-disc list-inside mb-4 space-y-2">
                        {currentList.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )
                    currentList = []
                  }
                  elements.push(
                    <p key={key} className="mb-4">
                      {line}
                    </p>
                  )
                }
              })

              if (currentList.length > 0) {
                elements.push(
                  <ul key={`list-${listKey}`} className="list-disc list-inside mb-4 space-y-2">
                    {currentList.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )
              }

              return <div key={sectionIndex}>{elements}</div>
            })}
          </div>
        </div>
      </div>
    </article>
  )
}

