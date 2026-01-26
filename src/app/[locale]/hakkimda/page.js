import { getTranslations } from 'next-intl/server'
import { GraduationCap, Globe, Heart, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Hakkımda - Dyt.Sudenur Özgündöndü',
  description: 'Bilimsel temelli ve sürdürülebilir beslenme yaklaşımıyla sağlıklı yaşam yolculuğunuza eşlik ediyorum.',
}

export default async function AboutPage({ params }) {
  const { locale } = await params
  const t = await getTranslations('about')

  return (
    <div className=" min-h-screen bg-gradient-to-br from-beige-50 via-white to-primary-50">


      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Üst Satır: Eğitim ve Uluslararası Deneyim */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Education Section */}
            <div className="bg-beige-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary-100 rounded-full p-3 flex-shrink-0">
                  <GraduationCap className="text-primary-600" size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-meira font-normal text-gray-900">
                  {t('education.title')}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t('education.content')}
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                {t('education.approach')}
              </p>
            </div>

            {/* International Experience */}
            <div className="bg-beige-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary-100 rounded-full p-3 flex-shrink-0">
                  <Globe className="text-primary-600" size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-meira font-normal text-gray-900">
                  {t('international.title')}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('international.content')}
              </p>
            </div>
          </div>

          {/* Alt Satır: Yaklaşımım ve CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Approach Section */}
            <div className="bg-beige-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary-100 rounded-full p-3 flex-shrink-0">
                  <Heart className="text-primary-600" size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-meira font-normal text-gray-900">
                  {t('approach.title')}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('approach.content')}
              </p>
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  <Sparkles size={16} className="mr-2 text-primary-500" />
                  {t('approach.personalized')}
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  <Sparkles size={16} className="mr-2 text-primary-500" />
                  {t('approach.sustainable')}
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  <Sparkles size={16} className="mr-2 text-primary-500" />
                  {t('approach.practical')}
                </span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-beige-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <p className="text-lg text-gray-600 mb-6">
                {t('cta.text')}
              </p>
              <Link
                href={`/${locale}/iletisim`}
                className="inline-flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                <span>{t('cta.button')}</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

