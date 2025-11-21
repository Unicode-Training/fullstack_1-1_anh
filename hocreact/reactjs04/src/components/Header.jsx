import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import LoginModal from "./LoginModal";
import { useEffect, useState } from "react";
import { Spinner } from "./ui/spinner";

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
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const requestProfile = async () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      return;
    }
    setLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/profile`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
  };
  useEffect(() => {
    requestProfile();
  }, []);
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
        {isLoading ? (
          <Spinner />
        ) : user ? (
          <div className="flex gap-2 items-center">
            <p>Hi, {user.name}</p>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <Button
            className="rounded-full cursor-pointer py-[7px] px-5 hover:bg-gray-600"
            size={null}
            onClick={() => setIsOpenModal(!isOpenModal)}
          >
            <img src="/images/user-icon.png" alt="" />
            Login/Signup
          </Button>
        )}
      </div>
      <LoginModal
        open={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
          requestProfile();
        }}
      />
    </div>
  );
}
