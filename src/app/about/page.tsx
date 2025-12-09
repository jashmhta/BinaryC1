'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 600,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 0,
        disable: 'mobile',
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white" data-aos="fade-up">
              About <span className="text-primary dark:text-teal-400">Binary Capital</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="100">
              Building lasting partnerships through world-class financial strategies
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-black" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="max-w-md mx-auto mb-8" data-aos="fade-down">
              <Image src="/logo-spinner.gif" alt="Binary Capital" width={250} height={250} className="mx-auto" style={{imageRendering: 'crisp-edges'}} unoptimized />
            </div>
            <h2 className="section-title text-center golden-underline" data-aos="fade-up">Our Story</h2>
          </div>
          <div className="max-w-7xl mx-auto space-y-6 text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
            <p>
              Binary Capital, a Mumbai-based investment banking and financial advisory firm, was founded with a vision to redefine finance by building lasting partnerships rather than one-time transactions. Established by seasoned professionals from global investment banking, our mission has always been to combine world-class strategy with a truly bespoke, client-centric approach tailored to India's evolving markets.
            </p>
            <p>
              Over the past decade, we have helped businesses turn ambitions into achievements by structuring innovative financial instruments, securing growth capital, and guiding landmark M&A deals that have created sustainable value. Our success is measured not just in numbers, but in the stories of progress we've helped shape.
            </p>
            <p>
              What truly sets Binary Capital apart is our dynamic new generation of professionals, driven by a positive mindset, forward-looking energy, and an unwavering belief in possibility. Together, we bring experience and enthusiasm in equal measure, blending insight with innovation to simplify complexities, enhance value, and empower brighter financial futures.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16 golden-underline" data-aos="fade-up">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            <div className="text-center p-8" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 golden-icon">
                <svg className="w-8 h-8 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Integrity at the Core</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe trust is the foundation of every great partnership. Transparency, ethics, and accountability guide every decision we make.
              </p>
            </div>

            <div className="text-center p-8" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 golden-icon">
                <svg className="w-8 h-8 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Client-Centric Thinking</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every client's journey is unique. We listen, understand, and craft tailored solutions designed to deliver meaningful, measurable outcomes.
              </p>
            </div>

            <div className="text-center p-8" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 golden-icon">
                <svg className="w-8 h-8 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Innovation with Purpose</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We embrace change with curiosity and creativity continuously seeking smarter, more agile ways to deliver financial excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* India Presence Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-black" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="section-title text-center mb-8 golden-underline" data-aos="fade-up">Our Presence Across India</h2>
            <p className="section-subtitle mb-12" data-aos="fade-up" data-aos-delay="100">
              Delivering world-class financial advisory services in India's major business hubs
            </p>
            
            {/* India Map Video */}
            <div className="max-w-5xl mx-auto mb-12" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/india_map.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="300">
              With a proven track record of successful engagements across Mumbai, Delhi, Bangalore, Hyderabad, and Chennai, we bring deep local market knowledge combined with global best practices to every client relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-thick my-16"></div>

      {/* Team Section */}
      <section id="team" className="py-12 md:py-16 lg:py-20 bg-white dark:bg-black" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-center golden-underline" data-aos="fade-up">Our Expert Team</h2>
            <p className="section-subtitle">
              Meet the experienced professionals committed to your success. Our team brings decades of expertise in investment banking, corporate finance, and strategic advisory.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Promoter 1 - Shray Vasudeva */}
            <div className="glass-card p-8" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Shray Vasudeva</h3>
              <p className="text-lg text-primary dark:text-teal-400 mb-4 font-semibold">Founder & Managing Partner</p>
              <div className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed">
                <p>
                  Shray Vasudeva brings over a decade of strong experience in Investment Banking and Corporate Finance, having led and advised on a wide range of financial transactions for growth-oriented and mid-market companies. His professional journey spans capital structuring, project financing, debt solutions, and strategic advisory across multiple sectors, enabling businesses to scale with clarity and confidence.
                </p>
                <p>
                  Over the years, Shray has developed a reputation for his analytical depth, pragmatic approach, and ability to navigate complex financial landscapes. He has supported clients through every stage of the transaction process, from evaluating financial requirements and designing optimal structures to managing investor interactions and ensuring smooth execution.
                </p>
                <p>
                  His understanding of regulatory frameworks, market trends, and sector-specific financial dynamics allows him to craft solutions that align with both immediate needs and long-term objectives. As the Founder and Managing Partner, Shray leads the firm's strategic vision, fosters trusted client relationships, and drives the delivery of high-quality advisory services that contribute to sustainable value creation.
                </p>
              </div>
            </div>

            {/* Promoter 2 - Shahrukh Sheikh */}
            <div className="glass-card p-8" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Shahrukh Sheikh</h3>
              <p className="text-lg text-primary dark:text-teal-400 mb-4 font-semibold">Managing Partner</p>
              <div className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed">
                <p>
                  The Managing Partner brings over a decade of experience in Investment Banking and Corporate Finance, with a proven track record of structuring and executing complex financial transactions across diverse industries. With extensive exposure to capital raising, project funding, debt syndication, and strategic financial advisory, they have supported mid-sized and high-growth companies throughout their financial journeys.
                </p>
                <p>
                  Their expertise spans the full transaction lifecycle, from initial assessment and financial modeling to negotiations, investor engagement, and successful deal closure. Known for strategic insight and a client-first approach, the Managing Partner has been instrumental in enabling businesses to secure the right capital at the right time, driving strong and sustainable growth.
                </p>
                <p>
                  With a deep understanding of market dynamics, regulatory environments, and business fundamentals, they deliver tailored solutions that create long-term value. In their leadership role, they spearhead the firm's advisory mandates, cultivate strong client relationships, and guide the organisation toward continued excellence in corporate finance and capital markets.
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-teal-600 dark:from-blue-900 dark:to-teal-900" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6" data-aos="fade-up">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Let's discuss how our expertise can help you achieve your financial goals
          </p>
          <Link href="/#contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-lg" data-aos="fade-up" data-aos-delay="200">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
