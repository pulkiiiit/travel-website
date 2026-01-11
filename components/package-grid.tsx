import type { TravelPackage } from "@/lib/mock-data"
import { PackageCard } from "./package-card"

interface PackageGridProps {
  packages: TravelPackage[]
}

export function PackageGrid({ packages }: PackageGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} package={pkg} />
      ))}
    </div>
  )
}
