import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

export default function AparnaGarments() {
  const kidsProducts = [
    {
      id: 1,
      name: "Kids Summer Dress",
      description: "Lightweight and breathable fabric, perfect for summer.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWevx8YcwSZkAO3X8Gu-RDjfbquFGg_TFdw&s",
    },
    {
      id: 2,
      name: "Boys T-Shirt & Shorts Set",
      description: "Comfortable cotton set for active kids.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkZRYTy5VlIU0LzyRa2yxVjBnqEn6U4b6Mw&s",
    },
    {
      id: 3,
      name: "Girls Party Frock",
      description: "Elegant design with soft fabric for special occasions.",
      image: "https://www.cutedoll.in/cdn/shop/files/3188A.jpg?v=1715855447",
    },
    {
      id: 4,
      name: "Unisex Hoodie",
      description: "Warm and cozy, ideal for cooler days.",
      image: "https://m.media-amazon.com/images/I/7134rYDRU0L._AC_UY1100_.jpg",
    },
    {
      id: 5,
      name: "Toddler Romper",
      description: "Soft cotton romper perfect for playtime.",
      image: "https://m.media-amazon.com/images/I/719JOVdL+9L._AC_UY1100_.jpg",
    },
    {
      id: 6,
      name: "Kids Winter Jacket",
      description: "Stylish jacket to keep kids warm during winter.",
      image: "https://m.media-amazon.com/images/I/61ZloML6dSL._AC_UY1000_.jpg",
    },
    {
      id: 7,
      name: "Girls Ethnic Wear",
      description: "Traditional outfit for festive occasions.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/415420846/QU/AF/FT/1127821/girls-ethnic-wear.jpg",
    },
    {
      id: 8,
      name: "Boys Denim Jacket",
      description: "Trendy and durable denim for stylish kids.",
      image: "https://5.imimg.com/data5/KO/RC/FI/SELLER-4225749/kids-party-wear-500x500.jpg",
    },
    {
      id: 9,
      name: "Printed Pajama Set",
      description: "Soft and cute nightwear set for kids.",
      image: "https://m.media-amazon.com/images/I/71cea0xMDTL._AC_UY350_.jpg",
    },
    {
      id: 10,
      name: "Boys Casual Shirt",
      description: "Stylish and breathable for everyday wear.",
      image: "https://5.imimg.com/data5/FY/UJ/MY-33912177/1.jpg",
    },
    {
      id: 11,
      name: "Girls Skirt & Top Combo",
      description: "Trendy and playful combo set.",
      image: "https://m.media-amazon.com/images/I/51Xe+k5OdKL._AC_UY1100_.jpg",
    },
    {
      id: 12,
      name: "Infant Swaddle Set",
      description: "Cozy swaddle wraps for newborns.",
      image: "https://babyroad.com.au/wp-content/uploads/2022/09/Snuggle-Hunny-Kids-Baby-Swaddle-Topknot-Set-Camille.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 text-gray-900">
      {/* Header */}
      <header className="bg-pink-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="https://cdn-icons-png.flaticon.com/512/892/892458.png" alt="Logo" className="h-10 w-10" />
            <h1 className="text-3xl font-bold">Aparna Garments</h1>
          </div>
          <Button variant="outline" className="text-white border-white hover:bg-pink-500">
            <ShoppingBag className="mr-2" /> Shop Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-200 to-pink-300 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-pink-800">Style Meets Comfort</h2>
          <p className="text-lg mb-6 text-gray-800">Discover our latest collection of premium apparel designed for every occasion.</p>
          <Button className="px-8 py-4 text-lg bg-pink-600 hover:bg-pink-700 text-white">Browse Collection</Button>
        </div>
      </section>

      {/* Offer Banner */}
      <section className="bg-yellow-500 text-white text-center py-4">
        <h3 className="text-xl font-semibold">🎉 Limited Time Offer: Get 30% OFF on All Kidswear! 🎉</h3>
      </section>

      {/* Shop For Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Shop for</h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {[{ label: "All", image: "https://i.imgur.com/u0RZbZJ.png" }, { label: "Baby", image: "https://i.imgur.com/pz1xLkW.png" }, { label: "Girl", image: "https://i.imgur.com/bJ9oD5k.png" }, { label: "Boy", image: "https://i.imgur.com/bck0lXY.png" }].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className={`h-20 w-20 rounded-full border-4 ${item.label === 'All' ? 'border-pink-500' : 'border-transparent'} overflow-hidden`}>
                  <img src={item.image} alt={item.label} className="h-full w-full object-cover" />
                </div>
                <span className={`mt-2 font-medium ${item.label === 'All' ? 'text-pink-600' : 'text-gray-700'}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-10 text-pink-700">Kids' Clothing Collection</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {kidsProducts.map((product) => (
              <Card key={product.id} className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg mb-1 text-pink-800">{product.name}</h4>
                  <p className="text-gray-700 text-sm mb-2">{product.description}</p>
                  <p className="text-sm text-pink-600 font-semibold mb-2">🔥 30% OFF</p>
                  <Button className="w-full bg-pink-600 text-white hover:bg-pink-700">Buy Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-800 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Aparna Garments. All rights reserved.</p>
          <p className="mt-2">Proprietor: Vishal Namdev | Contact: 7217323334</p>
        </div>
      </footer>
    </div>
  );
}
