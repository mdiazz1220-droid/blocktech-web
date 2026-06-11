/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import FloatingNav from './components/FloatingNav';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import VisualCollage from './components/VisualCollage';
import Manifesto from './components/Manifesto';
import BrandKnowledgeBase from './components/BrandKnowledgeBase';
import GenerationPlayground from './components/GenerationPlayground';
import TeamUseCases from './components/TeamUseCases';
import Testimonial from './components/Testimonial';
import BlogUpdates from './components/BlogUpdates';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="text-text font-sans min-h-screen antialiased bg-page-bg selection:bg-black selection:text-white-soft relative overflow-x-hidden">
      
      {/* Dynamic Overlay Grid representing Switzerland design blueprint lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b1b1b04_1px,transparent_1px),linear-gradient(to_bottom,#1b1b1b04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      
      {/* Floating Header */}
      <FloatingNav onBookDemo={handleOpenBooking} />

      {/* Main Sections */}
      <main className="relative z-10">
        
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Trust Marquee Stream */}
        <TrustMarquee />

        {/* Section 3: Absolute Overlapping Visual Collage */}
        <VisualCollage />

        {/* Section 4: Modern Manifesto */}
        <Manifesto />

        {/* Section 5: Brand OS Knowledge Base Hub */}
        <BrandKnowledgeBase />

        {/* Section 6: AI Studio Assistant Workspace */}
        <GenerationPlayground />

        {/* Section 7: Switcher Team Use Cases */}
        <TeamUseCases />

        {/* Section 8: Large client Quote testimonial */}
        <Testimonial />

        {/* Section 9: Custom Blog Grid */}
        <BlogUpdates />

        {/* Section 10: Final Grand CTA Invitation */}
        <CallToAction onBookDemo={handleOpenBooking} />

      </main>

      {/* Footer Block */}
      <Footer />

      {/* High-end Interactive Scheduler Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

    </div>
  );
}
