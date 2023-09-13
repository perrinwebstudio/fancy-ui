export const productCategory = [
  {
    id: 1,
    name: 'Laptop',
  },
  {
    id: 2,
    name: 'Camera',
  },
  {
    id: 3,
    name: 'Headphone',
  },
  {
    id: 4,
    name: 'Watch',
  },
  {
    id: 5,
    name: 'Mobile',
  },
];
const productInfo = [
  {
    id: 1,
    title: 'Sweat Proof',
    desc: 'Yes',
  },
  {
    id: 2,
    title: 'Deep Bass',
    desc: 'Yes',
  },
  {
    id: 3,
    title: 'Water Resistant',
    desc: 'Yes',
  },
  {
    id: 4,
    title: 'Designed For',
    desc: 'MOBILE, iPHONE, LAPTOP, ALL ANDRIOD PHONE',
  },
  {
    id: 5,
    title: 'Series',
    desc: 'SH12',
  },
  {
    id: 6,
    title: 'System Requirements',
    desc: 'BLUETOOTH',
  },
  {
    id: 7,
    title: 'Circumaural/ Supraaural',
    desc: 'Circumaural',
  },
  {
    id: 8,
    title: 'Open/Closed Back',
    desc: 'OPEN',
  },
  {
    id: 9,
    title: 'indicators',
    desc: 'Connection Indicator, Power Indicator',
  },
  {
    id: 10,
    title: 'Controls',
    desc: 'PLAY/PAUSE',
  },
  {
    id: 11,
    title: 'Theme',
    desc: 'NA',
  },
  {
    id: 12,
    title: 'Total Harmonic Distortion',
    desc: '0.%',
  },
  {
    id: 13,
    title: 'Number of Pins',
    desc: '1',
  },
  {
    id: 14,
    title: 'With Microphone',
    desc: 'Yes',
  },
];

const productSpec = [
  {
    id: 1,
    title: 'Brand',
    desc: 'JBL',
  },
  {
    id: 2,
    title: 'Model Number',
    desc: 'SH12',
  },
  {
    id: 3,
    title: 'Color',
    desc: 'Red',
  },
  {
    id: 4,
    title: 'Headphone Type',
    desc: 'Wireless over the head',
  },
  {
    id: 5,
    title: 'Inline Remote',
    desc: 'No',
  },
  {
    id: 6,
    title: 'Sales Package',
    desc: '1 SH12 HEADPHONE',
  },
  {
    id: 7,
    title: 'Connectivity',
    desc: 'Bluetooth',
  },
];

export const brandData = [
  {
    id: 1,
    name: 'FastTrack',
  },
  {
    id: 2,
    name: 'Titan',
  },
  {
    id: 3,
    name: 'Casio',
  },
  {
    id: 4,
    name: 'Sonata',
  },
];
export const ProductColors = {
  BLUE: '#0A8FDC',
  GREY: '#8781BD',
  PARROT: '#A3D39C',
  LIGHT_PINK: '#F5989D',
  PINK: '#F69679',
};

export const idealFor = [
  {
    id: 1,
    name: 'Couple',
  },
  {
    id: 2,
    name: 'Men',
  },
  {
    id: 3,
    name: 'Women',
  },
  {
    id: 4,
    name: 'ALL',
  },
];

export const addresses = [
  {
    id: 1,
    name: 'Crema User',
    mobile: '+1 508-966-0591',
    addressLine: '777 Brockton Avenue',
    city: 'Abington MA',
    pin: '2351',
  },
  {
    id: 2,
    name: 'Crema User',
    mobile: '+1 508-966-0592',
    addressLine: '250 Hartford Avenue',
    city: 'Bellingham MA',
    pin: '2322',
  },
  {
    id: 3,
    name: 'Crema User',
    mobile: '+1 508-966-0593',
    addressLine: '700 Oak Street',
    city: 'Brockton MA',
    pin: '2301',
  },
];

export const discountList = [
  {
    id: 1,
    name: '60% or more',
  },
  {
    id: 2,
    name: '50% or more',
  },
  {
    id: 3,
    name: '40% or more',
  },
  {
    id: 4,
    name: '30% or more',
  },
  {
    id: 5,
    name: '20% or more',
  },
  {
    id: 6,
    name: '10% or more',
  },
];

export const cartItems = [
  {
    id: 1,
    product: {
      image: '/assets/images/ecommerce/watch1.png',
      title: "Mens's Exclusive Watch",
      brand: 'FastTrack',
    },
    price: {
      mrp: '120',
      discount: '25',
    },
    total: {
      mrp: '120',
      discount: '25',
      count: 1,
    },
    count: 1,
  },
  {
    id: 2,
    product: {
      image: '/assets/images/ecommerce/watch2.png',
      title: "Limited Edition Men's Watch",
      brand: 'FastTrack',
    },
    price: {
      mrp: '125',
      discount: '20',
    },
    total: {
      mrp: '125',
      discount: '20',
      count: 1,
    },
    count: 1,
  },
  {
    id: 3,
    product: {
      image: '/assets/images/ecommerce/watch3.png',
      title: 'Unisex Special Watch',
      brand: 'FastTrack',
    },
    price: {
      mrp: '100',
      discount: '30',
    },
    total: {
      mrp: '100',
      discount: '30',
      count: 1,
    },
    count: 1,
  },
];

const ecommerceData = [
  {
    id: 1,
    title: "Mens's Exclusive Watch",
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    mrp: 120,
    discount: '25',
    rating: 5,
    ideaFor: 1,
    brand: 1,
    color: ProductColors.BLUE,
    reviews: 2000,
    image: [
      {
        id: 3332,
        src: '/assets/images/ecommerce/watch1.png',
      },
      {
        id: 43554,
        src: '/assets/images/ecommerce/watch1.png',
      },
      {
        id: 434324,
        src: '/assets/images/ecommerce/watch1.png',
      },
      {
        id: 33245,
        src: '/assets/images/ecommerce/watch1.png',
      },
    ],
    createdAt: '19 Dec 2022',
    inStock: true,
    category: 4,
    SKU: 'MB023',
    productInfo,
    productSpec,
  },
  {
    id: 2,
    title: "Limited Edition Men's Watch",
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    mrp: 125,
    brand: 4,
    ideaFor: 3,
    discount: '20',
    rating: 4,
    color: ProductColors.PINK,
    reviews: 4356,
    image: [
      {
        id: 3,
        src: '/assets/images/ecommerce/watch2.png',
      },
      {
        id: 43,
        src: '/assets/images/ecommerce/watch2.png',
      },
      {
        id: 23,
        src: '/assets/images/ecommerce/watch2.png',
      },
      {
        id: 54,
        src: '/assets/images/ecommerce/watch2.png',
      },
    ],
    createdAt: '19 Dec 2022',
    inStock: true,
    category: 4,
    SKU: 'MB023',
    productInfo,
    productSpec,
  },
  {
    id: 3,
    title: 'Unisex Special Watch',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    mrp: 100,
    ideaFor: 4,
    brand: 1,
    discount: '30',
    rating: 4,
    color: ProductColors.BLUE,
    reviews: 235,
    image: [
      {
        id: 4343,
        src: '/assets/images/ecommerce/watch3.png',
      },
      {
        id: 323243,
        src: '/assets/images/ecommerce/watch3.png',
      },
      {
        id: 325432,
        src: '/assets/images/ecommerce/watch3.png',
      },
      {
        id: 653323,
        src: '/assets/images/ecommerce/watch3.png',
      },
    ],
    createdAt: '19 Dec 2022',
    inStock: false,
    category: 4,
    SKU: 'MB023',
    productInfo,
    productSpec,
  },
  {
    id: 4,
    title: "Special Female's Watch",
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    mrp: 100,
    discount: '35',
    rating: 4,
    ideaFor: 2,
    brand: 4,
    color: ProductColors.PINK,
    reviews: 4323,
    image: [
      {
        id: 4343443,
        src: '/assets/images/ecommerce/watch4.png',
      },
      {
        id: 324324,
        src: '/assets/images/ecommerce/watch4.png',
      },
      {
        id: 655434,
        src: '/assets/images/ecommerce/watch4.png',
      },
      {
        id: 243443,
        src: '/assets/images/ecommerce/watch4.png',
      },
    ],
    createdAt: '19 Dec 2022',
    inStock: true,
    category: 4,
    SKU: 'MB023',
    productInfo,
    productSpec,
  },
  {
    id: 5,
    title: "Mens's Exclusive Watch",
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    mrp: 120,
    ideaFor: 1,
    brand: 1,
    discount: '25',
    rating: 3,
    color: ProductColors.GREY,
    reviews: 2000,
    image: [
      {
        id: 43434345,
        src: '/assets/images/ecommerce/watch1.png',
      },
      {
        id: 44343,
        src: '/assets/images/ecommerce/watch1.png',
      },
      {
        id: 5654443,
        src: '/assets/images/ecommerce/watch1.png',
      },
      {
        id: 433343,
        src: '/assets/images/ecommerce/watch1.png',
      },
    ],
    createdAt: '19 Dec 2022',
    inStock: true,
    category: 4,
    SKU: 'MB023',
    productInfo,
    productSpec,
  },
  {
    id: 6,
    title: "Limited Edition Men's Watch",
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    mrp: 125,
    discount: '20',
    ideaFor: 3,
    brand: 3,
    rating: 3,
    color: ProductColors.LIGHT_PINK,
    reviews: 4356,
    image: [
      {
        id: 4354,
        src: '/assets/images/ecommerce/watch2.png',
      },
      {
        id: 2343,
        src: '/assets/images/ecommerce/watch2.png',
      },
      {
        id: 233,
        src: '/assets/images/ecommerce/watch2.png',
      },
      {
        id: 544,
        src: '/assets/images/ecommerce/watch2.png',
      },
    ],
    createdAt: '19 Dec 2022',
    inStock: false,
    category: 4,
    SKU: 'MB023',
    productInfo,
    productSpec,
  },
  {
    id: 7,
    title: 'Unisex Special Watch',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    mrp: 100,
    ideaFor: 4,
    brand: 2,
    discount: '30',
    rating: 4,
    color: ProductColors.PINK,
    reviews: 235,
    image: [
      {
        id: 4344343,
        src: '/assets/images/ecommerce/watch3.png',
      },
      {
        id: 32443243,
        src: '/assets/images/ecommerce/watch3.png',
      },
      {
        id: 32544432,
        src: '/assets/images/ecommerce/watch3.png',
      },
      {
        id: 654333323,
        src: '/assets/images/ecommerce/watch3.png',
      },
    ],
    createdAt: '19 Dec 2022',
    inStock: true,
    category: 4,
    SKU: 'MB023',
    productInfo,
    productSpec,
  },
  {
    id: 8,
    title: "Special Female's Watch",
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    mrp: 100,
    discount: '35',
    ideaFor: 2,
    brand: 1,
    rating: 2,
    color: ProductColors.PARROT,
    reviews: 4323,
    image: [
      {
        id: 344,
        src: '/assets/images/ecommerce/watch4.png',
      },
      {
        id: 4342,
        src: '/assets/images/ecommerce/watch4.png',
      },
      {
        id: 7654,
        src: '/assets/images/ecommerce/watch4.png',
      },
      {
        id: 3232,
        src: '/assets/images/ecommerce/watch4.png',
      },
    ],
    createdAt: '19 Dec 2022',
    inStock: false,
    category: 4,
    SKU: 'MB023',
    productInfo,
    productSpec,
  },
  {
    id: 9,
    title: "Mens's Exclusive Watch",
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    mrp: 120,
    discount: '25',
    brand: 2,
    ideaFor: 1,
    rating: 5,
    color: ProductColors.PINK,
    reviews: 2000,
    image: [
      {
        id: 34332,
        src: '/assets/images/ecommerce/watch1.png',
      },
      {
        id: 432121554,
        src: '/assets/images/ecommerce/watch1.png',
      },
      {
        id: 42334324,
        src: '/assets/images/ecommerce/watch1.png',
      },
      {
        id: 333245,
        src: '/assets/images/ecommerce/watch1.png',
      },
    ],
    createdAt: '19 Dec 2022',
    inStock: true,
    category: 4,
    SKU: 'MB023',
    productInfo,
    productSpec,
  },
  {
    id: 10,
    title: "Limited Edition Men's Watch",
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    mrp: 125,
    discount: '20',
    ideaFor: 2,
    brand: 3,
    rating: 4,
    color: ProductColors.LIGHT_PINK,
    reviews: 4356,
    image: [
      {
        id: 32222,
        src: '/assets/images/ecommerce/watch2.png',
      },
      {
        id: 3333,
        src: '/assets/images/ecommerce/watch2.png',
      },
      {
        id: 4444,
        src: '/assets/images/ecommerce/watch2.png',
      },
      {
        id: 5555,
        src: '/assets/images/ecommerce/watch2.png',
      },
    ],
    createdAt: '19 Dec 2022',
    inStock: false,
    category: 4,
    SKU: 'MB023',
    productInfo,
    productSpec,
  },
  {
    id: 11,
    title: 'Unisex Special Watch',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    mrp: 100,
    discount: '30',
    rating: 3,
    ideaFor: 3,
    brand: 2,
    color: ProductColors.PARROT,
    reviews: 235,
    image: [
      {
        id: 43333332343,
        src: '/assets/images/ecommerce/watch3.png',
      },
      {
        id: 323232,
        src: '/assets/images/ecommerce/watch3.png',
      },
      {
        id: 54554,
        src: '/assets/images/ecommerce/watch3.png',
      },
      {
        id: 4343232,
        src: '/assets/images/ecommerce/watch3.png',
      },
    ],
    createdAt: '19 Dec 2022',
    inStock: true,
    category: 4,
    SKU: 'MB023',
    productInfo,
    productSpec,
  },
  {
    id: 12,
    title: "Special Female's Watch",
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    mrp: 100,
    discount: '35',
    rating: 4,
    ideaFor: 2,
    color: ProductColors.GREY,
    reviews: 4323,
    brand: 3,
    image: [
      {
        id: 43343443,
        src: '/assets/images/ecommerce/watch4.png',
      },
      {
        id: 333224324,
        src: '/assets/images/ecommerce/watch4.png',
      },
      {
        id: 5545454,
        src: '/assets/images/ecommerce/watch4.png',
      },
      {
        id: 42332323,
        src: '/assets/images/ecommerce/watch4.png',
      },
    ],
    createdAt: '19 Dec 2022',
    inStock: false,
    category: 4,
    SKU: 'MB023',
    productInfo,
    productSpec,
  },
];
export const recentOrders = [
  {
    id: '#SK231',
    customer: 'Ina Hughes',
    product: "Limited Edition Men's Watch",
    date: '08-21-2020',
    paymentType: 'COD',
    price: '$125',
    status: 'Cancelled',
  },
  {
    id: '#SK232',
    customer: 'Myrtie Ferguson',
    date: '08-12-2020',
    product: 'Addida Shoes',
    paymentType: 'Prepaid',
    price: '$100',
    status: 'Delivered',
  },
  {
    id: '#SK233',
    customer: 'Johnny Herrera',
    date: '07-30-2020',
    product: 'Sleeve Jacket',
    price: '$1,020',
    paymentType: 'Prepaid',
    status: 'Pending',
  },
  {
    id: '#SK234',
    customer: 'Ina Hughes',
    product: "Mens's Exclusive Watch",
    date: '08-21-2020',
    paymentType: 'COD',
    price: '$125',
    status: 'Cancelled',
  },
  {
    id: '#SK235',
    customer: 'Myrtie Ferguson',
    date: '08-12-2020',
    product: 'Addida Shoes',
    paymentType: 'Prepaid',
    price: '$100',
    status: 'Delivered',
  },
  {
    id: '#SK236',
    customer: 'Johnny Herrera',
    date: '07-30-2020',
    product: 'Sleeve Jacket',
    price: '$1,020',
    paymentType: 'Prepaid',
    status: 'Pending',
  },
  {
    id: '#SK2317',
    customer: 'Ina Hughes',
    product: 'Bicycle',
    date: '08-21-2020',
    paymentType: 'COD',
    price: '$125',
    status: 'Cancelled',
  },
  {
    id: '#SK2328',
    customer: 'Myrtie Ferguson',
    date: '08-12-2020',
    product: 'Addida Shoes',
    paymentType: 'Prepaid',
    price: '$100',
    status: 'Delivered',
  },
  {
    id: '#SK2393',
    customer: 'Johnny Herrera',
    date: '07-30-2020',
    product: 'Sleeve Jacket',
    price: '$1,020',
    paymentType: 'Prepaid',
    status: 'Pending',
  },
  {
    id: '#SK2319',
    customer: 'Ina Hughes',
    product: 'Bicycle',
    date: '08-21-2020',
    paymentType: 'COD',
    price: '$125',
    status: 'Cancelled',
  },
  {
    id: '#SK2323',
    customer: "Mens's Exclusive Watch",
    date: '08-12-2020',
    product: 'Addida Shoes',
    paymentType: 'Prepaid',
    price: '$100',
    status: 'Delivered',
  },
  {
    id: '#SK2333',
    customer: 'Johnny Herrera',
    date: '07-30-2020',
    product: 'Sleeve Jacket',
    price: '$1,020',
    paymentType: 'Prepaid',
    status: 'Pending',
  },
  {
    id: '#SK2331',
    customer: 'Ina Hughes',
    product: 'Bicycle',
    date: '08-21-2020',
    paymentType: 'COD',
    price: '$125',
    status: 'Cancelled',
  },
  {
    id: '#SK2232',
    customer: 'Myrtie Ferguson',
    date: '08-12-2020',
    product: 'Addida Shoes',
    paymentType: 'Prepaid',
    price: '$100',
    status: 'Delivered',
  },
  {
    id: '#SK2343',
    customer: 'Johnny Herrera',
    date: '07-30-2020',
    product: 'Sleeve Jacket',
    price: '$1,020',
    paymentType: 'Prepaid',
    status: 'Pending',
  },
  {
    id: '#SK2318',
    customer: 'Ina Hughes',
    product: 'Bicycle',
    date: '08-21-2020',
    paymentType: 'COD',
    price: '$125',
    status: 'Cancelled',
  },
  {
    id: '#SK2329',
    customer: 'Myrtie Ferguson',
    date: '08-12-2020',
    product: 'Addida Shoes',
    paymentType: 'Prepaid',
    price: '$100',
    status: 'Delivered',
  },
  {
    id: '#SK2379',
    customer: 'Johnny Herrera',
    date: '07-30-2020',
    product: 'Sleeve Jacket',
    price: '$1,020',
    paymentType: 'Prepaid',
    status: 'Pending',
  },
];

export const customersData = [
  {
    id: 1,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 2,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 3,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 4,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 5,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 6,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 7,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 8,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 9,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 10,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 11,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 12,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 13,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 14,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 15,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 16,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 17,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 18,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 19,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 20,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 21,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 22,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
  {
    id: 23,
    name: 'Josh Rash',
    email: 'josh@exmaple.com',
    lastItem: 'Apple Watch',
    lastOrder: '26 Aug',
    rating: '4.6',
    balance: '$125',
    address: '675 Grove Street Bethpage, NY 11714',
    joinDate: '23 Jan, 2015',
  },
];
export default ecommerceData;
