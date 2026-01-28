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
    <div className="bg-white min-h-screen py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 sm:mb-8 text-center">
          <h1 className="text-xl md:text-2xl font-meira text-gray-800">
            {t('subtitle')}
          </h1>
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

