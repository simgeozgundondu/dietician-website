import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { getRecipeBySlug, recipes } from '@/lib/data/recipes'
import { Clock, Users, ArrowLeft, UtensilsCrossed } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const recipe = getRecipeBySlug(slug)

  if (!recipe) {
    return {
      title: 'Tarif Bulunamadı',
    }
  }

  return {
    title: `${recipe.title} - Dyt.Sudenur Özgündöndü`,
    description: recipe.excerpt,
  }
}

export default async function RecipePage({ params }) {
  const { slug, locale } = await params
  const recipe = getRecipeBySlug(slug)

  if (!recipe) {
    notFound()
  }

  const t = await getTranslations('common')
  const tRecipes = await getTranslations('recipes')

  return (
    <article className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}/tarifler`}
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeft size={20} />
          <span>{tRecipes('back')}</span>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {recipe.title}
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            {recipe.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Clock size={20} />
              <span>{recipe.prepTime} {t('minutes')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={20} />
              <span>{recipe.serving} {t('person')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <UtensilsCrossed size={20} />
              <span className="text-primary-600 font-semibold">
                {recipe.calories} {t('kcal')}
              </span>
            </div>
          </div>
        </div>

        <div className="relative mb-12 rounded-xl overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Nutrition Info */}
          <div className="lg:col-span-1 bg-beige-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('nutrition')}
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Protein</span>
                <span className="font-semibold">{recipe.nutrition.protein}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Karbonhidrat</span>
                <span className="font-semibold">{recipe.nutrition.carbs}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Yağ</span>
                <span className="font-semibold">{recipe.nutrition.fat}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lif</span>
                <span className="font-semibold">{recipe.nutrition.fiber}</span>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('ingredients')}
            </h2>
            <ul className="space-y-2 mb-8">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('instructions')}
            </h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-primary-50 rounded-xl p-6">
          <p className="text-gray-700 leading-relaxed">
            {recipe.content}
          </p>
        </div>
      </div>
    </article>
  )
}




