import React from 'react';
import { GraduationCap, ShoppingCart, Briefcase, Mail, Phone, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-slate-900 tracking-tighter">ThoughtsTo<span className="text-blue-700">Web</span></div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-600 hover:text-blue-700 transition">Home</a>
            <a href="#services" className="text-slate-600 hover:text-blue-700 transition">Services</a>
            <a href="#tech" className="text-slate-600 hover:text-blue-700 transition">Tech Stack</a>
            <a href="#founders" className="text-slate-600 hover:text-blue-700 transition">Founders</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-700 transition">Contact</a>
          </div>
          <div>
            <a href="#contact" className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-md font-medium transition shadow-md hover:shadow-lg">Get Quote</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Subtle Dark Network Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">Thoughts aapke, website hum banake denge</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-6 drop-shadow-md">Your Concepts. Our Code. A Perfect Digital Reality.</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            From complex Bachelor of Engineering Major/Mini projects to full-scale business & e-commerce websites, we build robust, deployment-ready solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">Start Your Project</a>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-400 hover:border-white text-slate-200 hover:text-white font-bold rounded-lg transition transform hover:scale-105 hover:shadow-lg">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Can Build For You</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition transform hover:scale-105 hover:shadow-xl group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">B.E. Major & Mini Projects</h3>
              <p className="text-slate-600 leading-relaxed">End-to-end guidance, documentation support, database design, and clean coding for final year/semester projects across all branches.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition transform hover:scale-105 hover:shadow-xl group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                <ShoppingCart size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Storefronts</h3>
              <p className="text-slate-600 leading-relaxed">Scalable shop websites with user-friendly dashboards, product management, and secure architecture for local businesses.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition transform hover:scale-105 hover:shadow-xl group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Web Presence</h3>
              <p className="text-slate-600 leading-relaxed">Modern, fast, mobile-responsive business sites to establish credibility and attract clients online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technologies We Master & Deploy</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {['Java', 'Spring Boot', 'React.js', 'Angular', 'PostgreSQL / MySQL', 'Firebase'].map(tech => (
                <span key={tech} className="px-6 py-3 bg-blue-50 text-blue-700 font-semibold rounded-full shadow-sm border border-blue-100">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-slate-900 rounded-2xl p-8 md:p-10 text-center shadow-lg transform transition hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-white mb-3">End-to-End Commitment</h3>
            <p className="text-lg text-blue-200">We don't just code; we assist with database driven architecture and full Server/Cloud Deployment.</p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Faces Behind Your Projects</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Tushar */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100 transition transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-md">
                <img src="/images/tushar.jpg" alt="Tushar Narayan Maragale" className="w-full h-full object-cover bg-slate-200" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Tushar+N&background=1e293b&color=fff&size=256' }} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Tushar Narayan Maragale</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & Java Full Stack Developer</p>
              <p className="text-slate-600">Specializes in backend architecture, Spring Boot, and robust system design.</p>
            </div>
            
            {/* Vaishnavi */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100 transition transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-md">
                <img src="/images/vaishnavi.jpg" alt="Vaishnavi Kakade" className="w-full h-full object-cover bg-slate-200" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Vaishnavi+K&background=1d4ed8&color=fff&size=256' }} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Vaishnavi Kakade</h3>
              <p className="text-blue-600 font-medium mb-4">Co-Founder & Frontend Specialist</p>
              <p className="text-slate-600">Expert in crafting dynamic user interfaces with React and Angular, focusing on seamless user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left side */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Let’s Discuss Your Idea</h2>
              <p className="text-lg text-slate-600 mb-10">Whether it's a university project or a business venture, we are ready to turn your thoughts into reality. Get in touch with us today.</p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email Us</p>
                    <p className="text-lg font-semibold text-slate-900">hello@thoughtstoweb.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Call Us</p>
                    <p className="text-lg font-semibold text-slate-900">+91 98765 43210</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <button className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-105 hover:shadow-lg">
                  <MessageCircle size={20} />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Your full name" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="you@example.com" />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                  <select id="projectType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white">
                    <option value="">Select a project type...</option>
                    <option value="academic">B.E. Major/Mini Project</option>
                    <option value="ecommerce">E-commerce Website</option>
                    <option value="business">Business/Corporate Site</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="thoughts" className="block text-sm font-medium text-slate-700 mb-2">Your Thoughts</label>
                  <textarea id="thoughts" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Tell us about your project requirements..."></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition transform hover:scale-[1.02] hover:shadow-lg">
                  Submit Inquiry
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 ThoughtsToWeb. Crafted by Tushar & Vaishnavi.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
