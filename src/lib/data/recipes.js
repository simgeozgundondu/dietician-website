export const recipes = [
  {
    id: 1,
    slug: 'avokado-tostu',
    title: 'Avokado Tostu',
    excerpt: 'Kahvaltı için mükemmel, besleyici ve lezzetli avokado tostu tarifi',
    content: `Avokado tostu, sağlıklı ve doyurucu bir kahvaltı seçeneğidir. Yüksek lif ve sağlıklı yağ içeriği ile gün boyu enerji sağlar.`,
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800',
    calories: 320,
    serving: 1,
    prepTime: 10,
    ingredients: [
      '2 dilim tam tahıl ekmeği',
      '1 olgun avokado',
      '1/2 limon suyu',
      'Tuz ve karabiber',
      'Kırmızı pul biber (isteğe bağlı)',
      '1 yumurta (isteğe bağlı)'
    ],
    instructions: [
      'Avokadoyu ikiye bölün, çekirdeğini çıkarın ve etini bir kaseye alın.',
      'Limon suyu, tuz ve karabiber ekleyerek çatalla ezerek püre haline getirin.',
      'Ekmeği kızartın.',
      'Kızarmış ekmeğin üzerine avokado püresini yayın.',
      'İsteğe bağlı olarak üzerine kızarmış yumurta ekleyebilirsiniz.',
      'Kırmızı pul biber serperek servis edin.'
    ],
    nutrition: {
      protein: '12g',
      carbs: '28g',
      fat: '18g',
      fiber: '12g'
    }
  },
  {
    id: 2,
    slug: 'quinoa-salata',
    title: 'Akdeniz Quinoa Salatası',
    excerpt: 'Protein ve lif açısından zengin, renkli ve lezzetli bir salata',
    content: `Quinoa salatası, hem ana öğün hem de yan yemek olarak tüketilebilen besleyici bir seçenektir.`,
    image: '/images/recipes/quinoa.jpeg',
    calories: 285,
    serving: 2,
    prepTime: 20,
    ingredients: [
      '1 su bardağı quinoa',
      '2 su bardağı su',
      '1 salatalık (küp doğranmış)',
      '1 domates (küp doğranmış)',
      '1/2 kırmızı soğan (ince doğranmış)',
      '1/2 su bardağı zeytin',
      '50g beyaz peynir (küp doğranmış)',
      '2 yemek kaşığı zeytinyağı',
      '1 limon suyu',
      'Taze fesleğen',
      'Tuz ve karabiber'
    ],
    instructions: [
      'Quinoayı yıkayın ve süzün.',
      '2 su bardağı su ile kaynatın, kısık ateşte 15 dakika pişirin.',
      'Pişen quinoayı soğumaya bırakın.',
      'Tüm sebzeleri doğrayın.',
      'Soğuyan quinoaya sebzeleri, zeytinleri ve peyniri ekleyin.',
      'Zeytinyağı, limon suyu, tuz ve karabiber ile sos hazırlayın.',
      'Salatayı sos ile karıştırın.',
      'Üzerine taze fesleğen yaprakları serperek servis edin.'
    ],
    nutrition: {
      protein: '14g',
      carbs: '38g',
      fat: '12g',
      fiber: '6g'
    }
  },
  {
    id: 3,
    slug: 'sebzeli-makarna',
    title: 'Sebzeli Tam Tahıl Makarna',
    excerpt: 'Sağlıklı ve doyurucu bir akşam yemeği seçeneği',
    content: `Sebzeli makarna, hem çocuklar hem de yetişkinler için sevilen bir yemektir. Tam tahıl makarna ile daha besleyici hale getirilmiştir.`,
    image: '/images/recipes/pasta.jpeg',
    calories: 420,
    serving: 2,
    prepTime: 25,
    ingredients: [
      '200g tam tahıl makarna',
      '1 yemek kaşığı zeytinyağı',
      '2 diş sarımsak',
      '1 kırmızı biber',
      '1 kabak',
      '1 patlıcan',
      '1 su bardağı domates sosu',
      'Taze fesleğen',
      'Parmesan peyniri (isteğe bağlı)',
      'Tuz ve karabiber'
    ],
    instructions: [
      'Makarnayı tuzlu suda paket talimatına göre pişirin.',
      'Sebzeleri yıkayın ve küp küp doğrayın.',
      'Zeytinyağını bir tavada ısıtın, sarımsağı ekleyin.',
      'Sebzeleri sırayla ekleyerek soteleyin.',
      'Domates sosunu ekleyin ve 5 dakika pişirin.',
      'Pişen makarnayı süzün ve sebzeli sos ile karıştırın.',
      'Taze fesleğen ve parmesan peyniri ile servis edin.'
    ],
    nutrition: {
      protein: '16g',
      carbs: '68g',
      fat: '10g',
      fiber: '8g'
    }
  },
  {
    id: 4,
    slug: 'smoothie-bowl',
    title: 'Meyveli Smoothie Bowl',
    excerpt: 'Kahvaltı veya ara öğün için mükemmel, antioksidan açısından zengin',
    content: `Smoothie bowl, hem görsel olarak çekici hem de besleyici bir seçenektir.`,
    image: '/images/recipes/smoothie.jpeg',
    calories: 250,
    serving: 1,
    prepTime: 5,
    ingredients: [
      '1 muz',
      '1 su bardağı dondurulmuş çilek',
      '1/2 su bardağı süt veya badem sütü',
      '1 yemek kaşığı chia tohumu',
      '1/2 su bardağı granola',
      'Taze meyveler (çilek, yaban mersini, kivi)',
      'Bal (isteğe bağlı)'
    ],
    instructions: [
      'Muzu, dondurulmuş çilekleri ve sütü blender\'a koyun.',
      'Kıvamlı bir karışım elde edene kadar karıştırın.',
      'Karışımı bir kaseye dökün.',
      'Üzerine chia tohumu, granola ve taze meyveleri ekleyin.',
      'İsteğe bağlı olarak bal ekleyerek servis edin.'
    ],
    nutrition: {
      protein: '8g',
      carbs: '52g',
      fat: '6g',
      fiber: '10g'
    }
  },
  {
    id: 5,
    slug: 'mercimek-kofte',
    title: 'Mercimek Köfte',
    excerpt: 'Vejetaryen ve vegan dostu, protein açısından zengin bir seçenek',
    content: `Mercimek köfte, Türk mutfağının klasik vejetaryen lezzetlerinden biridir.`,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800',
    calories: 180,
    serving: 4,
    prepTime: 30,
    ingredients: [
      '1 su bardağı kırmızı mercimek',
      '1 su bardağı ince bulgur',
      '1 su bardağı sıcak su',
      '1 soğan (ince doğranmış)',
      '2 yemek kaşığı domates salçası',
      '2 yemek kaşığı zeytinyağı',
      '1 demet maydanoz',
      '1 demet taze soğan',
      '1 limon suyu',
      'Tuz, karabiber, kırmızı biber',
      'Marul yaprakları'
    ],
    instructions: [
      'Mercimeği yıkayın ve 2 su bardağı su ile yumuşayana kadar pişirin.',
      'Pişen mercimeği süzün ve sıcakken bulgur ile karıştırın.',
      'Üzerine sıcak su ekleyin ve 15 dakika bekletin.',
      'Soğanı zeytinyağında kavurun, salça ekleyin.',
      'Soğuyan mercimek-bulgur karışımına kavrulmuş soğanı ekleyin.',
      'İnce doğranmış maydanoz, taze soğan, limon suyu ve baharatları ekleyin.',
      'İyice yoğurun ve şekil verin.',
      'Marul yaprakları ile servis edin.'
    ],
    nutrition: {
      protein: '12g',
      carbs: '32g',
      fat: '4g',
      fiber: '8g'
    }
  }
]

export function getRecipeBySlug(slug) {
  return recipes.find(recipe => recipe.slug === slug)
}




