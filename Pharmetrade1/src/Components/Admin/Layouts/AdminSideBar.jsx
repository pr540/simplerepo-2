import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import sellerIcon from "../../../assets/Dashboard_icon.png";
import chatIcon from "../../../assets/Dashboard_icon.png";
import customerIcon from "../../../assets/Dashboard_icon.png";
import ordersIcon from "../../../assets/Dashboard_icon.png";
import orderListIcon from "../../../assets/Dashboard_icon.png";
import customerListIcon from "../../../assets/Dashboard_icon.png";
import orderDetailsIcon from "../../../assets/Dashboard_icon.png";

const AdminSidebar = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isSellerDropdownOpen, setIsSellerDropdownOpen] = useState(false);
  const [isChatDropdownOpen, setIsChatDropdownOpen] = useState(false);
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  const toggleSellerDropdown = () => {
    setIsSellerDropdownOpen(!isSellerDropdownOpen);
    setIsChatDropdownOpen(false);
    setIsCustomerDropdownOpen(false);
  };

  const toggleChatDropdown = () => {
    setIsChatDropdownOpen(!isChatDropdownOpen);
    setIsSellerDropdownOpen(false);
    setIsCustomerDropdownOpen(false);
  };

  const toggleCustomerDropdown = () => {
    setIsCustomerDropdownOpen(!isCustomerDropdownOpen);
    setIsSellerDropdownOpen(false);
    setIsChatDropdownOpen(false);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    {
      label: "Seller",
      icon: sellerIcon,
      isOpen: isSellerDropdownOpen,
      toggleDropdown: toggleSellerDropdown,
      links: [
        // { to: "/admin/seller/orders", label: "Orders", icon: ordersIcon },
        { to: "/admin/seller/order-list", label: "Seller List", icon: orderListIcon },
        // { to: "/admin/seller/customer-list", label: "Customer List", icon: customerListIcon },
        // { to: "/admin/seller/order-details", label: "Order Details", icon: orderDetailsIcon },
      ],
    },
    {
      label: "Chat",
      icon: chatIcon,
      isOpen: isChatDropdownOpen,
      toggleDropdown: toggleChatDropdown,
      links: [
        { to: "/admin/chat/all-chats", label: "All Chats", icon: chatIcon },
        { to: "/admin/chat/new-chat", label: "New Chat", icon: chatIcon },
      ],
    },
    {
      label: "Customer",
      icon: customerIcon,
      isOpen: isCustomerDropdownOpen,
      toggleDropdown: toggleCustomerDropdown,
      links: [
        { to: "/admin/customer/customer-list", label: "Customer List", icon: customerListIcon },
        { to: "/admin/customer/orders", label: "Customer Orders", icon: ordersIcon },
      ],
    },
  ];

  return (
    <div
      className={`p-2 bg-blue-900 absolute h-[calc(100%-80px)] overflow-scroll z-[100] font-normal flex flex-col shadow-lg ${
        isCollapsed ? "min-w-16 items-center" : "min-w-64"
      }`}
    >
      <div className="flex medium:hidden items-center justify-end p-2">
        <button
          onClick={toggleCollapse}
          className="text-gray-700 hover:text-blue-900"
        >
          {isCollapsed ? (
            <FaBars className="w-6 h-6" />
          ) : (
            <FaTimes className="w-6 h-6" />
          )}
        </button>
      </div>
      <nav className="space-y-2 text-[16px]">
        {navItems.map((item, index) => (
          <div key={index}>
            {item.label && item.links ? (
              <div
                className="flex items-center justify-between p-2 text-white hover:bg-gray-400 cursor-pointer"
                onClick={item.toggleDropdown}
              >
                <div className="flex items-center">
                  <img src={item.icon} className="w-6 h-6" alt={item.label} />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </div>
                {!isCollapsed &&
                  (item.isOpen ? (
                    <FaChevronUp
                      className={`mr-2 ${
                        item.links.length > 0 ? "" : "hidden"
                      }`}
                    />
                  ) : (
                    <FaChevronDown
                      className={`mr-2 ${
                        item.links.length > 0 ? "" : "hidden"
                      }`}
                    />
                  ))}
              </div>
            ) : (
              <Link
                to={item.to}
                onClick={() => handleClick(item.to)}
                className={`flex items-center p-2 ${
                  activeLink === item.to
                    ? "text-white bg-gray-400"
                    : "text-white"
                } hover:text-white hover:bg-gray-400`}
              >
                <img src={item.icon} className="w-6 h-6" alt={item.label} />
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            )}
            {item.isOpen && !isCollapsed && item.links && (
              <ul className="ml-6">
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      onClick={() => handleClick(link.to)}
                      className={`flex items-center p-2 ${
                        activeLink === link.to
                          ? "text-white bg-gray-400"
                          : "text-white"
                      } hover:text-white hover:bg-gray-400`}
                    >
                      <img src={link.icon} className="w-4 h-4" alt={link.label} />
                      <span className="ml-3">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
