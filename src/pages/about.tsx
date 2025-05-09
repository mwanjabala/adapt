export default function About() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About ADAPT Learning</h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            We are dedicated to transforming education in Zambia through innovative technology and personalized learning approaches.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-gray-500 dark:text-gray-400">
            To provide accessible, high-quality education that adapts to each student's unique learning journey, 
            empowering them to reach their full potential and contribute to Zambia's future.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="text-gray-500 dark:text-gray-400">
            A future where every Zambian student has access to personalized education that nurtures their 
            individual strengths and helps them overcome challenges, creating a more educated and prosperous nation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Continuously improving our platform with cutting-edge technology and educational research.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Accessibility</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Making quality education available to all students, regardless of their background or location.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Maintaining the highest standards in educational content and user experience.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Building strong partnerships with schools, teachers, and educational institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 