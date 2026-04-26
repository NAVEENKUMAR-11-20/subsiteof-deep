import { useState, useEffect } from 'react';
import { Code, Database, Layers, Zap, Shield, Smartphone, ArrowRight } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen premium-bg text-white selection:bg-blue-500/30">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="DenveX Logo" className="h-10 w-auto" />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://www.denvex.in/" className="text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="https://www.denvex.in/#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                Services
              </a>
              <a href="https://www.denvex.in/#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">
                Testimonials
              </a>
              <a href="https://www.denvex.in/register" className="text-gray-300 hover:text-blue-400 transition-colors">
                Start Project
              </a>
            </div>

            {/* Mobile Menu Button placeholder (optional) */}
            <div className="md:hidden flex items-center space-x-2">
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Web Development
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
              Building fast, responsive, and visually stunning websites for modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-transparent">

        {/* What is Web Development Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                What is Web Development?
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Web development is the comprehensive process of creating websites and web applications that deliver exceptional user experiences.
                It encompasses everything from crafting elegant user interfaces to building robust server infrastructure, ensuring your digital
                presence is both visually compelling and technically superior.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Web Development */}
        <section className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Types of Web Development
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We specialize in all aspects of web development to bring your vision to life
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Frontend Development</h3>
                <p className="text-gray-400 leading-relaxed">
                  Creating beautiful, interactive user interfaces with modern frameworks like React, Vue, and Angular.
                  We focus on responsive design, performance optimization, and seamless user experiences.
                </p>
              </div>

              {/* Backend */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Backend Development</h3>
                <p className="text-gray-400 leading-relaxed">
                  Building robust server-side applications, APIs, and database architectures. We ensure your applications
                  are scalable, secure, and perform exceptionally under any load.
                </p>
              </div>

              {/* Full Stack */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Full Stack Development</h3>
                <p className="text-gray-400 leading-relaxed">
                  Complete end-to-end development solutions combining frontend and backend expertise.
                  We handle every aspect of your project from concept to deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Skills & Tools */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Core Skills & Tools
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We leverage cutting-edge technologies and proven methodologies to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-900/60 hover:border-blue-500/20 transition-all">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">HTML</span>
                </div>
                <h3 className="font-semibold text-white">HTML5</h3>
                <p className="text-sm text-gray-400 mt-2">Semantic markup</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-900/60 hover:border-blue-500/20 transition-all">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">CSS</span>
                </div>
                <h3 className="font-semibold text-white">CSS3</h3>
                <p className="text-sm text-gray-400 mt-2">Modern styling</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-900/60 hover:border-blue-500/20 transition-all">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-400">JS</span>
                </div>
                <h3 className="font-semibold text-white">JavaScript</h3>
                <p className="text-sm text-gray-400 mt-2">Interactive functionality</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-900/60 hover:border-blue-500/20 transition-all">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-semibold text-white">Performance</h3>
                <p className="text-sm text-gray-400 mt-2">Speed optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose DenveX
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We combine technical expertise with creative vision to deliver exceptional web solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-400">Optimized for speed and performance with cutting-edge techniques</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2">Mobile First</h3>
                <p className="text-gray-400">Responsive designs that work perfectly on all devices</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2">Secure & Reliable</h3>
                <p className="text-gray-400">Enterprise-grade security and reliability you can trust</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2">Clean Code</h3>
                <p className="text-gray-400">Maintainable, scalable code following best practices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-blue-100/80 mb-8 leading-relaxed">
                Let's transform your vision into a powerful web presence that drives results and engages your audience.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScRU4LmWumMN8Otz2UdSHuBZsSF2uVDl7vPcb6XB6TmQDjrJw/viewform?usp=header"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;