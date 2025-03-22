// NextWave.au - Home Page Component
// This is a Next.js component for the home page

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Custom components
import ParticleBackground from '../components/ParticleBackground';
import SolutionCard from '../components/SolutionCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import BlogPostCard from '../components/BlogPostCard';
import ContactForm from '../components/ContactForm';

const HomePage = ({ featuredSolutions, testimonials, blogPosts }) => {
  return (
    <>
      <Head>
        <title>NextWave | Intelligent Automation for Tomorrow's Challenges</title>
        <meta name="description" content="NextWave delivers cutting-edge AI solutions and IoT products for Australian businesses" />
        <meta name="keywords" content="AI solutions, IoT products, automation, Australia, smart technology" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <ParticleBackground />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Intelligent Automation for Tomorrow's Challenges
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-700 dark:text-neutral-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              NextWave delivers cutting-edge AI solutions and IoT products for Australian businesses
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/solutions" className="btn-primary">
                  Explore Solutions
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link href="/use-cases" className="btn-secondary">
                  See Use Cases
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NextWave</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Prop 1 */}
            <motion.div 
              className="card"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="icon-container mb-4">
                <Image src="/icons/ai-brain.svg" alt="Smart AI Solutions" width={64} height={64} />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart AI Solutions</h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Custom artificial intelligence solutions designed to automate processes and deliver actionable insights.
              </p>
              <Link href="/solutions" className="link-with-arrow">
                Learn More
              </Link>
            </motion.div>

            {/* Value Prop 2 */}
            <motion.div 
              className="card"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon-container mb-4">
                <Image src="/icons/iot-device.svg" alt="IoT Innovation" width={64} height={64} />
              </div>
              <h3 className="text-xl font-bold mb-2">IoT Innovation</h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Connected devices and sensors that transform physical operations into smart, data-driven systems.
              </p>
              <Link href="/products" className="link-with-arrow">
                Learn More
              </Link>
            </motion.div>

            {/* Value Prop 3 */}
            <motion.div 
              className="card"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="icon-container mb-4">
                <Image src="/icons/australia-map.svg" alt="Australian Expertise" width={64} height={64} />
              </div>
              <h3 className="text-xl font-bold mb-2">Australian Expertise</h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Local knowledge and support tailored to Australian business needs and compliance requirements.
              </p>
              <Link href="/about" className="link-with-arrow">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Solutions Section */}
      <section className="py-16 bg-waves-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Transformative Technology Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredSolutions.map((solution, index) => (
              <SolutionCard 
                key={solution.id}
                solution={solution}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Showcase */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Real-World Impact</h2>
          {/* Tabs for industry selection would go here */}
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2 block">
                  Manufacturing Industry
                </span>
                <h3 className="text-2xl font-bold mb-4">Predictive Maintenance Solution</h3>
                <p className="mb-4">
                  A leading Australian manufacturer was experiencing costly downtime due to unexpected equipment failures.
                </p>
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Our Solution:</h4>
                  <p>
                    Implementation of IoT sensors and AI-powered predictive analytics to forecast maintenance needs before failures occur.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Results:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>73% reduction in unplanned downtime</li>
                    <li>$1.2M annual maintenance cost savings</li>
                    <li>15% increase in equipment lifespan</li>
                  </ul>
                </div>
                <Link href="/use-cases/manufacturing" className="btn-secondary">
                  View Full Case Study
                </Link>
              </div>
              <div className="relative h-80">
                <Image 
                  src="/images/use-cases/predictive-maintenance-diagram.svg" 
                  alt="Predictive Maintenance Implementation" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary-50 dark:bg-secondary-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard 
                key={post.id}
                post={post}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="btn-secondary">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg mb-8">
                Get in touch with our team to discuss how NextWave's AI and IoT solutions can help you overcome challenges and drive innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span>+61 2 1234 5678</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span>contact@nextwave.au</span>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  // In a real implementation, this would fetch data from a CMS or API
  const featuredSolutions = [
    {
      id: 1,
      title: "Predictive Analytics",
      description: "Forecast trends and anticipate changes with AI-powered predictive models.",
      icon: "/icons/predictive-analytics.svg",
      link: "/solutions/predictive-analytics"
    },
    {
      id: 2,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation of repetitive tasks.",
      icon: "/icons/process-automation.svg",
      link: "/solutions/process-automation"
    },
    {
      id: 3,
      title: "Smart Sensors",
      description: "IoT devices that collect and transmit real-time data from your operations.",
      icon: "/icons/smart-sensors.svg",
      link: "/products/smart-sensors"
    },
    {
      id: 4,
      title: "Custom AI Development",
      description: "Tailored artificial intelligence solutions for your unique business challenges.",
      icon: "/icons/custom-ai.svg",
      link: "/solutions/custom-ai"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "NextWave's predictive maintenance solution has completely transformed our manufacturing operations. We've seen a dramatic reduction in downtime and maintenance costs.",
      name: "Sarah Johnson",
      title: "Operations Director",
      company: "Australian Manufacturing Co.",
      image: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      id: 2,
      quote: "The IoT solution implemented by NextWave has given us unprecedented visibility into our supply chain. We can now make decisions based on real-time data.",
      name: "Michael Chen",
      title: "Supply Chain Manager",
      company: "Global Logistics Australia",
      image: "/images/testimonials/michael-chen.jpg"
    },
    {
      id: 3,
      quote: "Working with NextWave to develop our custom AI solution was seamless. Their team understood our needs and delivered a system that exceeded our expectations.",
      name: "Emma Williams",
      title: "CTO",
      company: "TechInnovate",
      image: "/images/testimonials/emma-williams.jpg"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Australian Manufacturing",
      excerpt: "Exploring how artificial intelligence is revolutionizing the manufacturing sector in Australia.",
      category: "Industry Trends",
      date: "2025-03-10",
      image: "/images/blog/ai-manufacturing.jpg",
      slug: "future-of-ai-in-australian-manufacturing"
    },
    {
      id: 2,
      title: "5 Ways IoT Is Transforming Supply Chain Management",
      excerpt: "Discover how Internet of Things technology is creating more efficient and transparent supply chains.",
      category: "IoT",
      date: "2025-03-05",
      image: "/images/blog/iot-supply-chain.jpg",
      slug: "5-ways-iot-transforming-supply-chain"
    },
    {
      id: 3,
      title: "Implementing Predictive Maintenance: A Step-by-Step Guide",
      excerpt: "A practical guide to implementing predictive maintenance systems in your operations.",
      category: "How-To",
      date: "2025-02-28",
      image: "/images/blog/predictive-maintenance.jpg",
      slug: "implementing-predictive-maintenance-guide"
    }
  ];

  return {
    props: {
      featuredSolutions,
      testimonials,
      blogPosts
    },
    // Revalidate every 24 hours
    revalidate: 86400
  };
}

export default HomePage;
