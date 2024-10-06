'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { PawPrint, Menu, Facebook, Instagram } from "lucide-react"

// Mock data for blog posts
const allBlogs = [
  { id: 1, title: "The Joy of Puppy Training", image: "/images/puppy-training.jpg" },
  { id: 2, title: "Best Dog-Friendly Hiking Trails", image: "/images/dog-hiking.jpg" },
  { id: 3, title: "Nutritious Homemade Dog Treats", image: "/images/dog-treats.jpg" },
  { id: 4, title: "Understanding Dog Body Language", image: "/images/dog-behavior.jpg" },
  { id: 5, title: "Grooming Tips for Long-Haired Breeds", image: "/images/dog-grooming.jpg" },
  { id: 6, title: "Adopting a Senior Dog: What to Expect", image: "/images/senior-dog.jpg" },
  { id: 7, title: "Dog-Friendly Vacation Spots", image: "/images/dog-vacation.jpg" },
  { id: 8, title: "Teaching Your Dog New Tricks", image: "/images/dog-tricks.jpg" },
  { id: 9, title: "Choosing the Right Dog Food", image: "/images/dog-food.jpg" },
]

export default function PawConnect() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visibleBlogs, setVisibleBlogs] = useState([])
  const [initialBlogCount, setInitialBlogCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setInitialBlogCount(3)
      } else if (window.innerWidth >= 768) {
        setInitialBlogCount(2)
      } else {
        setInitialBlogCount(1)
      }
    }

    handleResize()
    setVisibleBlogs(allBlogs.slice(0, initialBlogCount))

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const loadMoreBlogs = () => {
    const currentLength = visibleBlogs.length
    const more = allBlogs.slice(currentLength, currentLength + 3)
    setVisibleBlogs([...visibleBlogs, ...more])
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <PawPrint className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">PawConnect</h1>
          </Link>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[200px] sm:w-[300px] bg-card text-card-foreground">
              <SheetTitle className="text-2xl font-bold text-primary mb-4">Menu</SheetTitle>
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-lg hover:text-primary transition duration-300" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="/about" className="text-lg hover:text-primary transition duration-300" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-primary">Latest Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map((blog) => (
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
                <Link href={`/blog/${blog.id}`}>
                  <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        {visibleBlogs.length < allBlogs.length && (
          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={loadMoreBlogs}
            >
              Load More
            </Button>
          </div>
        )}
      </main>

      <footer className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-bold">FOLLOW US</h3>
            <div className="flex space-x-6">
              <Link href="#" className="text-secondary-foreground hover:text-primary transition duration-300">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-secondary-foreground hover:text-primary transition duration-300">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <Separator className="bg-border" />
            <p className="text-sm">&copy; 2023 PawConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}