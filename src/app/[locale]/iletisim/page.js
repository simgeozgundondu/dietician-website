import { getTranslations } from 'next-intl/server'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactCTA from '@/components/contact/ContactCTA'

export const metadata = {
  title: 'İletişim - Dyt.Sudenur Özgündöndü',
  description: 'Bize ulaşın, sorularınızı yanıtlayalım',
}

export default async function ContactPage() {
  const t = await getTranslations('contact')

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <a
            href="mailto:sudenurozgndndu48@gmail.com"
            className="bg-beige-50 rounded-xl p-6 block hover:bg-beige-100 transition-colors cursor-pointer group"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 group-hover:bg-primary-200 rounded-full p-3 transition-colors">
                <Mail className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600 group-hover:text-primary-600 transition-colors">sudenurozgndndu48@gmail.com</p>
              </div>
            </div>
          </a>

          <a
            href="tel:+905352599685"
            className="bg-beige-50 rounded-xl p-6 block hover:bg-beige-100 transition-colors cursor-pointer group"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 group-hover:bg-primary-200 rounded-full p-3 transition-colors">
                <Phone className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                <p className="text-gray-600 group-hover:text-primary-600 transition-colors">+90 535 259 96 85</p>
              </div>
            </div>
          </a>

          <div className="bg-beige-50 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 rounded-full p-3">
                <MapPin className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                <p className="text-gray-600">Kurtuluş Mah., Hüseyin Tümer Cd. No:50/1 <br /> Gönen,Balıkesir,Türkiye</p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-beige-50 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 rounded-full p-3">
                <Clock className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">{t('workingHours.title')}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span className='mr-4'>{t('workingHours.weekdays')}</span>
                    <span className="font-medium">{t('workingHours.weekdaysTime')}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className='mr-4'>{t('workingHours.saturday')}</span>
                    <span className="font-medium">{t('workingHours.saturdayTime')}</span>
                  </p>
                  <p className="flex justify-start">
                    <span className='mr-12' >{t('workingHours.sunday')}</span>
                    <span className="font-medium text-gray-400">{t('workingHours.sundayTime')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <ContactCTA />
        </div>
      </div>
    </div>
  )
}



