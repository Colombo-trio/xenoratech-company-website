import { Skeleton } from "@/components/ui/Skeleton";

export function ServicesSkeleton() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <Skeleton className="h-10 w-48 mx-auto mb-4" />
                    <Skeleton className="h-6 w-96 mx-auto" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="glass-card p-8 rounded-2xl">
                            <Skeleton className="h-16 w-16 mb-6 rounded-xl" />
                            <Skeleton className="h-8 w-3/4 mb-4" />
                            <Skeleton className="h-20 w-full mb-6" />
                            <Skeleton className="h-6 w-24" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function PortfolioSkeleton() {
    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <Skeleton className="h-6 w-24 mx-auto mb-2" />
                    <Skeleton className="h-12 w-64 mx-auto" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="glass-card p-4 rounded-3xl">
                            <Skeleton className="h-[280px] w-full rounded-2xl mb-6" />
                            <Skeleton className="h-4 w-24 mb-2" />
                            <Skeleton className="h-8 w-3/4 mb-2" />
                            <Skeleton className="h-12 w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
