import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Breadcrumb skeleton */}
      <Skeleton className="h-4 w-32" />
      
      {/* Title skeleton */}
      <Skeleton className="h-10 w-3/4" />
      
      {/* Description skeleton */}
      <Skeleton className="h-5 w-full max-w-2xl" />
      
      {/* Content skeletons */}
      <div className="flex flex-col gap-4 mt-4">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      
      {/* Code block skeleton */}
      <Skeleton className="h-40 w-full rounded-lg mt-4" />
      
      {/* More content */}
      <div className="flex flex-col gap-4 mt-4">
        <Skeleton className="h-6 w-56" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  )
}
