import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PawPrint } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <PawPrint className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">PawConnect</h1>
          </Link>
          <nav>
            <Link href="/" className="text-lg hover:text-primary transition duration-300 mr-4">Home</Link>
            <Link href="/about" className="text-lg hover:text-primary transition duration-300">About Us</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-primary">About PawConnect</h1>
        <div className="prose prose-lg max-w-none">
          <Image
            src="/images/about-us.jpg"
            alt="Dogs playing together"
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-lg mb-6"
          />
          <p className="text-foreground">
            Welcome to PawConnect, your go-to destination for all things dog-related! We are passionate about creating a community where dog lovers can come together to share experiences, learn from each other, and celebrate the joy that our furry friends bring to our lives.
          </p>
          <p className="text-foreground">
            Founded in 2023, PawConnect was born out of a simple idea: to create a space where dog owners, trainers, and enthusiasts could connect, share knowledge, and support each other in providing the best possible care for our canine companions.
          </p>
          <p className="text-foreground">
            Our team consists of dedicated dog lovers, experienced trainers, and veterinary professionals who are committed to bringing you the most up-to-date, reliable, and engaging content about dogs. From training tips and health advice to heartwarming stories and product reviews, we strive to be your trusted source for all your dog-related needs.
          </p>
          <p className="text-foreground">
            At PawConnect, we believe that every dog deserves love, care, and understanding. Our mission is to empower dog owners with the knowledge and resources they need to build strong, healthy relationships with their pets. We're here to support you through every stage of your journey with your furry friend, from those first puppy days to the golden senior years.
          </p>
          <p className="text-foreground">
            Thank you for being a part of our community. Together, let's make the world a better place for dogs and the humans who love them!
          </p>
        </div>
        <div className="mt-8">
          <Link href="/">
            <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-12">
        <div className="container mx-auto px-4 py-8">
          <p className="text-sm text-center">&copy; 2023 PawConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}