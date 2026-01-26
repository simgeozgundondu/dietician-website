import { getTranslations } from 'next-intl/server'
import { blogPosts } from '@/lib/data/blog'
import BlogCard from '@/components/blog/BlogCard'

export const metadata = {
  title: 'Blog - Dyt.Sudenur Özgündöndü',
  description: 'Beslenme ve sağlık hakkında güncel yazılar',
}

export default async function BlogPage() {
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
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

