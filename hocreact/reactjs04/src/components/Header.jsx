import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import LoginModal from "./LoginModal";
import { useState } from "react";

export default function Header() {
  const menus = [
    {
      href: "#",
      title: "Home",
    },
    {
      href: "#",
      title: "Browse Menu",
      isActive: true,
    },
    {
      href: "#",
      title: "Special Offers",
    },
    {
      href: "#",
      title: "Restaurants",
    },
    {
      href: "#",
      title: "Track Order",
    },
  ];
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="max-w-[1200px] mx-auto flex items-center py-3">
      <div className="max-w-[200px]">
        <Link to="/">
          <img src="/images/logo.png" className="max-w-full" />
        </Link>
      </div>
      <div className="flex ml-auto items-center gap-6">
        <ul className="flex items-center gap-6">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link
                className={cn(
                  "block py-1 px-4 rounded-full hover:bg-(--primary-color) hover:text-white",
                  menu.isActive && "bg-(--primary-color) text-white"
                )}
                to={menu.href}
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          className="rounded-full cursor-pointer py-[7px] px-5 hover:bg-gray-600"
          size={null}
          onClick={() => setIsOpenModal(!isOpenModal)}
        >
          <img src="/images/user-icon.png" alt="" />
          Login/Signup
        </Button>
      </div>
      <LoginModal open={isOpenModal} />
    </div>
  );
}
