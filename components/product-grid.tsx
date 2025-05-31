"use client";

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
import { createOrder } from "@/lib/actions";
import { imageUrl } from "@/client";
import { toast } from "react-toastify";

type Product = {
  _id: string;
  id: string;
  name: string;
  isFree: boolean;
  price: number;
  image?: any;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState("");
  const [quantity, setQuantity] = useState("1");

  const handleBuy = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    if (!contactInfo) {
      toast.error("Please enter your email or phone number");
      return;
    }

    try {
      await createOrder({
        productId: selectedProduct!.id,
        productName: selectedProduct!.name,
        contactInfo,
        quantity: Number.parseInt(quantity),
        status: "pending",
      });

      toast.success(
        `Order placed! You ordered ${quantity} ${selectedProduct!.name}`
      );

      setIsModalOpen(false);
      setContactInfo("");
      setQuantity("1");
    } catch (error) {
      toast.error("Failed to place order");
    }
  };

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
        {products.map((product) => (
          <div key={product.id} className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-yellow-400 mb-2 overflow-hidden flex items-center justify-center'>
              {product.image ? (
                <img
                  src={imageUrl(product.image)}
                  alt={product.name}
                  className='object-cover w-full h-full'
                />
              ) : (
                <span className='text-white/50 text-xs'>No Image</span>
              )}
            </div>
            <div className='text-center mb-1 text-sm font-medium'>
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
                className='w-4 h-4 mr-1'
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
              className='w-full'
              onClick={() => handleBuy(product)}
            >
              Buy
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle className='text-center'>Get item</DialogTitle>
          </DialogHeader>
          <div className='flex flex-col items-center py-4'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-yellow-400 mb-4 overflow-hidden flex items-center justify-center'>
              {selectedProduct?.image ? (
                <img
                  src={imageUrl(selectedProduct.image)}
                  alt={selectedProduct?.name}
                  className='object-cover w-full h-full'
                />
              ) : (
                <span className='text-white/50 text-xs'>No Image</span>
              )}
            </div>
            <DialogDescription className='text-center mb-4'>
              Would you like to Get "{selectedProduct?.name}" for free?
            </DialogDescription>
            <div className='grid w-full gap-4 mb-4'>
              <div className='grid gap-2'>
                <Label htmlFor='contact'>Email or Phone Number</Label>
                <Input
                  id='contact'
                  placeholder='Enter email or phone'
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                />
              </div>

            </div>
            <div className='flex w-full gap-4'>
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
                  {/* Optionally, add a paid option if you want to show both */}
                  {/* <RadioGroupItem value='paid' id='paid' />
                  <Label htmlFor='paid'>Paid</Label> */}
                </RadioGroup>
              </div>
            </div>
            <Button className='w-full mt-4' onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

{/*               <div className='grid gap-2'>
                <Label htmlFor='quantity'>How many pieces?</Label>
                <Input
                  id='quantity'
                  type='number'
                  min='1'
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div> */}
