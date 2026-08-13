import React, { useState, useEffect } from 'react';
import {
  GraduationCap, ShoppingCart, Briefcase, Mail, Phone, MessageCircle,
  Moon, Sun, Globe, MonitorSmartphone, Code2, Rocket, ArrowRight,
  CheckCircle2, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Form States
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  // Check system preference on load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate API call for now (can be replaced with EmailJS / Web3Forms / Formspree)
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen font-sans transition-colors duration-500 bg-gradient-to-br from-slate-100 via-blue-50/50 to-slate-200 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 text-slate-900 dark:text-slate-200">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-500 shadow-sm dark:shadow-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <div className="text-3xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
            ThoughtsTo<span className="text-blue-600 dark:text-blue-500">Web</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <a href="#home" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#services" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
            <a href="#process" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Process</a>
            <a href="#pricing" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#founders" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Founders</a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition shadow-inner dark:shadow-none"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-lg shadow-blue-500/40 dark:shadow-blue-500/20 transform hover:-translate-y-0.5">Get Quote</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Gradients - Enhanced for Light Mode */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-300/40 dark:bg-blue-600/20 blur-[120px] pointer-events-none transition-colors duration-700"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-300/40 dark:bg-purple-600/20 blur-[120px] pointer-events-none transition-colors duration-700"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-white/90 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-sm mb-8 border border-blue-200 dark:border-blue-800/50 shadow-md backdrop-blur-sm"
          >
            Premium Web Development Agency
          </motion.div>

          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight"
          >
            <motion.span variants={fadeInUp} className="block mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300">
                Your Vision. Our Code.
              </span>
            </motion.span>

            <motion.span variants={fadeInUp} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 h-24 md:h-32">
              <Typewriter
                words={['Digital Reality Hamari.', 'A Perfect Digital Reality.', 'Limitless Possibilities.']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-slate-700 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            From complex engineering projects to full-scale business, e-commerce, and premium portfolio websites, we build robust, jaw-dropping digital solutions tailored for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-5"
          >
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-slate-100 font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-slate-800 dark:text-slate-300 font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center">
              Explore Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-slate-950 border-y border-slate-200/50 dark:border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">What We Build For You</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">We deliver pixel-perfect, high-performance digital experiences tailored to your exact needs.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: GraduationCap, title: 'B.E. Major/Mini Projects', desc: 'End-to-end guidance, database design, and clean coding for final year projects.',
                colors: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
              },
              {
                icon: ShoppingCart, title: 'E-Commerce Storefronts', desc: 'Scalable shop websites with user-friendly dashboards and secure payments.',
                colors: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white'
              },
              {
                icon: Briefcase, title: 'Corporate Websites', desc: 'Modern, mobile-responsive business sites to establish credibility online.',
                colors: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white'
              },
              {
                icon: MonitorSmartphone, title: 'Premium Portfolios', desc: 'Stunning personal and professional portfolios to showcase your work globally.',
                colors: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 group-hover:bg-rose-600 group-hover:text-white'
              }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl shadow-lg shadow-slate-200/50 dark:shadow-none dark:hover:shadow-slate-800/50 group bg-white/50 dark:bg-transparent backdrop-blur-sm">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-inner ${service.colors}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-24 bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Our Streamlined Process</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">From an idea in your head to a deployed website on the internet in 4 simple steps.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-12 md:gap-8 relative"
          >
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-purple-200 dark:from-slate-800 dark:via-blue-800 dark:to-slate-800 z-0"></div>

            {[
              { icon: MessageCircle, title: '1. Discover', desc: 'We discuss your requirements, target audience, and business goals.' },
              { icon: Code2, title: '2. Design', desc: 'We create a stunning UI/UX design tailored specifically to your brand.' },
              { icon: MonitorSmartphone, title: '3. Develop', desc: 'We build the architecture using modern, robust tech stacks.' },
              { icon: Rocket, title: '4. Deploy', desc: 'We host it on cloud servers and ensure it runs flawlessly 24/7.' }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto bg-white dark:bg-slate-800 rounded-full shadow-xl shadow-slate-300/80 dark:shadow-slate-900/50 flex items-center justify-center mb-6 border-2 border-slate-100 dark:border-slate-700 hover:scale-110 transition-transform duration-300">
                  <step.icon size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white dark:bg-slate-950 border-y border-slate-200/50 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Transparent Packages</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">Quality development at fair prices. No hidden costs.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {/* Basic */}
            <motion.div variants={fadeInUp} className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">Student/Mini Project</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Perfect for B.E/B.Tech students.</p>
              <div className="text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">Custom</div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Clean Architecture', 'Database Design', 'Documentation Help', 'Deployment Guide'].map((feat, i) => (
                  <li key={i} className="flex items-center text-slate-800 dark:text-slate-300 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-green-500 mr-3 flex-shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="w-full py-3 px-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-center rounded-xl font-bold transition text-slate-900 dark:text-white hover:shadow-md">Inquire Now</a>
            </motion.div>

            {/* Pro (Highlighted) */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-3xl p-8 shadow-2xl shadow-blue-600/40 dark:shadow-blue-900/50 flex flex-col transform md:-translate-y-4 relative border border-blue-400/30">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">Most Popular</div>
              <h3 className="text-xl font-heading font-bold text-white mb-2 mt-2">Business/Portfolio</h3>
              <p className="text-blue-200 text-sm mb-6">Establish a premium online presence.</p>
              <div className="text-4xl font-heading font-extrabold text-white mb-6">Custom</div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Stunning UI/UX Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Load Times', 'Form Integrations'].map((feat, i) => (
                  <li key={i} className="flex items-center text-white text-sm font-medium">
                    <CheckCircle2 size={18} className="text-blue-300 mr-3 flex-shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="w-full py-3.5 px-4 bg-white hover:bg-blue-50 text-blue-700 text-center rounded-xl font-bold transition shadow-lg hover:scale-105 transform">Inquire Now</a>
            </motion.div>

            {/* Advanced */}
            <motion.div variants={fadeInUp} className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">E-Commerce App</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Full-scale digital storefront.</p>
              <div className="text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">Custom</div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Custom Dashboards', 'Payment Gateway', 'Product Management', 'Secure Authentication', 'Cloud Hosting'].map((feat, i) => (
                  <li key={i} className="flex items-center text-slate-800 dark:text-slate-300 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-green-500 mr-3 flex-shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="w-full py-3 px-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-center rounded-xl font-bold transition text-slate-900 dark:text-white hover:shadow-md">Inquire Now</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-slate-100 dark:bg-slate-950 overflow-hidden relative border-b border-slate-200/50 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-8">Powered by Modern Technology</p>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
            {['Java', 'Spring Boot', 'React.js', 'Angular', 'PostgreSQL / MySQL', 'Firebase', 'Tailwind CSS', 'Framer Motion'].map(tech => (
              <motion.span key={tech} variants={fadeInUp} className="px-6 py-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors cursor-default shadow-md hover:shadow-lg hover:-translate-y-1 transform duration-300">{tech}</motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founders Section - RESTORED & ENHANCED */}
      <section id="founders" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">The Faces Behind The Code</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">A dedicated team passionate about turning concepts into digital realities.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto"
          >
            {/* Tushar */}
            <motion.div variants={fadeInUp} className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-10 text-center shadow-xl shadow-slate-200/80 dark:shadow-none border border-slate-200 dark:border-slate-800 transition transform hover:-translate-y-2 group hover:bg-white dark:hover:bg-slate-900 duration-300">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white dark:border-slate-800 shadow-xl group-hover:border-blue-500 transition-colors duration-300">
                <img
                  src="/images/tushar.jpg"
                  alt="Tushar Maragale"
                  className="w-full h-full object-cover bg-slate-100 dark:bg-slate-800"
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Tushar+N&background=0f172a&color=fff&size=256' }}
                />
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">Tushar Maragale</h3>
              <p className="text-blue-600 dark:text-blue-400 font-bold mb-4 mt-1">Founder & Java Full Stack Developer</p>
              <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed font-medium">Specializes in backend architecture, Spring Boot, and robust system design for complex logic.</p>
            </motion.div>

            {/* Vaishnavi */}
            <motion.div variants={fadeInUp} className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-10 text-center shadow-xl shadow-slate-200/80 dark:shadow-none border border-slate-200 dark:border-slate-800 transition transform hover:-translate-y-2 group hover:bg-white dark:hover:bg-slate-900 duration-300">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white dark:border-slate-800 shadow-xl group-hover:border-purple-500 transition-colors duration-300">
                <img
                  src="/images/vaishnavi.jpg"
                  alt="Vaishnavi Kakade"
                  className="w-full h-full object-cover bg-slate-100 dark:bg-slate-800"
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Vaishnavi+K&background=3b82f6&color=fff&size=256' }}
                />
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">Vaishnavi Kakade</h3>
              <p className="text-purple-600 dark:text-purple-400 font-bold mb-4 mt-1">Co-Founder & Frontend Specialist</p>
              <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed font-medium">Expert in crafting pixel-perfect, dynamic user interfaces with React and Angular.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'How long does it take to build a website?', a: 'A simple portfolio or business site usually takes 1-2 weeks. Complex projects like e-commerce or major B.E projects can take 3-6 weeks depending on requirements.' },
              { q: 'Do you provide the source code?', a: 'Yes! Upon project completion and final payment, you get full ownership of the source code and assets.' },
              { q: 'Will my website work on mobile devices?', a: 'Absolutely. All our websites are built with a mobile-first approach, ensuring they look stunning on phones, tablets, and desktops.' },
              { q: 'Do you help with hosting and domains?', a: 'Yes, we handle the entire deployment process, including setting up hosting (Vercel, AWS, Firebase) and connecting your custom domain.' }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="font-heading font-bold text-slate-900 dark:text-white text-lg">{faq.q}</span>
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 py-4 border-t border-slate-100 dark:border-slate-800 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-700 dark:text-slate-400 font-medium">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-50/80 to-transparent dark:from-blue-900/10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-sm mb-6 border border-green-200 dark:border-green-800/50 shadow-sm">
                Available for New Projects
              </div>
              <h2 className="text-5xl font-heading font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">amazing</span> together.</h2>
              <p className="text-lg text-slate-700 dark:text-slate-400 mb-10 font-medium">Whether it's a university project or a business venture, we are ready to turn your thoughts into reality.</p>

              <div className="space-y-8">
                <a href="mailto:tusharmaragale@gmail.com" className="flex items-center space-x-5 group cursor-pointer w-fit">
                  <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 shadow-md">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-bold mb-1 uppercase tracking-wide">Email Us</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">tusharmaragale@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919011759932" className="flex items-center space-x-5 group cursor-pointer w-fit">
                  <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 shadow-md">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-bold mb-1 uppercase tracking-wide">Call Us</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">+91 90117 59932</p>
                  </div>
                </a>
              </div>

              <div className="mt-12">
                <a href="https://wa.me/919011759932" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition transform hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/30 w-max">
                  <MessageCircle size={24} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/80 dark:shadow-none relative"
            >
              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-8">Send an Inquiry</h3>

              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center h-full"
                  >
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Message Sent!</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">Thank you for reaching out. We will get back to you shortly.</p>
                    <button onClick={() => setFormStatus('idle')} className="px-6 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white font-semibold rounded-lg transition-colors">
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6"
                    onSubmit={handleFormSubmit}
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                      <input required type="text" id="name" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-medium" placeholder="John Doe" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                      <input required type="email" id="email" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-medium" placeholder="john@example.com" />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Project Type</label>
                      <select required id="projectType" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none font-medium">
                        <option value="">Select a project type...</option>
                        <option value="academic">B.E. Major/Mini Project</option>
                        <option value="ecommerce">E-commerce Website</option>
                        <option value="portfolio">Personal Portfolio</option>
                        <option value="business">Business Site</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="thoughts" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Project Details</label>
                      <textarea required id="thoughts" rows={4} className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none font-medium" placeholder="Tell us about your requirements..."></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`w-full text-white font-bold py-4 rounded-xl transition transform flex justify-center items-center gap-2 text-lg ${formStatus === 'submitting' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40'}`}
                    >
                      {formStatus === 'submitting' ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-heading font-extrabold text-white mb-4 md:mb-0 tracking-tight">
            ThoughtsTo<span className="text-blue-500">Web</span>
          </div>
          <p className="text-sm font-medium">© 2026 ThoughtsToWeb. Crafted with ❤️ by Tushar & Vaishnavi.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-white transition"><Globe size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
