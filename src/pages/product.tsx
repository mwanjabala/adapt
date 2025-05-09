import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Platform</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            A comprehensive learning platform designed specifically for Zambian education.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">For Students</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-500 dark:text-gray-400">
                  Personalized learning paths that adapt to your pace and style
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-500 dark:text-gray-400">
                  Interactive exercises and real-time feedback
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-500 dark:text-gray-400">
                  Progress tracking and achievement badges
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-500 dark:text-gray-400">
                  Engaging multimedia content and interactive lessons
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">For Teachers</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-500 dark:text-gray-400">
                  Comprehensive student progress monitoring
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-500 dark:text-gray-400">
                  Customizable lesson plans and assignments
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-500 dark:text-gray-400">
                  Targeted feedback and personalized support
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-500 dark:text-gray-400">
                  Detailed analytics and performance insights
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span className="text-gray-500 dark:text-gray-400">
                  Resource library and teaching materials
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400">
            Join us in revolutionizing education in Zambia. Contact us to learn more about implementing ADAPT in your school.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 