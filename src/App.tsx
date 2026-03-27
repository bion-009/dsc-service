import { motion } from "motion/react";
import { MessageCircle, ShieldCheck, Zap, Users, FileCheck, MapPin, Clock, Mail, CheckCircle2, ChevronRight } from "lucide-react";
import { useState, FormEvent } from "react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="DSC WALE Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-primary">DSC WALE</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60 -mt-1">Digital Solutions</span>
        </div>
      </div>
      <a 
        href="https://wa.me/919760735619" 
        className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all shadow-soft"
      >
        <MessageCircle size={18} />
        WhatsApp Support
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-40 pb-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-wider">
          <Zap size={14} className="fill-primary" />
          Fast. Secure. Trusted.
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          Apply Digital Signature <span className="text-blue-600">Certificate</span> in Minutes
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
          Get your DSC issued the same day with expert support. Trusted by 500+ CA professionals and business owners across India.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a 
            href="https://wa.me/919760735619" 
            className="flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-accent/20"
          >
            <MessageCircle size={24} />
            Connect on WhatsApp
          </a>
          <div className="flex items-center gap-4 px-4 py-2">
            <div className="text-sm">
              <p className="font-bold">500+ Customers</p>
              <p className="text-gray-500 text-xs">Trusted Service</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
          {[
            { label: "Same Day", sub: "DSC Delivery" },
            { label: "Instant", sub: "WhatsApp Support" },
            { label: "100%", sub: "Genuine Service" }
          ].map((item, i) => (
            <div key={i}>
              <p className="font-bold text-xl">{item.label}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{item.sub}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-square rounded-[40px] bg-gradient-to-br from-secondary to-white shadow-soft p-8 flex items-center justify-center">
          <div className="relative w-full max-w-sm">
             <div className="absolute -top-10 -right-10 glass p-6 rounded-3xl shadow-soft animate-bounce-slow">
                <ShieldCheck size={40} className="text-primary mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Verified</p>
                <p className="font-bold">Class 3 DSC</p>
             </div>
             <img 
               src="/logo.png" 
               alt="Secure DSC" 
               className="rounded-3xl shadow-2xl w-full h-auto object-contain"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: "Class 3 DSC", desc: "For Income Tax, GST, MCA, and Tenders.", icon: <ShieldCheck className="text-blue-600" /> },
    { title: "DGFT DSC", desc: "Specialized certificates for Import Export.", icon: <Zap className="text-orange-500" /> },
    { title: "Organization DSC", desc: "For companies and government bodies.", icon: <Users className="text-purple-500" /> },
    { title: "Renewal Service", desc: "Quick renewal of your existing DSC.", icon: <Clock className="text-green-600" /> }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We provide all types of Digital Signature Certificates with the highest security standards.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-bg-light border border-gray-100 shadow-soft group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto bg-primary rounded-[40px] p-12 md:p-20 text-white overflow-hidden relative">
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">500+ DSC Delivered with 100% Trust.</h2>
          <div className="space-y-6">
            {[
              "100% Genuine & CCA Approved",
              "Expert Support for Installation",
              "Same Day Processing & Delivery",
              "Secure & Confidential Handling"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
                <span className="text-lg font-medium opacity-90">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
            <p className="text-4xl font-bold mb-2">500+</p>
            <p className="text-sm uppercase tracking-widest opacity-60">Happy Clients</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
            <p className="text-4xl font-bold mb-2">100%</p>
            <p className="text-sm uppercase tracking-widest opacity-60">Success Rate</p>
          </div>
          <div className="col-span-2 bg-accent p-8 rounded-3xl text-primary">
            <p className="text-2xl font-bold mb-2">Serving Professionals</p>
            <p className="opacity-80">CAs, Advocates, and Business Owners across Uttarakhand and India.</p>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] -mr-48 -mt-48 rounded-full"></div>
    </div>
  </section>
);

const WhoNeeds = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Who Needs a Digital Signature?</h2>
          <div className="grid gap-4">
            {[
              { title: "CA & Professionals", desc: "For filing ITR, Audit reports, and MCA forms." },
              { title: "Business Owners", desc: "For GST registration and company incorporation." },
              { title: "Exporters & Importers", desc: "Required for DGFT and custom clearances." },
              { title: "Government Contractors", desc: "Essential for e-Tendering and bidding." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-bg-light hover:bg-secondary transition-colors cursor-default">
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-secondary rounded-[40px] p-12 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6">Required Documents</h3>
          <p className="text-gray-600 mb-8">Keep these ready for instant processing:</p>
          <div className="space-y-4">
            {["PAN Card", "Aadhaar Card", "Mobile Number (Linked with Aadhaar)", "Email Address"].map((doc, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-soft">
                <FileCheck className="text-blue-600" />
                <span className="font-semibold">{doc}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-400 italic">* Paperless process available for Aadhaar-linked mobile users.</p>
        </div>
      </div>
    </div>
  </section>
);

const ProductSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto glass rounded-[40px] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-xs font-bold mb-4">FEATURED PRODUCT</div>
        <h2 className="text-4xl font-bold mb-6">ProxKey USB Token</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          The most reliable and secure USB token for storing your Digital Signature. FIPS certified and compatible with all DSC types.
        </p>
        <a 
          href="https://wa.me/919760735619?text=I'm%20interested%20in%20ProxKey%20Token" 
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-all"
        >
          Order with DSC
          <ChevronRight size={20} />
        </a>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
          <img 
            src="/proxkey.png" 
            alt="ProxKey Token" 
            className="relative z-10 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-md"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', mobile: '', service: 'Class 3 DSC' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${formData.name}. I need ${formData.service}. My mobile is ${formData.mobile}.`;
    window.open(`https://wa.me/919760735619?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 px-6 bg-white" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Get Started Today</h2>
        <p className="text-gray-500 mb-12">Fill the form and we will connect with you on WhatsApp instantly.</p>
        
        <form onSubmit={handleSubmit} className="bg-bg-light p-8 md:p-12 rounded-[40px] shadow-soft text-left space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="Enter your name"
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Mobile Number</label>
            <input 
              required
              type="tel" 
              placeholder="Enter mobile number"
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
              value={formData.mobile}
              onChange={e => setFormData({...formData, mobile: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Service Required</label>
            <select 
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-white"
              value={formData.service}
              onChange={e => setFormData({...formData, service: e.target.value})}
            >
              <option>Class 3 DSC</option>
              <option>DGFT DSC</option>
              <option>Organization DSC</option>
              <option>DSC Renewal</option>
              <option>USB Token Only</option>
            </select>
          </div>
          <button 
            type="submit"
            className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
          >
            Submit & Chat on WhatsApp
            <MessageCircle size={24} />
          </button>
        </form>
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-primary">Visit Our Office</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                <MapPin className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg mb-1">Our Location</p>
                <p className="text-gray-500">Dwarahat, Almora, Uttarakhand, India - 263653</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                <Clock className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg mb-1">Working Hours</p>
                <p className="text-gray-500">Mon - Sat: 10:00 AM - 07:00 PM</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                <Mail className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg mb-1">Email Us</p>
                <p className="text-gray-500">support@dscwale.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] rounded-[40px] overflow-hidden shadow-soft border border-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13813.43444345334!2d79.4262!3d29.7842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0989f6b9b9b9b%3A0x9b9b9b9b9b9b9b9b!2sDwarahat%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-gray-100 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start gap-4">
        <img src="/logo.png" alt="DSC WALE Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold tracking-tight text-primary">DSC WALE</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60 -mt-1">Digital Solutions</span>
        </div>
      </div>
      <p className="text-gray-400 text-sm">© 2026 DSC WALE DIGITAL SOLUTIONS. All rights reserved.</p>
      <div className="flex gap-8 text-sm font-medium text-gray-500">
        <a href="#" className="hover:text-primary">Privacy Policy</a>
        <a href="#" className="hover:text-primary">Terms of Service</a>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/919760735619" 
    className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-pulse-slow"
  >
    <MessageCircle size={32} />
  </a>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrustSection />
        <WhoNeeds />
        <ProductSection />
        <LeadForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
