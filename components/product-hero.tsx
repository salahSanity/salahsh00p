import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type HeroData = {
  title: string;
  subtitle?: string;
  badgeText?: string;
  badgeColor?: string;
  author?: string;
  maturity?: string;
  buttonText?: string;
  buttonIcon?: string;
};

export default function ProductHero({ hero }: { hero: HeroData }) {
  if (!hero) return null;

  return (
    <div>
      <div className='mb-4 h-full flex flex-col gap-4 justify-center'>
        <h1 className='text-2xl font-bold mb-1'>{hero.title}</h1>
        <div className='flex items-center gap-2 mb-1'>
          {/* <Badge
            className={`px-3 py-1 rounded-full font-semibold text-base shadow-sm border-0  ${"bg-pink-500 text-white"}`}
          >
            {hero.badgeText || "🌸"}
          </Badge> */}
          <span className='text-xl font-semibold'>{hero.subtitle}</span>
        </div>
        {hero.author && (
          <div className='text-sm text-muted-foreground mb-1'>
            By {hero.author}
          </div>
        )}
        {hero.maturity && (
          <div className='text-sm text-muted-foreground'>
            Maturity: {hero.maturity}
          </div>
        )}
      </div>
      <Button className='w-full bg-blue-500 hover:bg-blue-600 text-white py-6 mb-4'>
        {hero.buttonIcon ? (
          <span
            dangerouslySetInnerHTML={{ __html: hero.buttonIcon }}
            className='w-6 h-6'
          />
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-6 h-6'
          >
            <polygon points='5 3 19 12 5 21 5 3' />
          </svg>
        )}
        {hero.buttonText && <span className='ml-2'>{hero.buttonText}</span>}
      </Button>
    </div>
  );
}
