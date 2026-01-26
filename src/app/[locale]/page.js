import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import BlogPreview from '@/components/home/BlogPreview'
import RecipesPreview from '@/components/home/RecipesPreview'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <RecipesPreview />
      <BlogPreview />
    </div>
  )
}

