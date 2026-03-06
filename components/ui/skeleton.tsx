import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "card" | "avatar" | "button" | "default"
}

export function Skeleton({
  className,
  variant = "default",
  ...props
}: SkeletonProps) {
  const variantClasses = {
    default: "rounded-md",
    text: "rounded h-4 w-full",
    card: "rounded-lg h-48 w-full",
    avatar: "rounded-full h-12 w-12",
    button: "rounded-md h-10 w-24"
  }

  return (
    <div
      className={cn(
        "bg-gray-200 motion-safe:animate-skeleton",
        variantClasses[variant],
        className
      )}
      role="status"
      aria-label="Loading..."
      {...props}
    />
  )
}

// Compound components for common patterns
export function SkeletonText({
  lines = 3,
  className
}: {
  lines?: number
  className?: string
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={i === lines - 1 ? "w-4/5" : undefined}
        />
      ))}
    </div>
  )
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4", className)}>
      <Skeleton variant="card" />
      <div className="space-y-2">
        <Skeleton variant="text" className="w-3/4" />
        <Skeleton variant="text" className="w-1/2" />
      </div>
    </div>
  )
}

export function SkeletonAvatar({
  withText = false,
  className
}: {
  withText?: boolean
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Skeleton variant="avatar" />
      {withText && (
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" className="w-32" />
          <Skeleton variant="text" className="w-24 h-3" />
        </div>
      )}
    </div>
  )
}
