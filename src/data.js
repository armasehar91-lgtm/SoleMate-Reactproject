
const products = [
  // ================= MEN =================

  {
    id: 1,
    name: "Urban Runner Sneakers",
    category: "Men",
    subCategory: "Sneakers",
    price: 2500,
    oldPrice: 3200,
    image: "/images/products/men/men1.png",
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    id: 2,
    name: "Classic Street Sneakers",
    category: "Men",
    subCategory: "Sneakers",
    price: 2850,
    oldPrice: 3500,
    image: "/images/products/men/men2.png",
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    id: 3,
    name: "Everyday Comfort Shoes",
    category: "Men",
    subCategory: "Casual Shoes",
    price: 3200,
    oldPrice: 3900,
    image: "/images/products/men/men3.png",
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    id: 4,
    name: "Sport Flex Sneakers",
    category: "Men",
    subCategory: "Sports Shoes",
    price: 3550,
    oldPrice: 4200,
    image: "/images/products/men/men4.png",
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    id: 5,
    name: "Modern Casual Shoes",
    category: "Men",
    subCategory: "Casual Shoes",
    price: 3900,
    oldPrice: 4600,
    image: "/images/products/men/men5.png",
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    id: 6,
    name: "Active Performance Shoes",
    category: "Men",
    subCategory: "Formal Shoes",
    price: 4200,
    oldPrice: 4900,
    image: "/images/products/men/men6.png",
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    id: 7,
    name: "Retro Street Shoes",
    category: "Men",
    subCategory: "Loafers",
    price: 4500,
    oldPrice: 5200,
    image: "/images/products/men/men7.png",
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    id: 8,
    name: "Essential White Sneakers",
    category: "Men",
    subCategory: "Loafers",
    price: 4800,
    oldPrice: 5500,
    image: "/images/products/men/men8.png",
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    id: 9,
    name: "Premium Sport Sneakers",
    category: "Men",
    subCategory: "Sports Shoes",
    price: 5100,
    oldPrice: 5900,
    image: "/images/products/men/men9.png",
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    id: 10,
    name: "Classic Walking Shoes",
    category: "Men",
    subCategory: "Formal Shoes",
    price: 5500,
    oldPrice: 6300,
    image: "/images/products/men/men10.png",
    sizes: ["39", "40", "41", "42", "43", "44"]
  },

  // ================= WOMEN =================

  {
    id: 11,
    name: "Elegant Everyday Heels",
    category: "Women",
    subCategory: "Heels",
    price: 2500,
    oldPrice: 3200,
    image: "/images/products/women/women1.png",
    sizes: ["36", "37", "38", "39", "40", "41"]
  },
  {
    id: 12,
    name: "Classic Fashion Shoes",
    category: "Women",
    subCategory: "Sneakers",
    price: 2850,
    oldPrice: 3500,
    image: "/images/products/women/women2.png",
    sizes: ["36", "37", "38", "39", "40", "41"]
  },
  {
    id: 13,
    name: "Soft Comfort Flats",
    category: "Women",
    subCategory: "Flats",
    price: 3200,
    oldPrice: 3900,
    image: "/images/products/women/women3.png",
    sizes: ["36", "37", "38", "39", "40", "41"]
  },
  {
    id: 14,
    name: "Chic Party Heels",
    category: "Women",
    subCategory: "Heels",
    price: 3550,
    oldPrice: 4200,
    image: "/images/products/women/women4.png",
    sizes: ["36", "37", "38", "39", "40", "41"]
  },
  {
    id: 15,
    name: "Modern Casual Shoes",
    category: "Women",
    subCategory: "Sandals",
    price: 3900,
    oldPrice: 4600,
    image: "/images/products/women/women5.png",
    sizes: ["36", "37", "38", "39", "40", "41"]
  },
  {
    id: 16,
    name: "Classic Women's Sneakers",
    category: "Women",
    subCategory: "Sneakers",
    price: 4200,
    oldPrice: 4900,
    image: "/images/products/women/women6.png",
    sizes: ["36", "37", "38", "39", "40", "41"]
  },
  {
    id: 17,
    name: "Elegant Daily Wear",
    category: "Women",
    subCategory: "Flats",
    price: 4500,
    oldPrice: 5200,
    image: "/images/products/women/women7.png",
    sizes: ["36", "37", "38", "39", "40", "41"]
  },
  {
    id: 18,
    name: "Fashion Street Shoes",
    category: "Women",
    subCategory: "Sandals",
    price: 4800,
    oldPrice: 5500,
    image: "/images/products/women/women8.png",
    sizes: ["36", "37", "38", "39", "40", "41"]
  },
  {
    id: 19,
    name: "Premium Women's Shoes",
    category: "Women",
    subCategory: "Boots",
    price: 5100,
    oldPrice: 5900,
    image: "/images/products/women/women9.png",
    sizes: ["36", "37", "38", "39", "40", "41"]
  },
  {
    id: 20,
    name: "Stylish Comfort Shoes",
    category: "Women",
    subCategory: "Boots",
    price: 5500,
    oldPrice: 6300,
    image: "/images/products/women/women10.png",
    sizes: ["36", "37", "38", "39", "40", "41"]
  },

  // ================= SLIDES =================

  {
    id: 21,
    name: "Cloud Comfort Slides",
    category: "Slides",
    price: 1800,
    oldPrice: 2400,
    image: "/images/products/slides/slides1.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 22,
    name: "Everyday Essential Slides",
    category: "Slides",
    price: 1950,
    oldPrice: 2600,
    image: "/images/products/slides/slides2.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 23,
    name: "Minimal Summer Slides",
    category: "Slides",
    price: 2100,
    oldPrice: 2800,
    image: "/images/products/slides/slides3.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 24,
    name: "Soft Cushion Slides",
    category: "Slides",
    price: 2250,
    oldPrice: 2950,
    image: "/images/products/slides/slides4.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 25,
    name: "Classic Casual Slides",
    category: "Slides",
    price: 2400,
    oldPrice: 3100,
    image: "/images/products/slides/slides5.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 26,
    name: "Urban Comfort Slides",
    category: "Slides",
    price: 2550,
    oldPrice: 3300,
    image: "/images/products/slides/slides6.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 27,
    name: "Easy Walk Slides",
    category: "Slides",
    price: 2700,
    oldPrice: 3500,
    image: "/images/products/slides/slides7.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 28,
    name: "Premium Daily Slides",
    category: "Slides",
    price: 2850,
    oldPrice: 3700,
    image: "/images/products/slides/slides8.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 29,
    name: "Sporty Summer Slides",
    category: "Slides",
    price: 3000,
    oldPrice: 3900,
    image: "/images/products/slides/slides9.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 30,
    name: "Modern Comfort Slides",
    category: "Slides",
    price: 3200,
    oldPrice: 4100,
    image: "/images/products/slides/slides10.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },

  // ================= NEW ARRIVALS =================

  {
    id: 31,
    name: "New Season Sneakers",
    category: "New Arrivals",
    price: 3500,
    oldPrice: 4300,
    image: "/images/products/new-arrivals/new1.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 32,
    name: "Trendsetter Street Shoes",
    category: "New Arrivals",
    price: 3800,
    oldPrice: 4600,
    image: "/images/products/new-arrivals/new2.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 33,
    name: "Fresh Style Sneakers",
    category: "New Arrivals",
    price: 4100,
    oldPrice: 4900,
    image: "/images/products/new-arrivals/new3.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 34,
    name: "Modern Classic Shoes",
    category: "New Arrivals",
    price: 4400,
    oldPrice: 5200,
    image: "/images/products/new-arrivals/new4.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 35,
    name: "Latest Sport Sneakers",
    category: "New Arrivals",
    price: 4700,
    oldPrice: 5500,
    image: "/images/products/new-arrivals/new5.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 36,
    name: "Urban Fashion Sneakers",
    category: "New Arrivals",
    price: 5000,
    oldPrice: 5800,
    image: "/images/products/new-arrivals/new6.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 37,
    name: "New Edition Shoes",
    category: "New Arrivals",
    price: 5300,
    oldPrice: 6100,
    image: "/images/products/new-arrivals/new7.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 38,
    name: "Contemporary Sneakers",
    category: "New Arrivals",
    price: 5600,
    oldPrice: 6400,
    image: "/images/products/new-arrivals/new8.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 39,
    name: "Limited Style Sneakers",
    category: "New Arrivals",
    price: 5900,
    oldPrice: 6700,
    image: "/images/products/new-arrivals/new9.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  },
  {
    id: 40,
    name: "Signature New Sneakers",
    category: "New Arrivals",
    price: 6200,
    oldPrice: 7000,
    image: "/images/products/new-arrivals/new10.png",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
  }
];

export default products;
