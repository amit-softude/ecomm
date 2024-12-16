"use client";

import React from "react";
import { Layout } from "antd";
import { MainLayoutProps } from "./types";
import dynamic from "next/dynamic";
import styles from "./MainLayout.module.scss";

const { Content } = Layout;
const Header = dynamic(() => import("../Header"), {
  ssr: true,
  loading: () => <div style={{ height: "64px" }} />,
});
const Footer = dynamic(() => import("../Footer"), {
  ssr: true,
  loading: () => <div style={{ height: "200px" }} />,
});

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content className={styles.content}>
        <div className={styles.contentWrapper}>{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
