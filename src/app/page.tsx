"use client";

import React from "react";
import { Typography, Button, Card, Row, Col, Carousel } from "antd";
import { ShoppingOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

const { Title, Text } = Typography;
const { Meta } = Card;

const featuredProducts = [
  {
    id: 1,
    title: "Product 1",
    price: "$99.99",
    image: "/images/product1.jpg",
    description: "High-quality product with amazing features",
  },
  {
    id: 2,
    title: "Product 2",
    price: "$149.99",
    image: "/images/product2.jpg",
    description: "Premium product for discerning customers",
  },
  {
    id: 3,
    title: "Product 3",
    price: "$79.99",
    image: "/images/product3.jpg",
    description: "Affordable luxury for everyone",
  },
  {
    id: 4,
    title: "Product 4",
    price: "$199.99",
    image: "/images/product4.jpg",
    description: "Top-tier product with premium features",
  },
];

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "/images/electronics.jpg",
    itemCount: 150,
  },
  {
    id: 2,
    name: "Fashion",
    image: "/images/fashion.jpg",
    itemCount: 320,
  },
  {
    id: 3,
    name: "Home & Living",
    image: "/images/home.jpg",
    itemCount: 250,
  },
  {
    id: 4,
    name: "Sports",
    image: "/images/sports.jpg",
    itemCount: 180,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Carousel autoplay className={styles.carousel}>
          <div className={styles.carouselItem}>
            <div className={styles.carouselContent}>
              <Title level={1}>Welcome to Our Store</Title>
              <Text>Discover amazing products at great prices</Text>
              <Button type="primary" size="large" icon={<ShoppingOutlined />}>
                Shop Now
              </Button>
            </div>
          </div>
          <div className={styles.carouselItem}>
            <div className={styles.carouselContent}>
              <Title level={1}>New Arrivals</Title>
              <Text>Check out our latest collection</Text>
              <Button type="primary" size="large">
                View Collection
              </Button>
            </div>
          </div>
        </Carousel>
      </section>

      {/* Featured Products Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Title level={2}>Featured Products</Title>
          <Link href="/products" className={styles.viewAll}>
            View All <RightOutlined />
          </Link>
        </div>
        <Row gutter={[24, 24]}>
          {featuredProducts.map((product) => (
            <Col xs={24} sm={12} md={6} key={product.id}>
              <Card
                hoverable
                className={styles.productCard}
                cover={
                  <div className={styles.productImageContainer}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                }
              >
                <Meta
                  title={product.title}
                  description={
                    <div>
                      <Text className={styles.price}>{product.price}</Text>
                      <Text className={styles.description}>
                        {product.description}
                      </Text>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Categories Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Title level={2}>Shop by Category</Title>
          <Link href="/categories" className={styles.viewAll}>
            View All <RightOutlined />
          </Link>
        </div>
        <Row gutter={[24, 24]}>
          {categories.map((category) => (
            <Col xs={24} sm={12} md={6} key={category.id}>
              <Link href={`/categories/${category.id}`}>
                <Card
                  hoverable
                  className={styles.categoryCard}
                  cover={
                    <div className={styles.categoryImageContainer}>
                      <Image
                        src={category.image}
                        alt={category.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  }
                >
                  <Meta
                    title={category.name}
                    description={`${category.itemCount} items`}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default HomePage;
