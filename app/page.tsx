import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductGrid from "@/components/product-grid";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductHero from "@/components/product-hero";
import client, { imageUrl } from "@/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type HeroData = {
  title: string;
  subtitle?: string;
  badgeText?: string;
  badgeColor?: string;
  author?: string;
  maturity?: string;
  buttonText?: string;
  buttonIcon?: string;
  images?: any[];
};

type Product = {
  _id: string;
  id: string;
  name: string;
  isFree: boolean;
  price: number;
  image?: any;
};

async function getHero(): Promise<HeroData> {
  const data = await client.fetch(
    `*[_type == "hero"][0]{
      title,
      subtitle,
      badgeText,
      badgeColor,
      author,
      maturity,
      buttonText,
      buttonIcon,
      images
    }`
  );
  return data;
}

async function getProducts(): Promise<Product[]> {
  const data = await client.fetch(`*[_type == "product"]{
    _id,
    name,
    isFree,
    price,
    image,
    "id": _id
  }`);
  return data;
}

export default async function Home() {
  const hero = await getHero();
  const products = await getProducts();

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 container mx-auto px-4 py-6'>
        <div className='grid md:grid-cols-2 gap-6 mb-8'>
          <div className='aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden relative'>
            {/* Main product image carousel */}
            {hero?.images && hero.images.length > 0 ? (
              <Carousel>
                <CarouselContent>
                  {hero.images.map((img, idx) => (
                    <CarouselItem key={img._key || idx}>
                      <img
                        src={imageUrl(img)}
                        alt={hero.title}
                        className='object-cover w-full h-full object-center'
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className='absolute left-2 top-1/2 -translate-y-1/2 z-10' />
                <CarouselNext className='absolute right-2 top-1/2 -translate-y-1/2 z-10' />
              </Carousel>
            ) : (
              <div className='w-full h-full bg-gradient-to-br from-purple-900 to-pink-600 flex items-center justify-center'>
                <span className='text-white/50 text-sm'>Product Image</span>
              </div>
            )}
          </div>
          <div className='flex flex-col justify-between'>
            <ProductHero hero={hero} />
            <div className='flex items-center justify-between mt-4'>
              <div className='flex space-x-4'>
                <button className='flex flex-col items-center'>
                  <div className='w-6 h-6 flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='w-5 h-5'
                    >
                      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
                    </svg>
                  </div>
                  <span className='text-xs mt-1'>Favorite</span>
                </button>
                <button className='flex flex-col items-center'>
                  <div className='w-6 h-6 flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='w-5 h-5'
                    >
                      <path d='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3' />
                    </svg>
                  </div>
                  <span className='text-xs mt-1'>20K+</span>
                </button>
                <button className='flex flex-col items-center'>
                  <div className='w-6 h-6 flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='w-5 h-5'
                    >
                      <path d='M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17' />
                    </svg>
                  </div>
                  <span className='text-xs mt-1'>20K+</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue='store' className='mb-8'>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='about'>About</TabsTrigger>
            <TabsTrigger value='store'>Store</TabsTrigger>
            <TabsTrigger value='servers'>Servers</TabsTrigger>
          </TabsList>
          <TabsContent value='about'>
            <div className='p-4 text-center text-muted-foreground'>
              About content goes here
            </div>
          </TabsContent>
          <TabsContent value='store'>
            <div className='py-4'>
              <h2 className='text-xl font-semibold mb-4'>Passes</h2>
              <ProductGrid products={products} />
            </div>
          </TabsContent>
          <TabsContent value='servers'>
            <div className='p-4 text-center text-muted-foreground'>
              Servers content goes here
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
