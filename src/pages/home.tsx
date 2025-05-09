import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Adaptive Learning Platform for Zambian Education
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Empowering students with personalized learning experiences that adapt to their unique needs and pace.
              </p>
            </div>
            <div className="space-x-4">
              <Link to="/product">
                <Button size="lg">Learn More</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Personalized Learning</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Adaptive content that adjusts to each student's learning style and pace.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Real-time Feedback</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Immediate insights and progress tracking for students and teachers.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Comprehensive Curriculum</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Aligned with Zambian educational standards and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 