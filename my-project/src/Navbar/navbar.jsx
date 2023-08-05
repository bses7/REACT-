import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navbar = () => {
  const links = [
    {
      label: "Home",
      to: "/home",
    },
    {
      label: "Shop",
      to: "/shop",
    },
    {
      label: "Product",
      to: "/product",
    },
    {
      label: "Blog",
      to: "/blog",
    },
    {
      label: "About",
      to: "/about",
    },
  ];
  return (
    <header className="container mx-auto py-7 px-4">
      <nav className="flex justify-between ">
        <div className="font-serif">Miralou</div>
        <div className="gap-12 hidden lg:flex">
          {links.map((link, index) => (
            <Link to={link.to} key={index}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="gap-4 hidden lg:flex">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <HeartIcon className="w-6 h-6" />
          <ShoppingCartIcon className="w-6 h-6 " />
        </div>
      </nav>
    </header>
  );
};

export default navbar;
