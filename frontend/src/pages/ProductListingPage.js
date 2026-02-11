import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import {
  getAllProducts,
  getCategories,
  searchProducts,
} from "../services/productService";
import "./styles/ProductListingPage.css";

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 1000],
    sortBy: "newest",
    inStock: false,
  });

  const searchTerm = searchParams.get("search");
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // Mock products for demonstration
        const mockProducts = [
          {
            id: 1,
            name: "The Glycolic Acid Toner",
            price: 29.99,
            category: "Skincare",
            imageUrl: "/images/S1.jpg",
            inStock: true,
          },
          {
            id: 2,
            name: "Facemask",
            price: 15.99,
            category: "Skincare",
            imageUrl: "/images/S2.jpg",
            inStock: true,
          },
          {
            id: 3,
            name: "Moisturizing Toner",
            price: 24.99,
            category: "Skincare",
            imageUrl: "/images/S3.jpg",
            inStock: true,
          },
          {
            id: 4,
            name: "Headphone Keychain Charm",
            price: 45.99,
            category: "Accessories",
            imageUrl: "/images/Ac1.jpg",
            inStock: false,
          },
          {
            id: 5,
            name: "Bag",
            price: 12.99,
            category: "Accessories",
            imageUrl: "/images/Ac2.jpg",
            inStock: true,
          },
          {
            id: 6,
            name: "Bracelet",
            price: 32.99,
            category: "Accessories",
            imageUrl: "/images/Ac3.jpg",
            inStock: true,
          },
          {
            id: 7,
            name: "Outfits1",
            price: 38.99,
            category: "Casual Wear",
            imageUrl: "/images/CW1.jpg",
            inStock: true,
          },
          {
            id: 8,
            name: "Outfits2",
            price: 9.99,
            category: "Casual Wear",
            imageUrl: "/images/CW2.jpg",
            inStock: true,
          },
        ];

        let filteredProducts = mockProducts;

        // Filter by search term
        if (searchTerm) {
          filteredProducts = filteredProducts.filter((p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }

        // Filter by category from sidebar OR URL parameter
        // Sidebar filter takes precedence - empty string means "show all products"
        if (filters.category) {
          // If sidebar category is selected (not empty)
          let categoryToFilter = filters.category;
          // If it's a number (from URL mapping), convert to category name
          if (filters.category === "1") {
            categoryToFilter = "Skincare";
          } else if (filters.category === "2") {
            categoryToFilter = "Accessories";
          } else if (filters.category === "3") {
            categoryToFilter = "Casual Wear";
          }
          filteredProducts = filteredProducts.filter(
            (p) => p.category === categoryToFilter,
          );
        } else if (categoryParam) {
          // If no sidebar filter but URL has category parameter
          let categoryToFilter = categoryParam;
          if (categoryParam === "1") {
            categoryToFilter = "Skincare";
          } else if (categoryParam === "2") {
            categoryToFilter = "Accessories";
          } else if (categoryParam === "3") {
            categoryToFilter = "Casual Wear";
          }
          filteredProducts = filteredProducts.filter(
            (p) => p.category === categoryToFilter,
          );
        }
        // If both filters.category is "" and no categoryParam, show all products

        // Filter by price range
        filteredProducts = filteredProducts.filter(
          (p) =>
            p.price >= filters.priceRange[0] &&
            p.price <= filters.priceRange[1],
        );

        // Filter by in stock
        if (filters.inStock) {
          filteredProducts = filteredProducts.filter((p) => p.inStock);
        }

        // Sort
        if (filters.sortBy === "price-low") {
          filteredProducts.sort((a, b) => a.price - b.price);
        } else if (filters.sortBy === "price-high") {
          filteredProducts.sort((a, b) => b.price - a.price);
        } else if (filters.sortBy === "newest") {
          filteredProducts.sort((a, b) => b.id - a.id);
        }

        setProducts(filteredProducts);
        setError(null);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const mockCategories = [
          { id: 1, name: "Skincare" },
          { id: 2, name: "Accessories" },
          { id: 3, name: "Casual Wear" },
        ];
        setCategories(mockCategories);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchProducts();
    fetchCategories();
  }, [searchTerm, categoryParam, filters]);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="product-listing-page">
      <div className="page-header">
        <h1>
          {searchTerm ? `Search Results for "${searchTerm}"` : "All Products"}
        </h1>
        <p className="product-count">{products.length} products found</p>
      </div>

      <div className="products-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <FilterSidebar categories={categories} onFilter={handleFilter} />
        </aside>

        {/* Products Grid */}
        <main className="products-main">
          {loading && <div className="loading">Loading products...</div>}
          {error && <div className="error-message">{error}</div>}
          {!loading && !error && products.length === 0 && (
            <div className="no-products">
              <p>No products found. Try adjusting your filters.</p>
            </div>
          )}
          {!loading && !error && products.length > 0 && (
            <div className="products-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;
