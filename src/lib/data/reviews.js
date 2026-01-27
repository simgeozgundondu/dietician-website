export const reviews = [
  {
    id: 1,
    name: "Fulya Demir",
    rating: 5,
    trText: "Sağlığım için başladığım kilo verme sürecimde birlikte ilerledik. 5 ayda -22 kg ile yeni beni birlikte inşa ettik🤭 Diyetin aslında sağlıklı ve dengeli beslenme olması gerektiğini gösterdi. Güleryüzlü, bilgili ve ilgili biri🌸 İyi ki tanıştım kendisiyle🥰",
    enText: "During my weight loss journey for health, we progressed together. In 5 months, we built the new me together with -22 kg 🤭 It showed me that dieting should be healthy and balanced. Friendly, knowledgeable, and caring 🌸 Glad I met her 🥰"
  },
  {
    id: 2,
    name: "Pınar Durgut",
    rating: 4,
    trText: "Bu zorlu yolculukta neşen güler yüzün ile hep yanıbaşımda olduğun için çok teşekkür ederim canım diyetisyenim ❤️🥰iyiki tanımışım seni",
    enText: "Thank you for always being by my side with your cheerful smile during this tough journey ❤️🥰 I'm glad I met you."
  },
  {
    id: 3,
    name: "Caner Salim",
    rating: 5,
    trText: "Sporcu beslenmesi alanında kas kütlemi artırmak istediğimde bana gerçekten çok güzel ve bana özel bir program hazırladı. Hem sürdürülebilir hem de motive edici bir süreçti. Bilgisi, ilgisi ve takibi için gönül rahatlığıyla tavsiye ederim",
    enText: "When I wanted to increase my muscle mass in athlete nutrition, she prepared a really good and personalized program for me. It was both sustainable and motivating. I highly recommend her for her knowledge, care, and follow-up."
  },
  {
    id: 4,
    name: "Ayse Selin Kocabas",
    rating: 4,
    trText: "Güleryüzü, mesleki bilgisi, çözüm odaklı olmasıyla her alanda müthiş biri🏆 çok kısa sürede sağlıklı beslenme listeleriyle 20 kilo verdim 🥳🧚‍♀️",
    enText: "With her friendly attitude, professional knowledge, and solution-oriented approach, she is amazing in every way 🏆 I lost 20 kg in a very short time with healthy meal plans 🥳🧚‍♀️"
  }
]

// Helper function to get reviews in the selected locale
export function getReviews(locale = 'tr') {
  return reviews.map(review => ({
    ...review,
    text: locale === 'en' ? review.enText : review.trText
  }))
}
