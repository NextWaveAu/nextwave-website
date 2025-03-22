// NextWave.au - Use Cases Page Component
// This is a Next.js component for the Use Cases page

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Custom components
import IndustryFilter from '../components/IndustryFilter';
import UseCaseCard from '../components/UseCaseCard';
import ResultsMetrics from '../components/ResultsMetrics';
import ClientTestimonial from '../components/ClientTestimonial';

const UseCasesPage = ({ industries, useCases }) => {
  const [activeIndustry, setActiveIndustry] = useState('all');
  
  const filteredUseCases = activeIndustry === 'all' 
    ? useCases 
    : useCases.filter(useCase => useCase.industry === activeIndustry);

  return (
    <>
      <Head>
        <title>Use Cases | NextWave - Real-World AI & IoT Applications</title>
        <meta name="description" content="Explore real-world applications of NextWave's AI and IoT solutions across various industries including manufacturing, healthcare, retail, and more." />
        <meta name="keywords" content="AI use cases, IoT applications, business automation, digital transformation, Australia" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-800 via-primary-900 to-secondary-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/use-cases-background.svg" 
            alt="Use Cases Background" 
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
              Real-World Impact
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover how NextWave's AI and IoT solutions are transforming businesses across Australia. Explore our collection of success stories and see the measurable results our clients have achieved.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industry Filter Section */}
      <section className="py-12 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Browse by Industry</h2>
          <IndustryFilter 
            industries={industries}
            activeIndustry={activeIndustry}
            setActiveIndustry={setActiveIndustry}
          />
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          {filteredUseCases.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredUseCases.map((useCase, index) => (
                <UseCaseCard 
                  key={useCase.id}
                  useCase={useCase}
                  delay={index * 0.1}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                No use cases found for this industry. Please try another industry or contact us to discuss your specific needs.
              </p>
              <button 
                onClick={() => setActiveIndustry('all')}
                className="mt-4 btn-secondary"
              >
                View All Use Cases
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Use Case Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Success Story</h2>
          
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2 block">
                  Manufacturing Industry
                </span>
                <h3 className="text-2xl font-bold mb-4">Smart Factory Transformation</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Challenge:</h4>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    A leading Australian manufacturer was struggling with production inefficiencies, equipment downtime, and quality control issues that were impacting their bottom line and customer satisfaction.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Solution:</h4>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    NextWave implemented a comprehensive smart factory solution including:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2 text-neutral-700 dark:text-neutral-300">
                    <li>IoT sensors across production equipment</li>
                    <li>AI-powered predictive maintenance system</li>
                    <li>Real-time quality control monitoring</li>
                    <li>Automated workflow optimization</li>
                    <li>Centralized dashboard for operational visibility</li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold mb-2">Results:</h4>
                  <ResultsMetrics 
                    metrics={[
                      { label: "Reduction in Downtime", value: "73%" },
                      { label: "Increase in Productivity", value: "28%" },
                      { label: "Quality Defect Reduction", value: "45%" },
                      { label: "Annual Cost Savings", value: "$1.2M" },
                      { label: "ROI Timeframe", value: "9 months" }
                    ]}
                  />
                </div>
                
                <Link href="/case-studies/smart-factory-transformation" className="btn-primary">
                  Read Full Case Study
                </Link>
              </div>
              
              <div className="relative min-h-[400px] lg:min-h-full bg-neutral-200 dark:bg-neutral-700">
                <Image 
                  src="/images/use-cases/smart-factory.jpg" 
                  alt="Smart Factory Implementation" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="border-t border-neutral-200 dark:border-neutral-700 p-8 bg-neutral-50 dark:bg-neutral-900">
              <ClientTestimonial 
                quote="The transformation of our manufacturing facility has exceeded our expectations. Not only have we seen significant cost savings and efficiency improvements, but the predictive capabilities have completely changed how we approach maintenance and production planning."
                name="Michael Thompson"
                title="Operations Director"
                company="Australian Manufacturing Co."
                image="/images/testimonials/michael-thompson.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results by Industry Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Proven Results Across Industries</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Our solutions deliver measurable impact across various sectors. Here's a snapshot of the results our clients have achieved.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Manufacturing */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Manufacturing</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>73% reduction in equipment downtime</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>28% increase in production efficiency</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>45% reduction in quality defects</span>
                </li>
              </ul>
            </div>
            
            {/* Healthcare */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>32% improvement in patient monitoring</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>41% reduction in administrative tasks</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>24% increase in operational efficiency</span>
                </li>
              </ul>
            </div>
            
            {/* Retail */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Retail</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>18% increase in sales conversion</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>32% improvement in inventory accuracy</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>27% reduction in stockouts</span>
                </li>
              </ul>
            </div>
            
            {/* Logistics */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Logistics</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>22% reduction in delivery times</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>35% improvement in route optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>19% decrease in fuel consumption</span>
                </li>
              </ul>
            </div>
            
            {/* Agriculture */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Agriculture</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>29% increase in crop yield</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>43% reduction in water usage</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>31% decrease in pesticide application</span>
                </li>
              </ul>
            </div>
            
            {/* Energy */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Energy</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>25% improvement in energy efficiency</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>38% reduction in maintenance costs</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>42% decrease in unplanned outages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how NextWave's AI and IoT solutions can address your specific challenges and drive measurable results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-white">
              Schedule a Consultation
            </Link>
            <Link href="/solutions" className="btn-outline-white">
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  // In a real implementation, this would fetch data from a CMS or API
  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'retail', name: 'Retail' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'energy', name: 'Energy' }
  ];

  const useCases = [
    {
      id: 1,
      title: "Predictive Maintenance for Manufacturing Equipment",
      industry: "manufacturing",
      challenge: "A leading manufacturer was experiencing costly downtime due to unexpected equipment failures.",
      solution: "Implementation of IoT sensors and AI-powered predictive analytics to forecast maintenance needs before failures occur.",
      results: [
        "73% reduction in unplanned downtime",
        "$1.2M annual maintenance cost savings",
        "15% increase in equipment lifespan"
      ],
      clientName: "Australian Manufacturing Co.",
      clientLogo: "/images/clients/amc-logo.svg",
      image: "/images/use-cases/predictive-maintenance.jpg",
      slug: "predictive-maintenance-manufacturing"
    },
    {
      id: 2,
      title: "Smart Inventory Management System",
      industry: "retail",
      challenge: "A retail chain was struggling with inventory accuracy, leading to stockouts and excess inventory costs.",
      solution: "Deployment of RFID-based smart inventory system with AI-driven demand forecasting and automated replenishment.",
      results: [
        "32% improvement in inventory accuracy",
        "27% reduction in stockouts",
        "21% decrease in carrying costs"
      ],
      clientName: "National Retail Group",
      clientLogo: "/images/clients/nrg-logo.svg",
      image: "/images/use-cases/smart-inventory.jpg",
      slug: "smart-inventory-retail"
    },
    {
      id: 3,
      title: "Patient Monitoring and Analytics Platform",
      industry: "healthcare",
      challenge: "A healthcare provider needed to improve patient monitoring efficiency and reduce response times to critical events.",
      solution: "Implementation of IoT-enabled patient monitoring devices with AI analytics for early detection of deterioration.",
      results: [
        "32% improvement in early detection of patient deterioration",
        "41% reduction in nurse response time",
        "18% decrease in adverse events"
      ],
      clientName: "Australian Health Services",
      clientLogo: "/images/clients/ahs-logo.svg",
      image: "/images/use-cases/patient-monitoring.jpg",
      slug: "patient-monitoring-healthcare"
    },
    {
      id: 4,
      title: "Precision Agriculture System",
      industry: "agriculture",
      challenge: "A large agricultural operation was facing challenges with water management and crop optimization.",
      solution: "Deployment of soil moisture sensors, weather stations, and drone imagery with AI-powered analytics for precision farming.",
      results: [
        "29% increase in crop yield",
        "43% reduction in water usage",
        "31% decrease in pesticide application"
      ],
      clientName: "Murray Basin Farms",
      clientLogo: "/images/clients/mbf-logo.svg",
      image: "/images/use-cases/precision-agriculture.jpg",
      slug: "precision-agriculture"
    },
    {
      id: 5,
      title: "Smart Logistics Optimization",
      industry: "logistics",
      challenge: "A logistics company was struggling with route efficiency and delivery time predictability.",
      solution: "Implementation of IoT tracking devices and AI-powered route optimization with real-time traffic integration.",
      results: [
        "22% reduction in delivery times",
        "35% improvement in route efficiency",
        "19% decrease in fuel consumption"
      ],
      clientName: "Global Logistics Australia",
      clientLogo: "/images/clients/gla-logo.svg",
      image: "/images/use-cases/smart-logistics.jpg",
      slug: "smart-logistics-optimization"
    },
    {
      id: 6,
      title: "Energy Management System for Commercial Buildings",
      industry: "energy",
      challenge: "A property management company needed to reduce energy consumption across their portfolio of commercial buildings.",
      solution: "Deployment of smart building system with IoT sensors and AI-driven optimization for HVAC, lighting, and power management.",
      results: [
        "25% reduction in energy consumption",
        "$450K annual cost savings",
        "30% decrease in carbon emissions"
      ],
      clientName: "Australian Property Group",
      clientLogo: "/images/clients/apg-logo.svg",
      image: "/images/use-cases/energy-management.jpg",
      slug: "energy-management-buildings"
    }
  ];

  return {
    props: {
      industries,
      useCases
    },
    // Revalidate every 24 hours
    revalidate: 86400
  };
}

export default UseCasesPage;
