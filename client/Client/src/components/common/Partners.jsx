import React from "react";
import { assets } from "../../assets/assets";

const partners = [
  {
    src: assets.partner1,
    alt: "Partner 1 Logo",
  },
  {
    src: assets.partner2,
    alt: "Partner 2 Logo",
  },
  {
    src: assets.partner3,
    alt: "Partner 3 Logo",
  },
  {
    src: assets.partner4,
    alt: "Partner 4 Logo",
  },
  {
    src: assets.partner5,
    alt: "Partner 5 Logo",
  },
];

const PartnerLogo = ({ src, alt }) => (
  <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-6 w- h-32 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
    <img
      src={src}
      alt={alt}
      className="w-[80px] animation-move"
      style={{ animation: "move 4s ease-in-out infinite alternate" }}
    />
  </div>
);

const Partners = () => {
  return (
    <>
      <style>{`
        @keyframes move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateY(10px);
          }
        }
      `}</style>
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-around items-center">
            {partners.map((partner, index) => (
              <PartnerLogo key={index} {...partner} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
