import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = `New Contact Form Submission from ${formData.name}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:admin@adaptapp.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Get in touch with us to learn more about ADAPT Learning and how we can help transform education in your school.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400">
                <strong>Email:</strong>{' '}
                <a href="mailto:admin@adaptapp.io" className="text-primary hover:underline">
                  admin@adaptapp.io
                </a>
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <strong>Phone:</strong> coming soon...
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <strong>Address:</strong><br />
                ADAPT Learning<br />
                Lusaka, Zambia
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  placeholder="Your message"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 