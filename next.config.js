/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
}

const withNextIntl = require('next-intl/plugin')(
  './src/i18n.js'
)

module.exports = withNextIntl(nextConfig)




