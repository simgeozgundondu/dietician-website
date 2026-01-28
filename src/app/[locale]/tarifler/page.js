import { getTranslations } from 'next-intl/server'
import { recipes } from '@/lib/data/recipes'
import { getRecipeBySlug } from '@/lib/data/recipes'
import RecipeCard from '@/components/recipes/RecipeCard'

export const metadata = {
  title: 'Diyetisyen Sudenur Özgündöndü - Gönen/BALIKESİR',
  description: 'Gönen’de diyetisyen arayanlar için Diyetisyen Sudenur Özgündöndü, en iyi diyet hizmetleri sunar. Kilo kontrolü ve sağlıklı beslenme danışmanlığı için bizi tercih edin.',
  keywords:'gönen diyetisyen,gönen alo diyetisyen,gönen en iyi diyetisyen,diyetisyen sudenur özgündöndü'
}

export default async function RecipesPage({ params }) {
  const { locale } = await params
  const t = await getTranslations('recipes')

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl font-meira text-gray-900 mb-1">
            {t('title')}
          </h1>
          <p className="text-md sm:text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => {
            const localizedRecipe = getRecipeBySlug(recipe.slug, locale)
            return <RecipeCard key={recipe.id} recipe={localizedRecipe} />
          })}
        </div>
      </div>
    </div>
  )
}

