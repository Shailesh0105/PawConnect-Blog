'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { PawPrint } from "lucide-react"

export default function AllBlogs() {
  // This would typically come from a database or API
  const allBlogs = [
    { id: 1, title: "The Joy of Puppy Training", image: "https://source.unsplash.com/400x200/?puppy&sig=1" },
    { id: 2, title: "Best Dog-Friendly Hiking Trails", image: "https://source.unsplash.com/400x200/?dog,hiking&sig=2" },
    { id: 3, title: "Nutritious Homemade Dog Treats", image: "https://source.unsplash.com/400x200/?dog,treat&sig=3" },
    { id: 4, title: "Understanding Dog Body Language", image: "https://source.unsplash.com/400x200/?dog,behavior&sig=4" },
    { id: 5, title: "Grooming Tips for Long-Haired Breeds", image: "https://source.unsplash.com/400x200/?dog,grooming&sig=5" },
    { id: 6, title: "Adopting a Senior Dog: What to Expect", image: "https://source.unsplash.com/400x200/?senior,dog&sig=6" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <PawPrint className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">PawConnect</h1>
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-primary">All Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allBlogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden bg-card">
              <CardHeader className="p-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2 text-primary">{blog.title}</CardTitle>
                <p className="text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-8">
          <p className="text-sm text-center">&copy; 2023 PawConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}