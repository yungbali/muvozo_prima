import Link from 'next/link'
import { Button } from '@/ui/button'

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to ArtistWallet</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {['royalties', 'wallet', 'pitches', 'networking', 'education', 'analytics', 'legal'].map((page) => (
          <Link href={`/${page}`} key={page}>
            <Button className="w-full capitalize">{page}</Button>
          </Link>
        ))}
      </div>
    </div>
  )
}