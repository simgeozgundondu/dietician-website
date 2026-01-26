import { getTranslations } from 'next-intl/server'
import ContactForm from '@/components/contact/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <a
              href="mailto:info@sudenurozgundondu.com"
              className="bg-beige-50 rounded-xl p-6 block hover:bg-beige-100 transition-colors cursor-pointer group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 group-hover:bg-primary-200 rounded-full p-3 transition-colors">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 group-hover:text-primary-600 transition-colors">info@sudenurozgundondu.com</p>
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
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}



