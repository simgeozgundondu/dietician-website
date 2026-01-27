import { getTranslations } from 'next-intl/server'
import { blogPosts } from '@/lib/data/blog'
import { getBlogPostBySlug } from '@/lib/data/blog'
import BlogCard from '@/components/blog/BlogCard'

export const metadata = {
  title: 'Diyetisyen Sudenur Özgündöndü - Gönen/BALIKESİR',
  description: 'Gönen’de diyetisyen arayanlar için Diyetisyen Sudenur Özgündöndü, en iyi diyet hizmetleri sunar. Kilo kontrolü ve sağlıklı beslenme danışmanlığı için bizi tercih edin.',
  keywords:'gönen diyetisyen,gönen alo diyetisyen,gönen en iyi diyetisyen,diyetisyen sudenur özgündöndü'
}

export default async function BlogPage({ params }) {
  const { locale } = await params
  const t = await getTranslations('blog')

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const localizedPost = getBlogPostBySlug(post.slug, locale)
            return <BlogCard key={post.id} post={localizedPost} />
          })}
        </div>
      </div>
    </div>
  )
}

