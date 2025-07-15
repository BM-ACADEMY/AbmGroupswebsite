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
import galleryImages from "../assets/gallery/galleryImages"; // Adjust path as needed

const categories = [
  "All",
  "BM Academy",
  "Dada’s Kitchen",
  "Real Estate",
  "Hajj & Umrah",
  "Foundation Programs",
  // "TravellersNeed",
];

const staticImages = [
  // --- BM Academy ---
  {
    id: 1,
    url: galleryImages.img25,
    thumbnailUrl: galleryImages.img25,
    category: "BM Academy",
  },
  {
    id: 2,
    url: galleryImages.img26,
    thumbnailUrl: galleryImages.img26,
    category: "BM Academy",
  },
  {
    id: 3,
    url: galleryImages.img27,
    thumbnailUrl: galleryImages.img27,
    category: "BM Academy",
  },
  {
    id: 4,
    url: galleryImages.img30,
    thumbnailUrl: galleryImages.img30,
    category: "BM Academy",
  },
  {
    id: 5,
    url: galleryImages.img28,
    thumbnailUrl: galleryImages.img28,
    category: "BM Academy",
  },

  {
    id: 6,
    url: galleryImages.img7,
    thumbnailUrl: galleryImages.img7,
    category: "BM Academy",
  },
  // --- Dada’s Kitchen ---
  {
    id: 7,
    url: galleryImages.img8,
    thumbnailUrl: galleryImages.img8,
    category: "Dada’s Kitchen",
  },
  {
    id: 8,
    url: galleryImages.img9,
    thumbnailUrl: galleryImages.img9,
    category: "Dada’s Kitchen",
  },
  {
    id: 9,
    url: galleryImages.img10,
    thumbnailUrl: galleryImages.img10,
    category: "Dada’s Kitchen",
  },
  {
    id: 10,
    url: galleryImages.img11,
    thumbnailUrl: galleryImages.img11,
    category: "Dada’s Kitchen",
  },

  {
    id: 11,
    url: galleryImages.img12,
    thumbnailUrl: galleryImages.img12,
    category: "Dada’s Kitchen",
  },
  {
    id: 12,
    url: galleryImages.img13,
    thumbnailUrl: galleryImages.img13,
    category: "Dada’s Kitchen",
  },
  // --- Hajj & Umrah ---
  {
    id: 13,
    url: galleryImages.img15,
    thumbnailUrl: galleryImages.img15,
    category: "Hajj & Umrah",
  },
  {
    id: 14,
    url: galleryImages.img16,
    thumbnailUrl: galleryImages.img16,
    category: "Hajj & Umrah",
  },
  {
    id: 15,
    url: galleryImages.img17,
    thumbnailUrl: galleryImages.img17,
    category: "Hajj & Umrah",
  },
  {
    id: 16,
    url: galleryImages.img18,
    thumbnailUrl: galleryImages.img18,
    category: "Hajj & Umrah",
  },
  {
    id: 17,
    url: galleryImages.img19,
    thumbnailUrl: galleryImages.img19,
    category: "Hajj & Umrah",
  },

  // --- TravellersNeed ---
  // {
  //   id: 18,
  //   url: galleryImages.img16,
  //   thumbnailUrl: galleryImages.img16,
  //   category: "TravellersNeed",
  // },
  // {
  //   id: 19,
  //   url: galleryImages.img22,
  //   thumbnailUrl: galleryImages.img22,
  //   category: "TravellersNeed",
  // },
  // {
  //   id: 20,
  //   url: galleryImages.img28,
  //   thumbnailUrl: galleryImages.img28,
  //   category: "TravellersNeed",
  // },

  // --- Real Estate ---
  {
    id: 21,
    url: galleryImages.img14,
    thumbnailUrl: galleryImages.img14,
    category: "Real Estate",
  },
  {
    id: 22,
    url: galleryImages.img29,
    thumbnailUrl: galleryImages.img29,
    category: "Real Estate",
  },

  // --- Foundation Programs ---
  {
    id: 23,
    url: galleryImages.img1,
    thumbnailUrl: galleryImages.img1,
    category: "Foundation Programs",
  },
  {
    id: 24,
    url: galleryImages.img2,
    thumbnailUrl: galleryImages.img2,
    category: "Foundation Programs",
  },
  {
    id: 25,
    url: galleryImages.img3,
    thumbnailUrl: galleryImages.img3,
    category: "Foundation Programs",
  },
  {
    id: 26,
    url: galleryImages.img4,
    thumbnailUrl: galleryImages.img4,
    category: "Foundation Programs",
  },
  {
    id: 27,
    url: galleryImages.img5,
    thumbnailUrl: galleryImages.img5,
    category: "Foundation Programs",
  },
  {
    id: 28,
    url: galleryImages.img17,
    thumbnailUrl: galleryImages.img17,
    category: "Foundation Programs",
  },
  {
    id: 29,
    url: galleryImages.img20,
    thumbnailUrl: galleryImages.img20,
    category: "Foundation Programs",
  },
  {
    id: 30,
    url: galleryImages.img21,
    thumbnailUrl: galleryImages.img21,
    category: "Foundation Programs",
  },
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
    <div className="min-h-screen bg-gradient-to-b from-black to-[#000000e1] py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-16 px-4 md:px-8"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Our <span className="text-[#facc15]">Clients</span>
          </h1>
        </motion.div>

        <div className="flex justify-center items-center mb-8">
          <div className="relative">
            <Filter
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <select
              className="pl-10 pr-4 py-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <LightGallery
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center"
          plugins={[lgZoom, lgThumbnail]}
        >
          {currentItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-[350px] group"
              data-sub-html={`<h4>${item.description}</h4><p>${item.category}</p>`}
            >
              <img
                src={item.thumbnailUrl}
                alt={item.description}
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white text-sm font-medium text-center">
                  ({item.category})
                </p>
              </div>
            </a>
          ))}
        </LightGallery>

        {pageCount > 1 && (
          <div className="mt-8 flex justify-center items-center">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={handlePageChange}
              containerClassName={"flex space-x-2 items-center"}
              pageClassName={
                "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer text-white hover:bg-yellow-500 hover:text-black transition"
              }
              activeClassName={
                "bg-yellow-400 text-black font-bold border-yellow-400"
              }
              previousClassName={
                "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer text-white hover:bg-yellow-500 hover:text-black transition"
              }
              nextClassName={
                "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer text-white hover:bg-yellow-500 hover:text-black transition"
              }
              disabledClassName={"opacity-50 cursor-not-allowed"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
