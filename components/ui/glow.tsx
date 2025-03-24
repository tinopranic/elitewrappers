import { cn } from "@/lib/utils"

interface GlowProps {
  variant?: "top" | "bottom" | "left" | "right" | "center"
  className?: string
}

const variants = {
  top: "bg-gradient-to-b",
  bottom: "bg-gradient-to-t",
  left: "bg-gradient-to-r",
  right: "bg-gradient-to-l",
  center: "radial-gradient",
}

export function Glow({ variant = "center", className }: GlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0",
        variant === "center"
          ? "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-transparent"
          : cn(variants[variant], "from-primary/20 to-transparent"),
        className
      )}
    />
  )
} 