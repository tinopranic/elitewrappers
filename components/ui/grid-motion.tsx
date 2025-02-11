import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useInstagramFeed } from "./instagram-feed"

interface GridMotionProps {
  /**
   * Array of items to display in the grid
   */
  items?: (string | ReactNode)[]
  /**
   * Color for the radial gradient background
   */
  gradientColor?: string
  /**
   * Additional CSS classes
   */
  className?: string
  instagramAccessToken?: string
}

export function GridMotion({ 
  items = [], 
  gradientColor = "black", 
  className,
  instagramAccessToken 
}: GridMotionProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const mouseXRef = useRef(0)

  const totalItems = 28
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`)
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems

  // Get Instagram posts for the middle row
  const { posts: instagramPosts, loading: instagramLoading } = useInstagramFeed({
    accessToken: instagramAccessToken || '',
    limit: 7 // Maximum items per row on desktop
  })

  // Calculate items per row based on screen size
  const getItemsPerRow = (rowIndex: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 3 // Always show 3 items per row on mobile
    }
    return rowIndex === 3 ? 3 : 7 // Desktop layout remains unchanged
  }

  // Function to get items for a specific row
  const getRowItems = (rowIndex: number, itemsPerRow: number) => {
    // For the middle row (index 1), use recent gallery images starting from second tile
    if (rowIndex === 1) {
      const recentImages = combinedItems.slice(0, itemsPerRow - 1); // Get recent images
      const firstTile = combinedItems[itemsPerRow * 2]; // Get a tile from later in the sequence
      return [firstTile, ...recentImages];
    }

    // For other rows, use the remaining items
    const startIndex = rowIndex === 0 ? itemsPerRow : (rowIndex * itemsPerRow);
    const endIndex = startIndex + itemsPerRow;
    return combinedItems.slice(startIndex, endIndex);
  }

  useEffect(() => {
    mouseXRef.current = window.innerWidth / 2
    
    gsap.ticker.lagSmoothing(0)

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX
    }

    const updateMotion = () => {
      const maxMoveAmount = 300
      const baseDuration = 0.8
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1
          const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          })
        }
      })
    }

    const removeAnimationLoop = gsap.ticker.add(updateMotion)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      removeAnimationLoop()
    }
  }, [])

  return (
    <div className={cn("h-full w-full overflow-hidden relative", className)} ref={gridRef}>
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 h-24 w-full bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-black via-black to-transparent"></div>
      </div>
      <section
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="relative z-2 flex-none grid h-[150vh] w-[200vw] md:w-[150vw] gap-2 md:gap-4 grid-rows-[repeat(4,1fr)] grid-cols-[100%] -rotate-15 origin-center">
          {[...Array(4)].map((_, rowIndex) => {
            const itemsPerRow = getItemsPerRow(rowIndex);
            const rowItems = getRowItems(rowIndex, itemsPerRow);
            
            return (
              <div
                key={rowIndex}
                className="grid gap-2 md:gap-4 grid-cols-[repeat(3,minmax(0,1fr))] md:grid-cols-[repeat(7,minmax(0,1fr))] will-change-transform will-change-filter"
                ref={(el: HTMLDivElement | null) => {
                  if (rowRefs.current) {
                    rowRefs.current[rowIndex] = el
                  }
                }}
              >
                {rowItems.map((content, itemIndex) => {
                  const isInstagramRow = rowIndex === 1 && instagramAccessToken && !instagramLoading;
                  const href = isInstagramRow && instagramPosts[itemIndex]
                    ? instagramPosts[itemIndex].permalink
                    : "/gallery";

                  return (
                    <div key={itemIndex} className="relative">
                      <Link href={href} className="block h-full" target={isInstagramRow ? "_blank" : undefined}>
                        <div className="relative h-full w-full overflow-hidden rounded-lg bg-muted flex items-center justify-center text-foreground text-xl group aspect-video">
                          {typeof content === "string" && content.startsWith("http") ? (
                            <div
                              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                              style={{
                                backgroundImage: `url(${content})`,
                              }}
                              onError={(e) => {
                                const target = e.target as HTMLDivElement;
                                target.style.backgroundColor = '#1f1f1f';
                                target.style.backgroundImage = 'none';
                                target.innerHTML = '<div class="text-gray-400">Image unavailable</div>';
                              }}
                            />
                          ) : (
                            <div className="p-4 text-center z-1">{content}</div>
                          )}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-sm">
                              {isInstagramRow ? "View on Instagram" : "View Gallery"}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="relative pointer-events-none h-full w-full inset-0">
          <div className="rounded-none" />
        </div>
      </section>
    </div>
  )
}

