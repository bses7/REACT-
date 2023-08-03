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
    <header className="container mx-auto py-7">
      <nav className="flex justify-between ">
        <div className="font-serif">Miralou</div>
        <div className="flex gap-12">
          {links.map((link, index) => (
            <Link to={link.to} key={index}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <HeartIcon className="w-6 h-6" />
          <ShoppingCartIcon className="w-6 h-6 " />
        </div>
      </nav>
    </header>
  );
};

export default navbar;
