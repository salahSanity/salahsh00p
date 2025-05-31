"use client";

import type React from "react";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Product {
  id: string;
  name: string;
  image?: string;
  imageUrl?: string | null;
  price: number;
  isFree: boolean;
  link?: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBuy = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setUsername("");
    setLoading(false);
  };

  const handleSubmit = async () => {
    if (!username) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      if (selectedProduct?.link) {
        window.open(selectedProduct.link, "_blank");
      }
      setIsModalOpen(false);
      setUsername("");
      setLoading(false);
    }, 100);
  };

  return (
    <>
      <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-4'>
        {products.map((product) => (
          <div
            key={product.id}
            className='flex flex-col items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors'
          >
            <div className='w-full aspect-square rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-yellow-400 mb-2 overflow-hidden flex items-center justify-center max-w-[100px] mx-auto'>
              {product.imageUrl ? (
                <img
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  className='object-cover w-full h-full'
                />
              ) : (
                <span className='text-white/50 text-xs'>No Image</span>
              )}
            </div>
            <div className='text-center mb-1 text-sm font-medium line-clamp-1 w-full'>
              {product.name}
            </div>
            <div className='flex items-center mb-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-4 h-4 mr-1 flex-shrink-0'
              >
                <circle cx='12' cy='12' r='10' />
                <polyline points='12 6 12 12 16 14' />
              </svg>
              <span className='text-xs'>
                {product.isFree ? "Free" : product.price + " DH"}
              </span>
            </div>
            <Button
              variant='outline'
              size='sm'
              className='w-full text-xs h-8'
              onClick={() => handleBuy(product)}
            >
              Buy
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className='sm:max-w-md max-w-[95vw] p-4 sm:p-6'>
          <DialogHeader>
            <DialogTitle className='text-center'>
              {loading
                ? "Processing your request..."
                : `Get ${selectedProduct?.name}`}
            </DialogTitle>
          </DialogHeader>
          <div className='flex flex-col items-center py-2 sm:py-4'>
            <div className='w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-yellow-400 mb-4 overflow-hidden flex items-center justify-center'>
              {selectedProduct?.imageUrl ? (
                <img
                  src={selectedProduct.imageUrl || "/placeholder.svg"}
                  alt={selectedProduct?.name}
                  className='object-cover w-full h-full'
                />
              ) : (
                <span className='text-white/50 text-xs'>No Image</span>
              )}
            </div>
            {!loading ? (
              <>
                <DialogDescription className='text-center mb-4'>
                  Would you like to Get "{selectedProduct?.name}" For Free?
                </DialogDescription>
                <div className='grid w-full gap-4 mb-4'>
                  <div className='grid gap-2'>
                    <Label htmlFor='username'>Username</Label>
                    <Input
                      id='username'
                      placeholder='Enter your username'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className='h-10'
                    />
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row w-full gap-4'>
                  <Button
                    variant='outline'
                    className='w-full'
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <div className='w-full flex items-center gap-2 border rounded-md px-4 py-2'>
                    <RadioGroup
                      value={selectedProduct?.isFree ? "free" : "paid"}
                      className='flex items-center'
                    >
                      <RadioGroupItem value='free' id='free' />
                      <Label htmlFor='free'>Free</Label>
                    </RadioGroup>
                  </div>
                </div>
                <Button className='w-full mt-4' onClick={handleSubmit}>
                  Submit
                </Button>
              </>
            ) : (
              <div className='w-full flex flex-col items-center justify-center py-6'>
                <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-pink-500 mb-4'></div>
                <span className='text-pink-500 font-semibold'>
                  Processing...
                </span>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductGrid;
