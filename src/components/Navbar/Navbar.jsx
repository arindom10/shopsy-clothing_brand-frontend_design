import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Products",
    link: "/products",
  },
];

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Trending Products",
//     link: "/trending-products",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     link: "/best-selling",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/top-rated",
//   },
// ];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Howlatex
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex justify-between items-center gap-4">
            <div>
              <p className="font-bold">ContactUs: 802-359-4125</p>
            </div>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}

          {/* Simple Dropdown and Links */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
