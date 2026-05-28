import { Truck, Search, Shield, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. NAVBAR SECTION */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-black text-slate-900 tracking-tight">
              FASTEX<span className="text-orange-500">.</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#" className="hover:text-orange-500 transition">Home</a>
            <a href="#" className="hover:text-orange-500 transition">Track Parcel</a>
            <a href="#" className="hover:text-orange-500 transition">Pricing</a>
            <a href="#" className="hover:text-orange-500 transition">About Us</a>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-xl transition shadow-md shadow-orange-500/20">
            Merchant Login
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION WITH TRACKING */}
      <header className="bg-gradient-to-br from-orange-500 to-amber-600 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm inline-block mb-4">
            ⚡ Fastest Delivery Across Bangladesh
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Your Package, Our Priority. <br />Delivered On Time.
          </h1>
          <p className="text-lg md:text-xl text-orange-50 opacity-90 mb-10 max-w-xl mx-auto">
            Experience lightning-fast logistics and real-time tracking for all your personal and business needs.
          </p>

          {/* Tracking Box */}
          <div className="bg-white p-2.5 rounded-2xl shadow-2xl max-w-2xl mx-auto flex flex-col sm:flex-row gap-2 items-center">
            <div className="flex items-center gap-3 pl-3 w-full text-slate-400">
              <Search className="h-5 w-5 text-orange-500 shrink-0" />
              <input 
                type="text" 
                placeholder="Enter your Tracking ID (e.g., FTX-123456)..." 
                className="w-full bg-transparent py-3 text-slate-800 outline-none placeholder:text-slate-400 font-medium"
              />
            </div>
            <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-xl transition shrink-0 whitespace-nowrap">
              Track Order
            </button>
          </div>
        </div>
      </header>

      {/* 3. FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Fastex Courier?</h2>
          <p className="text-slate-500 max-w-md mx-auto">We provide the ultimate logistics experience with top-notch features.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="bg-orange-50 h-12 w-12 rounded-xl flex items-center justify-center text-orange-500 mb-6">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Next-Day Delivery</h3>
            <p className="text-slate-500 leading-relaxed">We ensure your packages reach their destination within 24 hours inside Dhaka and major areas.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="bg-orange-50 h-12 w-12 rounded-xl flex items-center justify-center text-orange-500 mb-6">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Secure Handling</h3>
            <p className="text-slate-500 leading-relaxed">Safety is our standard. Every parcel is handled with maximum security and care.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="bg-orange-50 h-12 w-12 rounded-xl flex items-center justify-center text-orange-500 mb-6">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">64 Districts Covered</h3>
            <p className="text-slate-500 leading-relaxed">No matter how remote, our strong delivery network spans across all 64 districts of Bangladesh.</p>
          </div>
        </div>
      </section>

    </div>
  );
}