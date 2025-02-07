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
      <div className={cn("grid w-full auto-rows-[16rem] grid-cols-3 gap-4", className)}>{children}</div>
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
      specialOffer &&
        "before:absolute before:inset-0 before:rounded-xl before:p-[2px] before:bg-gradient-to-r before:from-teal-500 before:via-pink-500 before:to-teal-500 before:animate-shine-border",
      className,
    )}
  >
    {specialOffer && <div className="absolute inset-[2px] bg-transparent rounded-xl z-0" />}
    <div className="relative z-1 flex flex-col justify-between h-full">
      <div className="absolute inset-0 z-0">{background}</div>
      
      {/* Content container with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-5" />
      
      {/* Content positioned at bottom with hover animation */}
      <div className="mt-auto relative z-10">
        <div className="p-6 flex flex-col gap-1 transform-gpu transition-all duration-300 group-hover:-translate-y-10">
          <Icon
            className="h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75 text-white"
          />
          <h3 className="text-xl font-semibold text-white text-left">{name}</h3>
          <p className="max-w-lg text-white/80 text-left">{description}</p>
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
          className="pointer-events-auto text-white hover:text-white"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10 z-5" />
    </div>
  </div>
)

const ShimmerStyle = () => (
  <style jsx global>{`
    ${shimmerAnimation}
    .animate-shine-border {
      animation: shine-border 3s linear infinite;
      background-size: 200% 200%;
    }
  `}</style>
)

const shimmerAnimation = `
  @keyframes shine-border {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export { BentoCard, BentoGrid }

