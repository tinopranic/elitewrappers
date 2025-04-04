import type { ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <>
      <ShimmerStyle />
      <div className={cn(
        "grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 auto-rows-[16rem] sm:auto-rows-[20rem] md:auto-rows-[16rem]",
        className
      )}>
        {children}
      </div>
    </>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  specialOffer = false,
}: {
  name: string
  className: string
  background: ReactNode
  Icon: any
  description: string
  href: string
  cta: string
  specialOffer?: boolean
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",
      "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      specialOffer && "animate-card-pulse shadow-[0_0_15px_rgba(20,184,166,0.3)]",
      "w-full",
      className,
    )}
    role="article"
    aria-labelledby={`card-heading-${name.toLowerCase().replace(/\s+/g, '-')}`}
  >
    <div className="relative z-10 flex flex-col justify-between h-full">
      <div className="absolute inset-0 z-0">{background}</div>
      
      {/* Content container with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-5" />
      
      {/* Content positioned at bottom with hover animation */}
      <div className="mt-auto relative z-10">
        <div className="p-4 sm:p-6 flex flex-col gap-1 transform-gpu transition-all duration-300 group-hover:-translate-y-10">
          <Icon
            className={cn(
              "h-8 w-8 sm:h-12 sm:w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75 text-white",
              specialOffer && "text-teal-400"
            )}
            aria-hidden="true"
          />
          <h2 
            id={`card-heading-${name.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-lg sm:text-xl font-semibold text-white text-left"
          >
            {name}
          </h2>
          <p className="text-sm sm:text-base text-white/80 text-left line-clamp-2 sm:line-clamp-none">{description}</p>
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-start p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-10",
        )}
      >
        <Button 
          variant="ghost" 
          asChild 
          size="sm" 
          className={cn(
            "pointer-events-auto text-white",
            specialOffer ? "hover:text-teal-400" : "hover:text-pink-500"
          )}
        >
          <a 
            href={href}
            aria-label={`${cta} - ${name}`}
          >
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10 z-5" />
    </div>
  </div>
)

const ShimmerStyle = () => (
  <style jsx global>{`
    @keyframes card-pulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 15px rgba(20, 184, 166, 0.3);
      }
      50% {
        transform: scale(1.02);
        box-shadow: 0 0 25px rgba(20, 184, 166, 0.5);
      }
    }
    .animate-card-pulse {
      animation: card-pulse 3s ease-in-out infinite;
    }
  `}</style>
)

export { BentoCard, BentoGrid }

