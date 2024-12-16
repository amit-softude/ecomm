"use client";

import React from "react";
import { Layout, Menu, Button, Space } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/shop?category=${category.toLowerCase().replace(" ", "-")}`);
  };

  const menuItems = [
    {
      key: "home",
      label: (
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
      ),
    },
    {
      key: "shop",
      label: "Shop All",
      children: [
        {
          key: "hair-care",
          label: "Hair Care",
          onClick: () => handleCategoryClick("Hair Care"),
        },
        {
          key: "skin-care",
          label: "Skin Care",
          onClick: () => handleCategoryClick("Skin Care"),
        },
        {
          key: "kits-combo",
          label: "Kits and Combo",
          onClick: () => handleCategoryClick("Kits and Combo"),
        },
      ],
    },
    {
      key: "about",
      label: (
        <Link href="/about" legacyBehavior>
          <a>About Us</a>
        </Link>
      ),
    },
    {
      key: "contact",
      label: (
        <Link href="/contact" legacyBehavior>
          <a>Contact</a>
        </Link>
      ),
    },
  ];

  return (
    <AntHeader className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" legacyBehavior>
          <a>E-Commerce</a>
        </Link>
      </div>
      <Menu mode="horizontal" items={menuItems} className={styles.menu} />
      <Space className={styles.actions}>
        <Button icon={<ShoppingCartOutlined />} type="text" />
        <Link href="/login" passHref legacyBehavior>
          <Button icon={<UserOutlined />} type="primary">
            Login
          </Button>
        </Link>
      </Space>
    </AntHeader>
  );
};

export default Header;
