import React from "react";
import { assets } from "../../assets/assets"; // Adjust path as needed

// Define policy data for easier maintenance and scalability
const policies = [
  {
    icon: assets.exchange_icon,
    alt: "Exchange Icon",
    title: "Easy Exchange Policy",
    description:
      "Our Easy Exchange Policy allows you to return or exchange any product that doesn’t meet your expectations, making the process fast, simple, and hassle-free.",
  },
  {
    icon: assets.reliable_icon,
    alt: "Reliability Icon",
    title: "Fast and Reliable Delivery",
    description:
      "Enjoy fast and reliable delivery on every order. We ensure your products arrive promptly and safely, with real-time tracking for complete peace of mind.",
  },
  {
    icon: assets.secure_icon,
    alt: "Security Icon",
    title: "Secure Payment",
    description:
      "Shop with confidence knowing all transactions are protected with advanced encryption, keeping your payment details and personal information safe and private.",
  },
];

const PolicyItem = ({ icon, alt, title, description }) => (
  <div
    className="flex flex-col items-center text-center 
    bg-white 
    shadow-lg 
    rounded-2xl 
    p-8 
    border border-gray-300
    transition-transform duration-300 
    hover:scale-105 hover:shadow-xl"
  >
    <img src={icon} className="w-12 h-12 mb-4" alt={alt} />
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const OurPolicy = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <PolicyItem key={index} {...policy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPolicy;
