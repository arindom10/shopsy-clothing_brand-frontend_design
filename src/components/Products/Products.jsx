import React from "react";
import Img1 from "../../assets/women/Ladies-Blouse-NC0007.jpg";
import Img2 from "../../assets/women/Ladies-Blouse-NC0008.jpg";
import Img3 from "../../assets/women/Ladies-Blouse-NC0012.jpg";
import Img4 from "../../assets/women/Ladies-Dress-NC0021.jpg";
import Img5 from "../../assets/women/Ladies-Dress-NC0022.jpg";
import Img6 from "../../assets/women/Ladies-Dress-NC0023.jpg";
import Img7 from "../../assets/women/Mens-Shirt-NC0001.jpg";
import Img8 from "../../assets/women/Mens-Shirt-NC0002.jpg";
import Img9 from "../../assets/women/Mens-Shirt-NC0003.jpg";
import Img10 from "../../assets/women/Mens-Shirt-NC0004.jpg";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img7,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img5,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 7,
    img: Img6,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 8,
    img: Img8,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 9,
    img: Img9,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 10,
    img: Img10,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Sample Products
          </h1>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div></div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <Link to="/products">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                View All Button
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
