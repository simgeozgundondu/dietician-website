import { getTranslations } from 'next-intl/server'
import { recipes } from '@/lib/data/recipes'
import RecipeCard from '@/components/recipes/RecipeCard'

export const metadata = {
  title: 'Sağlıklı Tarifler - Sudenur Özgündöndü',
  description: 'Beslenme planınıza uygun lezzetli tarifler',
}

export default async function RecipesPage() {
  const t = await getTranslations('recipes')

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
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  )
}

