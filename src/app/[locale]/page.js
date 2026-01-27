import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import BlogPreview from '@/components/home/BlogPreview'
import RecipesPreview from '@/components/home/RecipesPreview'
import ReviewsCarousel from '@/components/home/Review'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <RecipesPreview />
      <BlogPreview />
      <ReviewsCarousel/>
    </div>
  )
}

