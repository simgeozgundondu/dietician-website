import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Mail, Phone, MapPin ,Instagram} from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')
  const tCommon = useTranslations('common')
  const tContact = useTranslations('contact')
  const locale = useLocale()

  return (
    <footer className="bg-beige-50 border-t border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About */}
          <div>
            <h3 className="font-meira text-lg text-gray-900 mb-4">
              {tCommon('dietician')} Sudenur Özgündöndü
            </h3>
            <div className="text-gray-600 text-sm space-y-1">
              <p className="font-medium mb-2">{tContact('workingHours.title')}</p>
              <p>{tContact('workingHours.weekdays')}: {tContact('workingHours.weekdaysTime')}</p>
              <p>{tContact('workingHours.saturday')}: {tContact('workingHours.saturdayTime')}</p>
              <p className="text-gray-500">{tContact('workingHours.sunday')}: {tContact('workingHours.sundayTime')}</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-meira text-lg font text-gray-900 mb-4">
              {tCommon('home')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  {tCommon('home')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  {tCommon('blog')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/tarifler`}
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  {tCommon('recipes')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/iletisim`}
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  {tCommon('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-meira text-lg font text-gray-900 mb-4 ">
              {tCommon('contact')}
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center space-x-2 justify-center md:justify-start">
                <Mail size={16} />
                <span>sudenurozgndndu48@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2 justify-center md:justify-start">
                <Phone size={16} />
                <a href="tel:+905352599685" className='underline hover:text-primary-600'>+90 535 259 96 85</a>
              </p>
              <p className="flex items-center space-x-2 justify-center md:justify-start">
              <MapPin size={16} />
              <a
                href="https://www.google.com/maps?q=Kurtuluş+Mah,+Hüseyin+Tümer+Cd+No:50/1,+Gönen+Balıkesir+Türkiye"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-600 hover:text-primary-600 transition-colors"
              >
                Kurtuluş Mah., Hüseyin Tümer Cd. No:50/1 <br /> Gönen, Balıkesir, Türkiye
              </a>
            </p>
            <p className="flex items-center space-x-2 justify-center md:justify-start">
                <Instagram size={16} />
                <a href="https://www.instagram.com/dytsudenurozgundondu.gonen/" className='underline hover:text-primary-600'>@dytsudenurozgundondu.gonen</a>
              </p>

            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-beige-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Sudenur Özgündöndü. {t('rights')}</p>
        </div>
      </div>
    </footer>
  )
}




