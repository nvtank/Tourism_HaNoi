import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome to Hanoi
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the charm of Vietnam's capital city
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Historical Sites</h3>
              <p className="mt-2 text-sm text-gray-600">
                Explore ancient temples, pagodas, and historical landmarks that tell the story of Hanoi's rich past.
              </p>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Local Cuisine</h3>
              <p className="mt-2 text-sm text-gray-600">
                Taste authentic Vietnamese dishes, from street food to fine dining experiences.
              </p>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Cultural Experiences</h3>
              <p className="mt-2 text-sm text-gray-600">
                Immerse yourself in local culture through traditional performances and workshops.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 