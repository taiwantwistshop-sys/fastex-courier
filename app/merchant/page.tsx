"use client";
import { useState } from "react";
import { 
  Truck, PlusCircle, DollarSign, Package, CheckCircle, BarChart3, 
  X, MapPin, User, Phone, AlertTriangle, ShieldAlert, Navigation, RefreshCw 
} from "lucide-react";

export default function MerchantDashboard() {
  // Navigation & Modal States
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Real-time Demo Data
  const [parcels, setParcels] = useState([
    { id: "FTX-883921", customer: "Rahat Khan", phone: "01711223344", location: "Chittagong", amount: "৳১,২০০", status: "In Transit" },
    { id: "FTX-883710", customer: "Anika Rahman", phone: "01999887766", location: "Dhaka (Mirpur)", amount: "৳৪৫০", status: "Delivered" },
    { id: "FTX-882199", customer: "Sabbir Ahmed", phone: "01555443322", location: "Sylhet", amount: "৳৩,৫০০", status: "Pending" }
  ]);

  // Form States for New Parcel
  const [name, setName] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [area, setArea] = useState("Dhaka (Inside)");
  const [cash, setCash] = useState("");

  // Fraud Checker States
  const [searchPhone, setSearchPhone] = useState("");
  const [fraudResult, setFraudResult] = useState<any>(null);

  // Function to Add New Parcel (Parcel Management)
  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phoneInput || !cash) return alert("সবগুলো ঘর সঠিকভাবে পূরণ করুন ভাই!");
    
    const newParcel = {
      id: `FTX-${Math.floor(100000 + Math.random() * 900000)}`,
      customer: name,
      phone: phoneInput,
      location: area,
      amount: `৳${cash}`,
      status: "Pending"
    };

    setParcels([newParcel, ...parcels]);
    setIsModalOpen(false);
    setName(""); setPhoneInput(""); setCash("");
    alert("পার্সেলটি সফলভাবে এন্ট্রি হয়েছে এবং Pickup Request তৈরি হয়েছে!");
  };

  // Function for Fraud Check System
  const handleFraudCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchPhone) return alert("একটি মোবাইল নাম্বার দিন!");
    
    // Simulating a real courier industry fraud check response
    const lastDigit = searchPhone.slice(-1);
    if (["3", "7", "9"].includes(lastDigit)) {
      setFraudResult({
        status: "High Risk",
        ratio: "65%",
        totalOrders: 12,
        returns: 8,
        color: "text-red-600 bg-red-50 border-red-200"
      });
    } else {
      setFraudResult({
        status: "Good Merchant Profile",
        ratio: "4%",
        totalOrders: 25,
        returns: 1,
        color: "text-emerald-600 bg-emerald-50 border-emerald-200"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col md:flex-row">
      
      {/* SIDEBAR (Steadfast Inspired Navigation) */}
      <aside className="w-full md:w-64 bg-slate-950 text-white p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-2 mb-10">
            <Truck className="h-7 w-7 text-orange-500" />
            <span className="text-xl font-black tracking-tight">FASTEX <span className="text-orange-500">PRO</span></span>
          </div>
          
          <nav className="space-y-2">
            <button onClick={() => setActiveTab("dashboard")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition ${activeTab === "dashboard" ? "bg-orange-500 text-white" : "text-slate-400 hover:bg-slate-900 hover:text-white"}`}>
              <BarChart3 className="h-5 w-5" /> Dashboard & Stats
            </button>
            <button onClick={() => setActiveTab("parcels")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition ${activeTab === "parcels" ? "bg-orange-500 text-white" : "text-slate-400 hover:bg-slate-900 hover:text-white"}`}>
              <Package className="h-5 w-5" /> Tracking & Consignments
            </button>
            <button onClick={() => setActiveTab("fraud")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition ${activeTab === "fraud" ? "bg-orange-500 text-white" : "text-slate-400 hover:bg-slate-900 hover:text-white"}`}>
              <ShieldAlert className="h-5 w-5" /> Fraud Check
            </button>
          </nav>
        </div>
        <div className="border-t border-slate-800 pt-4 mt-6 text-sm text-slate-500">Merchant ID: #FTX-9982</div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-10">
        
        {/* TOPBAR */}
        <header className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Apex Online Shop</h1>
            <p className="text-slate-500 text-sm">Fastex Integrated Automated Courier Panel</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-xl transition shadow-md shadow-orange-500/20">
              <PlusCircle className="h-5 w-5" /> Add New Parcel
            </button>
          </div>
        </header>

        {/* 1. DASHBOARD TAB */}
        {activeTab === "dashboard" && (
          <>
            {/* Payment & Stats Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-sm font-semibold">COD Payout Summary</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">৳২৪,৫০০</h3>
                  <span className="text-xs text-emerald-600 font-bold">● Fully Settled</span>
                </div>
                <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl"><DollarSign className="h-6 w-6" /></div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-sm font-semibold">Live Consignments</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">{parcels.filter(p => p.status !== "Delivered").length} Parcels</h3>
                  <span className="text-xs text-orange-500 font-bold">⚡ Auto-Pickup Requested</span>
                </div>
                <div className="bg-orange-50 text-orange-500 p-3 rounded-xl"><Package className="h-6 w-6" /></div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-sm font-semibold">Delivery Performance</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">৯৪.২%</h3>
                  <span className="text-xs text-blue-500 font-bold">Excellent Success Rate</span>
                </div>
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl"><CheckCircle className="h-6 w-6" /></div>
              </div>
            </section>

            {/* Recent Table View */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-slate-900">Recent Tracking Logs</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-100">
                      <th className="p-4 pl-6">Tracking / Con No</th>
                      <th className="p-4">Customer Name</th>
                      <th className="p-4">Area</th>
                      <th className="p-4">COD Price</th>
                      <th className="p-4 pr-6">Live Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                    {parcels.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50/80 transition">
                        <td className="p-4 pl-6 font-bold text-orange-500">{p.id}</td>
                        <td className="p-4">{p.customer}</td>
                        <td className="p-4">{p.location}</td>
                        <td className="p-4">{p.amount}</td>
                        <td className="p-4 pr-6">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.status === "Delivered" ? "bg-emerald-100 text-emerald-700" : p.status === "In Transit" ? "bg-orange-100 text-orange-700" : "bg-slate-200 text-slate-700"}`}>
                            {p.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        {/* 2. TRACKING & CONSIGNMENTS TAB */}
        {activeTab === "parcels" && (
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-slate-900">Tracking & Consignments Console</h2>
            <p className="text-slate-500 text-sm mb-6">এখানে ওয়েবসাইট বা এপিআই এর মাধ্যমে আসা সকল অর্ডারের লাইভ ট্র্যাকিং স্ট্যাটাস ফিল্টার করা যায়।</p>
            <div className="space-y-4">
              {parcels.map((p) => (
                <div key={p.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{p.id}</span>
                      <span className="text-xs bg-slate-200 px-2 py-0.5 rounded text-slate-600">{p.location}</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">Customer: {p.customer} ({p.phone})</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-800">{p.amount}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.status === "Delivered" ? "bg-emerald-100 text-emerald-700" : p.status === "In Transit" ? "bg-orange-100 text-orange-700" : "bg-slate-200 text-slate-700"}`}>
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. FRAUD CHECK TAB */}
        {activeTab === "fraud" && (
          <section className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="h-6 w-6 text-orange-500" />
              <h2 className="text-xl font-bold text-slate-900">National Fraud & Return Checker</h2>
            </div>
            <p className="text-slate-500 text-sm mb-6">গ্রাহক এর আগে দেশের অন্য কোনো ই-কমার্স বা কুরিয়ারে কোনো ফ্রড বা পার্সেল রিটার্ন করেছে কিনা তা চেক করুন।</p>
            
            <form onSubmit={handleFraudCheck} className="flex gap-2 mb-8">
              <input 
                type="text" 
                value={searchPhone}
                onChange={(e) => setSearchPhone(e.target.value)}
                placeholder="Enter Customer Mobile Number (e.g., 017XXXXXXXX)" 
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:border-orange-500 font-medium"
              />
              <button type="submit" className="bg-slate-950 hover:bg-slate-900 text-white px-6 py-3 rounded-xl font-bold transition">
                Check Fraud
              </button>
            </form>

            {fraudResult && (
              <div className={`p-6 border rounded-2xl animate-in fade-in duration-200 ${fraudResult.color}`}>
                <div className="flex items-center gap-2 font-bold text-lg mb-2">
                  <AlertTriangle className="h-5 w-5" /> Status: {fraudResult.status}
                </div>
                <ul className="space-y-1 font-medium text-sm text-slate-700 mt-4">
                  <li>● Return Ratio: <span className="font-bold text-slate-900">{fraudResult.ratio}</span></li>
                  <li>● Total Successful Delivery: {fraudResult.totalOrders} Parcels</li>
                  <li>● Dispatched Return Orders: {fraudResult.returns} Parcels</li>
                </ul>
              </div>
            )}
          </section>
        )}

      </main>

      {/* POPUP MODAL (Add Parcel & Auto Pickup Request Form) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-slate-900 text-white p-6 flex justify-between items-center">
              <h3 className="text-lg font-bold flex items-center gap-2"><PlusCircle className="text-orange-500" /> Manual Parcel Entry</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white transition"><X className="h-6 w-6" /></button>
            </div>
            
            <form onSubmit={handleCreateOrder} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1 flex items-center gap-1"><User className="h-3.5 w-3.5" /> Customer Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Asif Rahman" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:border-orange-500 font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1 flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> Mobile Number</label>
                <input type="text" value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} placeholder="017XXXXXXXX" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:border-orange-500 font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1 flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Delivery Region</label>
                <select value={area} onChange={(e) => setArea(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:border-orange-500 font-medium text-slate-700">
                  <option value="Dhaka (Inside)">Dhaka (Inside City)</option>
                  <option value="Dhaka Suburbs">Dhaka Suburbs</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1 flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" /> COD Amount (৳)</label>
                <input type="number" value={cash} onChange={(e) => setCash(e.target.value)} placeholder="1200" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:border-orange-500 font-bold text-slate-900" />
              </div>
              
              <div className="bg-orange-50 text-orange-700 p-3 rounded-xl text-xs font-semibold flex items-center gap-2">
                <Navigation className="h-4 w-4 shrink-0 animate-pulse" />
                Note: Saving will auto-dispatch a Pickup Request to rider.
              </div>

              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition shadow-md shadow-orange-500/20 mt-2">
                Save & Request Pickup
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}