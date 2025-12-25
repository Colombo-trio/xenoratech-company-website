import React, { useState } from "react";
import type { PortfolioItem } from "@/types";
import PortfolioModal from "./PortfolioModal";

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "VibeWear E-Commerce Website",
    category: "Web App",
    imageUrl: "/images/portfolio/vibewear/Main.png",
    images: [
      "/images/portfolio/vibewear/1.png",
      "/images/portfolio/vibewear/2.png",
      "/images/portfolio/vibewear/3.png",
      "/images/portfolio/vibewear/4.png",
    ],
    description: "VibeWear is an E-commerce website. Customers can buy clothes",
    technologies: ["React", "NodeJs", "ExpressJs", "MongoDb", "AWS"],
    previewLink: "https://vibewear.lk/",
    imageUrlLight: "/images/portfolio/vibewear/MainLight.png",
    imagesLight: [
      "/images/portfolio/vibewear/1.png",
      "/images/portfolio/vibewear/2.png",
      "/images/portfolio/vibewear/3Light.png",
      "/images/portfolio/vibewear/4Light.png",
    ],
  },
  {
    id: 2,
    title: "Visit Sri Lanka",
    category: "Website",
    imageUrl: "/images/portfolio/visitsl/Main.png",
    images: [
      "/images/portfolio/visitsl/1.png",
      "/images/portfolio/visitsl/2.png",
      "/images/portfolio/visitsl/3.png",
      "/images/portfolio/visitsl/4.png",
    ],
    description: "Visit Sri Lanka is a static blog site",
    technologies: ["React", "Vercel"],
    previewLink: "https://visit-srilanka-eight.vercel.app/",
    imageUrlLight: "/images/portfolio/visitsl/MainLight.png",
    imagesLight: [
      "/images/portfolio/visitsl/1.png",
      "/images/portfolio/visitsl/2.png",
      "/images/portfolio/visitsl/3Light.png",
      "/images/portfolio/visitsl/4Light.png",
    ],
  },
  {
    id: 4,
    title: "JP POS",
    category: "Web App",
    imageUrl: "/images/portfolio/jppos/Main.jpeg",
    images: ["/images/portfolio/jppos/1.jpeg"],
    description:
      "JP POS is an automated logistics system optimizing route planning, inventory management, and fleet tracking using advanced algorithms.",
    technologies: ["Java", "Spring Boot", "Angular", "MongoDB"],
    previewLink: "",
  },
  {
    id: 5,
    title: "Chat with Funds",
    category: "WebApp",
    imageUrl: "/images/portfolio/chatwithfunds/Main.png",
    images: [
      "/images/portfolio/chatwithfunds/1.png",
      "/images/portfolio/chatwithfunds/2.png",
      "/images/portfolio/chatwithfunds/3.png",
      "/images/portfolio/chatwithfunds/4.png",
    ],
    description:
      "Explore a wide range of verified funding options available for nonprofits, small businesses, startups, and individuals - all from reliable foundations and government programs.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    previewLink: "https://chatwithfunds.com",
    imageUrlLight: "/images/portfolio/chatwithfunds/MainLight.png",
    imagesLight: [
      "/images/portfolio/chatwithfunds/1.png",
      "/images/portfolio/chatwithfunds/2.png",
      "/images/portfolio/chatwithfunds/3Light.png",
      "/images/portfolio/chatwithfunds/4Light.png",
    ],
  },
  {
    id: 6,
    title: "The Naturalist Sri Lanka",
    category: "Website",
    imageUrl: "/images/portfolio/tnsl/Main.png",
    images: [
      "/images/portfolio/tnsl/1.png",
      "/images/portfolio/tnsl/2.png",
      "/images/portfolio/tnsl/3.png",
      "/images/portfolio/tnsl/4.png",
    ],
    description:
      "An automated logistics system optimizing route planning, inventory management, and fleet tracking using advanced algorithms.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
    ],
    previewLink: "https://tnaturalistsl.netlify.app/",
    imageUrlLight: "/images/portfolio/tnsl/MainLight.png",
    imagesLight: [
      "/images/portfolio/tnsl/1.png",
      "/images/portfolio/tnsl/2.png",
      "/images/portfolio/tnsl/3Light.png",
      "/images/portfolio/tnsl/4Light.png",
    ],
  },
  {
    id: 9,
    title: "EchoSense: Urban Sound Classifier",
    category: "Machine Learning & AI",
    imageUrl: "/images/portfolio/echosense/Main.png",
    images: ["/images/portfolio/echosense/1.png"],
    description:
      "An end-to-end audio classification system capable of identifying 50 distinct urban sounds with 68.75% accuracy. Features a production-ready microservice architecture with a Dockerized FastAPI backend and an interactive Streamlit frontend, overcoming complex deployment challenges like GPU/CPU mismatch and read-only filesystem caching.",
    technologies: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "Docker",
      "Streamlit",
      "Librosa",
    ],
    previewLink: "https://huggingface.co/spaces/HHaaraa/echosense",
  },
  {
    id: 10,
    title: "LuxStay Luxury Hotel",
    category: "Landing Website",
    imageUrl: "/images/portfolio/luxstayluxuryhotel/Main.png",
    images: [
      "/images/portfolio/luxstayluxuryhotel/1.png",
      "/images/portfolio/luxstayluxuryhotel/2.png",
      "/images/portfolio/luxstayluxuryhotel/3.png",
      "/images/portfolio/luxstayluxuryhotel/4.png",
    ],
    description: "LuxStay Luxury Hotel is a landing page for a luxury hotel.",
    technologies: ["React", "NodeJs", "Tailwind CSS", "Netlify"],
    previewLink: "https://luxstayluxuryhotel.netlify.app/",
    imageUrlLight: "/images/portfolio/luxstayluxuryhotel/MainLight.png",
    imagesLight: [
      "/images/portfolio/luxstayluxuryhotel/1.png",
      "/images/portfolio/luxstayluxuryhotel/2.png",
      "/images/portfolio/luxstayluxuryhotel/3Light.png",
      "/images/portfolio/luxstayluxuryhotel/4Light.png",
    ],
  },
  {
    id: 11,
    title: "Lumina Luxe",
    category: "Portfolio Website",
    imageUrl: "/images/portfolio/luminaluxe/Main.png",
    images: [
      "/images/portfolio/luminaluxe/1.png",
      "/images/portfolio/luminaluxe/2.png",
      "/images/portfolio/luminaluxe/3.png",
      "/images/portfolio/luminaluxe/4.png",
    ],
    description: "Lumina Luxe is a portfolio page for a photograper.",
    technologies: ["React", "NodeJs", "Tailwind CSS", "Netlify"],
    previewLink: "https://lumina-luxe.netlify.app/",
    imageUrlLight: "/images/portfolio/luminaluxe/MainLight.png",
    imagesLight: [
      "/images/portfolio/luminaluxe/1.png",
      "/images/portfolio/luminaluxe/2.png",
      "/images/portfolio/luminaluxe/3Light.png",
      "/images/portfolio/luminaluxe/4Light.png",
    ],
  },
  {
    id: 12,
    title: "Aura Brew",
    category: "Landing Website",
    imageUrl: "/images/portfolio/aurabrew/Main.png",
    images: [
      "/images/portfolio/aurabrew/1.png",
      "/images/portfolio/aurabrew/2.png",
      "/images/portfolio/aurabrew/3.png",
      "/images/portfolio/aurabrew/4.png",
    ],
    description: "Aura Brew is a landing page for a coffee shop.",
    technologies: ["React", "NodeJs", "Tailwind CSS", "Netlify"],
    previewLink: "https://aura-brew.netlify.app/",
    imageUrlLight: "/images/portfolio/aurabrew/MainLight.png",
    imagesLight: [
      "/images/portfolio/aurabrew/1.png",
      "/images/portfolio/aurabrew/2.png",
      "/images/portfolio/aurabrew/3Light.png",
      "/images/portfolio/aurabrew/4Light.png",
    ],
  },
];

const PortfolioCard: React.FC<{
  item: PortfolioItem;
  onClick: (item: PortfolioItem) => void;
}> = ({ item, onClick }) => (
  <div
    className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
    onClick={() => onClick(item)}
  >
    <img
      src={item.imageUrl}
      alt={item.title}
      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
        item.imageUrlLight ? "hidden dark:block" : ""
      }`}
    />
    {item.imageUrlLight && (
      <img
        src={item.imageUrlLight}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 block dark:hidden"
      />
    )}
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
      <p className="text-sm font-semibold text-cyan-400">{item.category}</p>
      <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
    </div>
  </div>
);

const PortfolioSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Our Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Take a look at some of the innovative solutions we’ve delivered for
            our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onClick={setSelectedItem}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <PortfolioModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
