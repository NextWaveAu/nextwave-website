// NextWave.au - IoT Products Page Component
// This is a Next.js component for the IoT Products page

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Custom components
import ProductFilter from '../components/ProductFilter';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';
import IntegrationDiagram from '../components/IntegrationDiagram';
import ProductConfigurator from '../components/ProductConfigurator';

const IoTProductsPage = ({ productCategories, products }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <>
      <Head>
        <title>IoT Products | NextWave - Smart Devices for Connected Businesses</title>
        <meta name="description" content="Explore NextWave's range of IoT products including sensors, smart infrastructure, industrial automation, and environmental monitoring solutions." />
        <meta name="keywords" content="IoT products, smart devices, sensors, industrial automation, environmental monitoring, Australia" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-secondary-900 to-primary-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/iot-background-pattern.svg" 
            alt="IoT Pattern Background" 
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Smart Devices for Connected Businesses
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform your physical operations with NextWave's IoT ecosystem. Our smart devices collect real-time data, automate processes, and integrate seamlessly with your existing systems.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="#products" className="btn-primary">
                Explore Products
              </Link>
              <Link href="#integration" className="btn-secondary">
                View Integration Options
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="py-16" id="products">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our IoT Product Range</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            From data collection sensors to complete smart infrastructure solutions, our IoT products are designed for reliability, security, and seamless integration.
          </p>
          
          {/* Product Categories Filter */}
          <ProductFilter 
            categories={productCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                No products found in this category. Please try another category or contact us for custom solutions.
              </p>
              <button 
                onClick={() => setActiveCategory('all')}
                className="mt-4 btn-secondary"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Integration Visualization Section */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-800" id="integration">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Seamless Integration Ecosystem</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Our IoT products work together to create a comprehensive data collection and automation network that integrates with your existing systems.
          </p>
          
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 md:p-8">
            <IntegrationDiagram />
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                API & Connectivity
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  RESTful API for data access and device control
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  MQTT protocol for efficient IoT communication
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Webhook support for event-driven integration
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Secure WebSocket connections for real-time data
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  SDK available for custom integration development
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                System Compatibility
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  ERP systems (SAP, Oracle, Microsoft Dynamics)
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  SCADA and industrial control systems
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Building management systems
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Cloud platforms (AWS IoT, Azure IoT, Google Cloud IoT)
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Custom and legacy systems via adaptable connectors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Configurator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Configure Your IoT Solution</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Use our interactive configurator to build a custom IoT solution tailored to your specific business needs.
          </p>
          
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 md:p-8">
            <ProductConfigurator products={products} />
          </div>
        </div>
      </section>

      {/* Deployment & Support Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Deployment & Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Installation Services</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Professional installation by our certified technicians ensures your IoT devices are properly set up and configured for optimal performance.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Training & Onboarding</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Comprehensive training for your team on device operation, data interpretation, and system management to maximize your IoT investment.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                24/7 technical support, regular maintenance, firmware updates, and performance optimization to ensure your IoT ecosystem runs smoothly.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              Request Support Information
            </Link>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export async function getStaticProps() {
  // In a real implementation, this would fetch data from a CMS or API
  const productCategories = [
    { id: 'all', name: 'All Products' },
    { id: 'sensors', name: 'Sensors & Data Collection' },
    { id: 'infrastructure', name: 'Smart Infrastructure' },
    { id: 'industrial', name: 'Industrial Automation' },
    { id: 'environmental', name: 'Environmental Monitoring' },
    { id: 'custom', name: 'Custom Solutions' }
  ];

  const products = [
    {
      id: 1,
      name: "NW-S1000 Smart Sensor Hub",
      category: "sensors",
      description: "Central hub for connecting and managing multiple sensors with edge computing capabilities.",
      features: [
        "Connects up to 50 sensors simultaneously",
        "Edge processing for real-time analytics",
        "Multiple connectivity options (Wi-Fi, Ethernet, 4G/5G)",
        "Secure data encryption and transmission",
        "Remote management and configuration"
      ],
      specifications: {
        dimensions: "120mm x 120mm x 30mm",
        power: "12V DC, Power over Ethernet (PoE) compatible",
        connectivity: "Wi-Fi, Ethernet, 4G/5G, Bluetooth 5.2",
        storage: "32GB onboard storage for data buffering",
        processor: "Quad-core ARM Cortex-A72, 1.5GHz",
        operatingTemp: "-20°C to 60°C"
      },
      applications: [
        "Manufacturing facilities",
        "Warehouses and logistics centers",
        "Commercial buildings",
        "Agricultural operations",
        "Smart city infrastructure"
      ],
      image: "/images/products/sensor-hub.jpg",
      price: "From $899",
      inStock: true
    },
    {
      id: 2,
      name: "NW-T100 Temperature & Humidity Sensor",
      category: "sensors",
      description: "High-precision temperature and humidity sensor with long battery life and wireless connectivity.",
      features: [
        "±0.3°C temperature accuracy",
        "±2% humidity accuracy",
        "5-year battery life with standard usage",
        "Wireless range up to 100m",
        "IP67 rated for dust and water resistance"
      ],
      specifications: {
        dimensions: "60mm x 40mm x 20mm",
        power: "3.6V Lithium battery (included)",
        connectivity: "LoRaWAN, Bluetooth 5.1",
        sensorRange: "-40°C to 85°C, 0-100% RH",
        sampleRate: "Configurable from 1 minute to 24 hours",
        operatingTemp: "-40°C to 85°C"
      },
      applications: [
        "Cold chain monitoring",
        "HVAC optimization",
        "Greenhouse management",
        "Server room monitoring",
        "Pharmaceutical storage"
      ],
      image: "/images/products/temp-humidity-sensor.jpg",
      price: "$129",
      inStock: true
    },
    {
      id: 3,
      name: "NW-M200 Machine Condition Monitor",
      category: "industrial",
      description: "Advanced vibration and acoustic sensor for predictive maintenance of industrial equipment.",
      features: [
        "3-axis vibration monitoring",
        "Acoustic anomaly detection",
        "Real-time FFT analysis",
        "Early failure detection algorithms",
        "Integration with CMMS systems"
      ],
      specifications: {
        dimensions: "80mm x 60mm x 25mm",
        power: "24V DC or rechargeable battery (8-hour runtime)",
        connectivity: "Wi-Fi, Bluetooth 5.2, optional wired connection",
        sensorRange: "Vibration: ±50g, Acoustic: 30Hz-15kHz",
        sampleRate: "Up to 25,600 samples per second",
        operatingTemp: "-10°C to 70°C"
      },
      applications: [
        "Rotating equipment monitoring",
        "Production line quality control",
        "Motor and pump health tracking",
        "Bearing condition assessment",
        "Preventive maintenance programs"
      ],
      image: "/images/products/machine-monitor.jpg",
      price: "$549",
      inStock: true
    },
    {
      id: 4,
      name: "NW-E300 Energy Monitoring System",
      category: "infrastructure",
      description: "Comprehensive energy monitoring system for tracking and optimizing power consumption.",
      features: [
        "Real-time power consumption monitoring",
        "Circuit-level energy tracking",
        "Power quality analysis",
        "Anomaly detection and alerts",
        "Energy efficiency recommendations"
      ],
      specifications: {
        dimensions: "DIN rail mounted, 6 modules wide",
        power: "100-240V AC",
        connectivity: "Ethernet, Wi-Fi, optional 4G",
        measurement: "Voltage, current, power factor, harmonics",
        accuracy: "±0.5% for voltage and current",
        operatingTemp: "-10°C to 55°C"
      },
      applications: [
        "Commercial building energy management",
        "Industrial power monitoring",
        "Data center power optimization",
        "Renewable energy integration",
        "Demand response programs"
      ],
      image: "/images/products/energy-monitor.jpg",
      price: "$799",
      inStock: true
    },
    {
      id: 5,
      name: "NW-A400 Air Quality Monitor",
      category: "environmental",
      description: "Comprehensive air quality monitoring system for indoor and outdoor environments.",
      features: [
        "Measures PM2.5, PM10, CO2, VOCs, temperature, and humidity",
        "Real-time air quality index calculation",
        "Historical data tracking and analysis",
        "Customizable alerts and notifications",
        "Integration with HVAC systems"
      ],
      specifications: {
        dimensions: "150mm x 80mm x 80mm",
        power: "5V DC USB-C or rechargeable battery (24-hour runtime)",
        connectivity: "Wi-Fi, Bluetooth 5.1",
        sensorAccuracy: "PM: ±10%, CO2: ±50ppm, VOC: ±15%",
        sampleRate: "Every 1 minute (configurable)",
        operatingTemp: "0°C to 50°C"
      },
      applications: [
        "Office air quality monitoring",
        "School and healthcare facilities",
        "Manufacturing environments",
        "Smart home integration",
        "Environmental compliance"
      ],
      image: "/images/products/air-quality-monitor.jpg",
      price: "$349",
      inStock: true
    },
    {
      id: 6,
      name: "NW-W500 Water Management System",
      category: "environmental",
      description: "Intelligent water monitoring and management system for consumption tracking and leak detection.",
      features: [
        "Real-time water flow monitoring",
        "Pressure and temperature sensing",
        "Automatic leak detection and alerts",
        "Water quality monitoring (optional)",
        "Remote shut-off capability"
      ],
      specifications: {
        dimensions: "Flow sensor: varies by pipe size, Control unit: 160mm x 120mm x 40mm",
        power: "24V DC or 100-240V AC with adapter",
        connectivity: "Wi-Fi, LoRaWAN, optional cellular",
        flowAccuracy: "±1.5% of reading",
        pressureRange: "0-10 bar",
        operatingTemp: "0°C to 50°C"
      },
      applications: [
        "Commercial building water management",
        "Irrigation systems",
        "Industrial water monitoring",
        "Utility submetering",
        "Smart city water infrastructure"
      ],
      image: "/images/products/water-management.jpg",
      price: "$649",
      inStock: true
    }
  ];

  return {
    props: {
      productCategories,
      products
    },
    // Revalidate every 24 hours
    revalidate: 86400
  };
}

export default IoTProductsPage;
