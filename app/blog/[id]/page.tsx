import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PawPrint } from 'lucide-react'

// Mock data for blog posts (this should ideally come from a database or API)
const allBlogs = [
  { id: 1, title: "The Joy of Puppy Training", image: "https://source.unsplash.com/800x400/?puppy&sig=1", content: "Puppies are adorable bundles of joy, but they require proper training to grow into well-behaved adult dogs. In this blog post, we'll explore effective puppy training techniques that will help you build a strong bond with your furry friend while teaching them essential skills. From house training to basic commands, we'll cover everything you need to know to raise a happy and obedient puppy." },
  { id: 2, title: "Best Dog-Friendly Hiking Trails", image: "https://source.unsplash.com/800x400/?dog,hiking&sig=2", content: "Hiking with your dog can be an incredibly rewarding experience for both you and your furry companion. In this post, we'll explore some of the best dog-friendly hiking trails across the country. From easy walks to challenging treks, we'll provide tips on how to prepare for your hike, what to pack, and how to ensure your dog stays safe and comfortable on the trail. Get ready to embark on some unforgettable outdoor adventures with your four-legged friend!" },
  { id: 3, title: "Nutritious Homemade Dog Treats", image: "https://source.unsplash.com/800x400/?dog,treat&sig=3", content: "Treating your dog doesn't have to mean unhealthy snacks. In this blog post, we'll share some delicious and nutritious homemade dog treat recipes that your pup will love. From peanut butter biscuits to frozen yogurt pops, these treats are not only tasty but also packed with beneficial ingredients. We'll discuss the nutritional benefits of each recipe and provide step-by-step instructions so you can easily make these treats at home. Your dog will thank you for these healthy and delicious snacks!" },
  { id: 4, title: "Understanding Dog Body Language", image: "https://source.unsplash.com/800x400/?dog,behavior&sig=4", content: "Dogs communicate primarily through body language, and understanding these signals is crucial for every dog owner. In this comprehensive guide, we'll decode various dog postures, facial expressions, and behaviors. From tail wagging to ear positioning, learn how to interpret what your dog is trying to tell you. This knowledge will help you respond appropriately to your dog's needs, avoid potential conflicts, and strengthen your bond with your furry friend." },
  { id: 5, title: "Grooming Tips for Long-Haired Breeds", image: "https://source.unsplash.com/800x400/?dog,grooming&sig=5", content: "Long-haired dog breeds are beautiful, but they require special care to keep their coats healthy and tangle-free. In this blog post, we'll share expert grooming tips specifically for long-haired dogs. Learn about the best brushing techniques, how often to bathe your dog, and which tools are essential for maintaining a lustrous coat. We'll also discuss common issues like matting and shedding, and provide solutions to keep your long-haired pup looking and feeling their best." },
  { id: 6, title: "Adopting a Senior Dog: What to Expect", image: "https://source.unsplash.com/800x400/?senior,dog&sig=6", content: "Adopting a senior dog can be an incredibly rewarding experience. These older pups often have a lot of love to give and can make wonderful companions. In this post, we'll discuss what to expect when adopting a senior dog, from potential health considerations to the joys of providing a loving home to an older pet. We'll cover topics such as adapting your home for a senior dog, understanding their unique needs, and the special bond that can form when you open your heart to an older furry friend." },
  { id: 7, title: "Dog-Friendly Vacation Spots", image: "https://source.unsplash.com/800x400/?dog,vacation&sig=7", content: "Planning a vacation doesn't mean you have to leave your furry friend behind. In this blog post, we'll explore some of the best dog-friendly vacation spots across the country. From beach resorts to mountain retreats, we'll highlight accommodations, activities, and attractions that welcome both you and your canine companion. Learn about pet-friendly hotels, off-leash parks, and even restaurants where your dog can join you. Start planning your next adventure with your four-legged travel buddy!" },
  { id: 8, title: "Teaching Your Dog New Tricks", image: "https://source.unsplash.com/800x400/?dog,tricks&sig=8", content: "They say you can't teach an old dog new tricks, but we beg to differ! In this blog post, we'll show you how to teach your dog, regardless of age, some impressive new tricks. From classic commands like 'roll over' to more advanced tricks like 'fetch me a drink', we'll provide step-by-step instructions and training tips. Not only is teaching tricks a great way to bond with your dog, but it also provides mental stimulation and can help reinforce obedience. Get ready to impress your friends and family with your dog's new skills!" },
  { id: 9, title: "Choosing the Right Dog Food", image: "https://source.unsplash.com/800x400/?dog,food&sig=9", content: "With so many dog food options available, choosing the right one for your furry friend can be overwhelming. In this comprehensive guide, we'll break down the different types of dog food, from kibble to raw diets, and discuss the pros and cons of each. Learn how to read dog food labels, understand nutritional requirements for different life stages, and identify high-quality ingredients. We'll also touch on special dietary needs for dogs with allergies or health conditions. By the end of this post, you'll be equipped to make informed decisions about your dog's nutrition." },
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const blogId = Number(params.id)
  const blog = allBlogs.find(b => b.id === blogId)

  if (!blog) {
    return <div>Blog post not found</div>
  }

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
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary">{blog.title}</h1>
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-lg mb-6"
          />
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground">{blog.content}</p>
          </div>
          <div className="mt-8">
            <Link href="/">
              <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                Back to Home
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-12">
        <div className="container mx-auto px-4 py-8">
          <p className="text-sm text-center">&copy; 2023 PawConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}