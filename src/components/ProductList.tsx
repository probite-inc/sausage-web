// components/ProductList.tsx

import ProductItem from "@/components/ProductItem";

const products = [
  {
    title: "سوسیس آلمانی",
    description: "تهیه شده از شنیسل مرغ، سیر، فلفل دلمه، ادویه مخصوص",
    weight: "500",
    price: "215،000",
    image: "/image/almani.png",
  },
  {
    title: "سوسیس کوکتل",
    description: "تهیه شده از شنیسل مرغ، ادویه مخصوص",
    weight: "500",
    price: "220،000",
    image: "/image/koktel.png",
  },
  {
    title: "سوسیس فرانکفورتر",
    description: "تهیه شده از گوشت سردست گوساله تازه،ادویه مخصوص",
    weight: "500",
    price: "348,000",
    image: "/image/ferankforter.png",
  },
  {
    title: "هات داگ",
    description: "تهیه شده از شنیسل مرغ تازه، ادویه مخصوص",
    weight: "500",
    price: "205,000",
    image: "/image/hotdog.png",
  },
  {
    title: "کراکف",
    description: "تهیه شده از گوشت سردست گوساله، ادویه مخصوص، پنیر",
    weight: "500",
    price: "345,000",
    image: "/image/kerakof.png",
  },
  {
    title: "کوکتل پنیری",
    description: "تهیه شده از شنیسل مرغ، ادویه مخصوص، پنیر",
    weight: "500",
    price: "240,000",
    image: "/image/koktelpaniri.png",
  },
  {
    title: "بلغاری",
    description: "تهیه شده از گوشت سردست گوساله، ادویه مخصوص",
    weight: "500",
    price: "362,000",
    image: "/image/bolghari.png",
  },
  {
    title: "سوسیس وارنا پنیری",
    description: "تهیه شده از گوشت ران گوساله، شنیسل مرغ، ادویه مخصوص، پنیر،",
    weight: "500",
    price: "315,000",
    image: "/image/varna.png",
  },
  {
    title: "هات داگ پنیری",
    description: "تهیه شده از شنیسل مرغ، ادویه مخصوص، پنیر",
    weight: "500",
    price: "225,000",
    image: "/image/hotdogpaniri.png",
  },
  {
    title: "زامبون مرغ",
    description: "تهیه شده ازمرغ تازه، ادویه مخصوص ",
    weight: "500",
    price: "275,000",
    image: "/image/jmorgh.png",
  },
  {
    title: "کالباس مارتادلا",
    description: "تهیه شده ازمرغ تازه، فلفل دلمه، ادویه مخصوص",
    weight: "500",
    price: "215,000",
    image: "/image/martadela.png",
  },
  {
    title: "لبرکزه اتریشی ژامبون ",
    description:
      "تهیه شده از سردست گوساله و شنیسل مرغ، فلفل دلمه، قارچ، پنیر پیتزا یا گودا",
    weight: "500",
    price: "368,000",
    image: "/image/leberkeze.png",
  },
  {
    title: "ژامبون مرغ و قارچ",
    description: "با لقمه های نمایشی مرغ، هویچ فلفل دلمه و قارچ",
    weight: "500",
    price: "295,000",
    image: "/image/morghogharch.png",
  },
  {
    title: "زامبون گوشت",
    description: "تهیه شده از گوشت گرم و تازه",
    weight: "500",
    price: "500,000",
    image: "/image/jghosht.png",
  },
  {
    title: "کالباس گوداشی",
    description: "تهیه شده از شنیسل مرغ و با لقمه های نمایشی مرغ و پنیر و شوید",
    weight: "500",
    price: "247,000",
    image: "/image/gudashi.png",
  },
  {
    title: "کالباس خشک",
    description: "تهیه شده از گوشت گرم و تازه",
    weight: "500",
    price: "345,000",
    image: "/image/kalbas khoshk.png",
  },
  {
    title: "پپرونی",
    description: "تهیه شده از گوشت سردست گوساله و دانه های فلفل (کمی تند)",
    weight: "500",
    price: "458,000",
    image: "/image/peperoni.png",
  },
  {
    title: "ناگت",
    description: "تهیه شده از شنیسل مرغ، ادویه مخصوص",
    weight: "500",
    price: "200,000",
    image: "/image/naget.png",
  },
  {
    title: "ناگت پنیری",
    description: "تهیه شده از شنیسل مرغ، ادویه مخصوص و پنیر پیتزا",
    weight: "500",
    price: "220,000",
    image: "/image/nagetpaniri.png",
  },
  {
    title: "همبرگر",
    description: "تهیه شده از گوشت ران گوساله و سردست گوساله ",
    weight: "۴۰۰",
    price: "۲۱۵,۰۰۰",
    image: "/image/burger.png",
  },
  {
    title: "کباب لقمه گوشت",
    description: "تهیه شده از گوشت ران گوساله تازه",
    weight: "۴۰۰",
    price: "۲۱۵,۰۰۰",
    image: "/image/kababloghme.png",
  },
  {
    title: "شنیسل سوخاری",
    description: "تهیه شده از شنیسل مرغ تازه",
    weight: "۴۰۰",
    price: "۲۱۵,۰۰۰",
    image: "/image/shenisel.png",
  },
];

export default function ProductList() {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl">
      <h2
        id="products"
        className="text-2xl font-bold text-center mb-6 text-gray-600 pt-4"
      >
        محصولات
      </h2>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:justify-evenly ">
        {products.map((item, index) => (
          <div
            className=" w-full sm:flex-1/3 lg:flex-1/4 max-w-80 flex-shrink-0"
            key={index}
          >
            <ProductItem
              title={item.title}
              description={item.description}
              weight={item.weight}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
