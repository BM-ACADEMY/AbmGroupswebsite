import React, { useState } from "react";
import { Filter } from "lucide-react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";
import galleryImages from "../assets/gallery/galleryImages";

const categories = [
  "All",
  "Foundation Programs",
  "BM Academy",
  "Real Estate",
];

const staticImages = [
  // Same image data as before
  { url: galleryImages.img54, category: "Foundation Programs" },
  { url: galleryImages.img49, category: "Foundation Programs" },
  { url: galleryImages.img50, category: "Foundation Programs" },
  { url: galleryImages.img51, category: "Foundation Programs" },
  { url: galleryImages.img52, category: "Foundation Programs" },
  { url: galleryImages.img53, category: "Foundation Programs" },
  { url: galleryImages.img55, category: "Foundation Programs" },
  { url: galleryImages.img30, category: "Foundation Programs" },
  { url: galleryImages.img31, category: "Foundation Programs" },
  { url: galleryImages.img32, category: "Foundation Programs" },
  { url: galleryImages.img33, category: "Foundation Programs" },
  { url: galleryImages.img34, category: "Foundation Programs" },
  { url: galleryImages.img35, category: "Foundation Programs" },
  { url: galleryImages.img36, category: "Foundation Programs" },
  { url: galleryImages.img37, category: "Foundation Programs" },
  { url: galleryImages.img38, category: "Foundation Programs" },
  { url: galleryImages.img39, category: "Foundation Programs" },
  { url: galleryImages.img41, category: "Foundation Programs" },
  { url: galleryImages.img42, category: "Foundation Programs" },
  { url: galleryImages.img44, category: "Foundation Programs" },
  { url: galleryImages.img45, category: "Foundation Programs" },
  { url: galleryImages.img46, category: "Foundation Programs" },
  { url: galleryImages.img47, category: "Foundation Programs" },
  { url: galleryImages.img48, category: "Foundation Programs" },
  { url: galleryImages.img49, category: "Foundation Programs" },
  { url: galleryImages.img50, category: "Foundation Programs" },
  { url: galleryImages.img51, category: "Foundation Programs" },
  { url: galleryImages.img52, category: "Foundation Programs" },
  { url: galleryImages.img53, category: "Foundation Programs" },
  { url: galleryImages.img54, category: "Foundation Programs" },
  { url: galleryImages.img55, category: "Foundation Programs" },
  { url: galleryImages.img1, category: "Foundation Programs" },
  { url: galleryImages.img2, category: "Foundation Programs" },
  { url: galleryImages.img3, category: "Foundation Programs" },
  { url: galleryImages.img4, category: "Foundation Programs" },
  { url: galleryImages.img5, category: "Foundation Programs" },
  { url: galleryImages.img21, category: "Foundation Programs" },
  { url: galleryImages.img20, category: "Foundation Programs" },
  { url: galleryImages.img25, category: "BM Academy" },
  { url: galleryImages.img26, category: "BM Academy" },
  { url: galleryImages.img27, category: "BM Academy" },
  { url: galleryImages.img28, category: "BM Academy" },
  { url: galleryImages.img7, category: "BM Academy" },
  { url: galleryImages.img14, category: "Real Estate" },
  { url: galleryImages.img29, category: "Real Estate" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const filteredItems =
    filter === "All"
      ? staticImages
      : staticImages.filter((item) => item.category === filter);

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredItems.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Gallery <span className="text-yellow-400">Vault</span>
          </h1>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            Explore our work across different domains
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex justify-center items-center mb-10">
          <div className="relative w-[250px]">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <select
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(0);
              }}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Gallery */}
        <LightGallery
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          plugins={[lgZoom, lgThumbnail]}
        >
          {currentItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-700 hover:shadow-yellow-500/20 transition-all duration-300"
              data-sub-html={`<h4>${item.category}</h4>`}
            >
              <img
                src={item.url}
                alt={item.category}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition duration-300">
                <p className="text-white text-sm md:text-base font-medium opacity-0 group-hover:opacity-100">
                  {item.category}
                </p>
              </div>
            </a>
          ))}
        </LightGallery>

        {/* Simplified Pagination */}
        {pageCount > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className={`px-4 py-2 border border-gray-500 rounded-full text-white hover:bg-yellow-400 hover:text-black transition ${
                currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Prev
            </button>
            <span className="text-white">
              Page {currentPage + 1} of {pageCount}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1))}
              disabled={currentPage === pageCount - 1}
              className={`px-4 py-2 border border-gray-500 rounded-full text-white hover:bg-yellow-400 hover:text-black transition ${
                currentPage === pageCount - 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;