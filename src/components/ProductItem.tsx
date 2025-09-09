// components/ProductItem.tsx

import Image from "next/image";

type ProductProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  weight: string;
};

export default function ProductItem({
  image,
  title,
  description,
  price,
  weight,
}: ProductProps) {
  return (
    <div className="flex flex-row-reverse sm:flex-row-reverse items-center justify-between p-4 gap-6 bg-white">
      {/* سمت راست: عکس */}
      <Image
        src={image}
        width={320}
        height={172}
        alt={title}
        className="w-20 h-20 object-cover rounded-md mt-2 sm:mt-0 sm:ml-4"
      />
      {/* سمت چپ: متن */}
      <div className="text-right flex flex-col flex-1">
        <h3 className="text-md font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 ">{description}</p>

        <div className="flex justify-between gap-6 text-nowrap">
          <p className="text-black ">( {weight} گرم )</p>
          <p className="font-semibold text-black ">{price} تومان</p>
        </div>
      </div>
    </div>
  );
}
