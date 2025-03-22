// NextWave.au - AI Solutions Page Component
// This is a Next.js component for the AI Solutions page

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Custom components
import SolutionTabs from '../components/SolutionTabs';
import CaseStudyCard from '../components/CaseStudyCard';
import ImplementationTimeline from '../components/ImplementationTimeline';
import AIDemo from '../components/AIDemo';
import Accordion from '../components/Accordion';

const AISolutionsPage = ({ solutionCategories, caseStudies, faqs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Head>
        <title>AI Solutions | NextWave - Intelligent Automation</title>
        <meta name="description" content="Explore NextWave's AI-powered business solutions including predictive analytics, process automation, computer vision, and natural language processing." />
        <meta name="keywords" content="AI solutions, predictive analytics, process automation, computer vision, NLP, artificial intelligence, Australia" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/ai-background-pattern.svg" 
            alt="AI Pattern Background" 
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
              AI-Powered Business Solutions
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform your operations with intelligent automation and data-driven insights. Our AI solutions help Australian businesses optimize processes, reduce costs, and drive innovation.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="stat-box">
                <span className="text-3xl font-bold">98%</span>
                <span className="text-sm">Accuracy Rate</span>
              </div>
              <div className="stat-box">
                <span className="text-3xl font-bold">45%</span>
                <span className="text-sm">Cost Reduction</span>
              </div>
              <div className="stat-box">
                <span className="text-3xl font-bold">3x</span>
                <span className="text-sm">Faster Processing</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our AI Solutions</h2>
          <SolutionTabs 
            categories={solutionCategories} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{solutionCategories[activeTab].title}</h3>
                <p className="mb-6">{solutionCategories[activeTab].description}</p>
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {solutionCategories[activeTab].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Applicable Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solutionCategories[activeTab].industries.map((industry, index) => (
                      <span key={index} className="badge">{industry}</span>
                    ))}
                  </div>
                </div>
                <Link href={`/solutions/${solutionCategories[activeTab].slug}`} className="btn-primary">
                  Learn More
                </Link>
              </div>
              <div className="relative h-80 lg:h-96">
                <Image 
                  src={solutionCategories[activeTab].image} 
                  alt={solutionCategories[activeTab].title} 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Experience AI in Action</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Try our interactive demo to see how our AI solutions process and analyze data to deliver actionable insights.
          </p>
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 md:p-8">
            <AIDemo />
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Full Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">From Concept to Implementation</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Our proven methodology ensures a smooth transition from initial concept to fully operational AI solution.
          </p>
          <ImplementationTimeline />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Discover how our AI solutions have helped businesses across Australia achieve their goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard 
                key={caseStudy.id}
                caseStudy={caseStudy}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/case-studies" className="btn-secondary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
                Technologies Used
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  TensorFlow and PyTorch for deep learning models
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  Natural Language Processing with BERT and GPT
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  Computer Vision with OpenCV and YOLO
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  Time Series Analysis with Prophet and LSTM
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  Cloud-based infrastructure on AWS and Azure
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                Integration Capabilities
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  RESTful API and GraphQL interfaces
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Webhook support for real-time notifications
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Integration with major ERP and CRM systems
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Custom connectors for legacy systems
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Data pipeline integration with ETL tools
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Security Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  End-to-end encryption for data in transit and at rest
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  Role-based access control (RBAC)
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  Multi-factor authentication
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  Regular security audits and penetration testing
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  Compliance with Australian data protection regulations
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Scalability Options
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Horizontal scaling for increased load
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Auto-scaling based on demand
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Distributed processing for large datasets
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Multi-region deployment options
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                  Modular architecture for easy expansion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqs} />
            <div className="text-center mt-8">
              <p className="mb-4">Can't find the answer you're looking for?</p>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  // In a real implementation, this would fetch data from a CMS or API
  const solutionCategories = [
    {
      id: 1,
      title: "Predictive Analytics",
      slug: "predictive-analytics",
      description: "Harness the power of historical data to forecast future trends and outcomes. Our predictive analytics solutions help businesses anticipate market changes, customer behavior, and operational needs.",
      features: [
        "Time series forecasting for demand planning",
        "Customer churn prediction and prevention",
        "Predictive maintenance for equipment",
        "Risk assessment and management",
        "Sales and revenue forecasting"
      ],
      industries: ["Manufacturing", "Retail", "Finance", "Healthcare", "Logistics"],
      image: "/images/solutions/predictive-analytics.svg"
    },
    {
      id: 2,
      title: "Process Automation",
      slug: "process-automation",
      description: "Streamline operations and reduce manual effort with intelligent process automation. Our solutions combine RPA with AI to create smart workflows that adapt and improve over time.",
      features: [
        "Intelligent document processing",
        "Workflow optimization",
        "Decision automation",
        "Quality control automation",
        "Customer service automation"
      ],
      industries: ["Finance", "Insurance", "Healthcare", "Government", "Legal"],
      image: "/images/solutions/process-automation.svg"
    },
    {
      id: 3,
      title: "Computer Vision",
      slug: "computer-vision",
      description: "Enable machines to interpret and understand visual information from the world. Our computer vision solutions turn images and video into actionable insights for your business.",
      features: [
        "Object detection and classification",
        "Quality inspection and defect detection",
        "Facial recognition and analysis",
        "Optical character recognition (OCR)",
        "Video analytics and surveillance"
      ],
      industries: ["Manufacturing", "Retail", "Security", "Agriculture", "Healthcare"],
      image: "/images/solutions/computer-vision.svg"
    },
    {
      id: 4,
      title: "Natural Language Processing",
      slug: "natural-language-processing",
      description: "Unlock the value in text data with our NLP solutions. From sentiment analysis to document classification, we help businesses understand and leverage textual information.",
      features: [
        "Sentiment analysis and brand monitoring",
        "Text classification and categorization",
        "Named entity recognition",
        "Chatbots and virtual assistants",
        "Multilingual support"
      ],
      industries: ["Customer Service", "Marketing", "Media", "Legal", "Healthcare"],
      image: "/images/solutions/nlp.svg"
    },
    {
      id: 5,
      title: "Custom AI Development",
      slug: "custom-ai",
      description: "Tailored artificial intelligence solutions designed specifically for your unique business challenges. Our team works closely with you to develop custom AI models and applications.",
      features: [
        "Bespoke AI model development",
        "Integration with existing systems",
        "Proprietary algorithm development",
        "Custom data pipeline creation",
        "Ongoing model training and improvement"
      ],
      industries: ["All Industries"],
      image: "/images/solutions/custom-ai.svg"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Predictive Maintenance for Manufacturing",
      industry: "Manufacturing",
      challenge: "Frequent unexpected equipment failures leading to costly downtime",
      solution: "IoT sensors with AI-powered predictive analytics",
      result: "73% reduction in unplanned downtime",
      image: "/images/case-studies/manufacturing.jpg",
      slug: "predictive-maintenance-manufacturing"
    },
    {
      id: 2,
      title: "Automated Document Processing for Insurance",
      industry: "Insurance",
      challenge: "Manual processing of thousands of claims forms causing delays",
      solution: "Intelligent document processing with NLP",
      result: "85% reduction in processing time",
      image: "/images/case-studies/insurance.jpg",
      slug: "document-processing-insurance"
    },
    {
      id: 3,
      title: "Customer Behavior Analysis for Retail",
      industry: "Retail",
      challenge: "Inability to predict customer preferences and purchasing patterns",
      solution: "AI-powered customer analytics platform",
      result: "32% increase in customer retention",
      image: "/images/case-studies/retail.jpg",
      slug: "customer-analysis-retail"
    }
  ];

  const faqs = [
    {
      question: "How long does it typically take to implement an AI solution?",
      answer: "Implementation timelines vary based on the complexity of the solution and your existing infrastructure. Simple solutions can be deployed in 4-6 weeks, while more complex enterprise implementations may take 3-6 months. During our initial consultation, we'll provide a detailed timeline specific to your project."
    },
    {
      question: "Do I need a large amount of data to get started with AI?",
      answer: "While having historical data is beneficial, it's not always necessary to get started. We can work with smaller datasets and implement data collection strategies as part of the solution. For some applications, we can also leverage transfer learning and pre-trained models to reduce the amount of data needed."
    },
    {
      question: "How do you ensure the security of our data?",
      answer: "Data security is our top priority. We implement end-to-end encryption, role-based access controls, and regular security audits. All our solutions comply with Australian data protection regulations, and we can work within your existing security frameworks. We're also happy to sign NDAs and data processing agreements."
    },
    {
      question: "Can your AI solutions integrate with our existing systems?",
      answer: "Yes, our solutions are designed with integration in mind. We offer various integration methods including APIs, webhooks, and custom connectors. We have experience integrating with major ERP and CRM systems, as well as legacy infrastructure. Our team will assess your current systems during the discovery phase to ensure seamless integration."
    },
    {
      question: "How do you measure the ROI of AI implementations?",
      answer: "We establish clear KPIs and success metrics at the beginning of each project. These typically include efficiency gains, cost reductions, revenue increases, or other business-specific metrics. We provide regular reporting on these metrics and work with you to quantify the ROI. Most of our clients see positive ROI within 6-12 months of implementation."
    }
  ];

  return {
    props: {
      solutionCategories,
      caseStudies,
      faqs
    },
    // Revalidate every 24 hours
    revalidate: 86400
  };
}

export default AISolutionsPage;
