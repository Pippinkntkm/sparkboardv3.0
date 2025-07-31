import { Home, User, Briefcase, FileText, Sparkles, Rocket, Target, Users } from 'lucide-react'
import { NavBar } from './components/ui/tubelight-navbar'
import './App.css'

function App() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Founders', url: '#', icon: User },
    { name: 'ROO-AI', url: '#', icon: FileText }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen p-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Boomerang
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            This is your super basic homepage with the new tubelight navbar! 
            We're building something amazing here.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries and creating cutting-edge solutions.</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Focus</h3>
              <p className="text-gray-600">Clear vision and strategic execution for success.</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Building strong partnerships and collaborative networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            About Boomerang
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We're a forward-thinking team dedicated to creating innovative solutions 
            that make a real impact. Our mission is to build technology that not only 
            solves problems but also inspires and empowers people.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">To be the leading force in technological innovation and positive change.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">Creating solutions that empower individuals and transform industries.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tubelight Navbar */}
      <NavBar items={navItems} />
    </div>
  )
}

export default App
