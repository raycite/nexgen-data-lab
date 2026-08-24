import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import AfricaData from "@/components/AfricaData";
import FeaturedProjects from "@/components/FeaturedProjects";
import LearningCommunity from "@/components/LearningCommunity";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <AfricaData />
      <FeaturedProjects />
      <LearningCommunity />
      <JoinCTA />
      <Footer />
    </main>
  );
}
