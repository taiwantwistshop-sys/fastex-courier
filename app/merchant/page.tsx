"use client";
import { useState } from "react";
import { Truck, PlusCircle, DollarSign, Package, CheckCircle, BarChart3, X, MapPin, User, Phone } from "lucide-react";

export default function MerchantDashboard() {
  // State management for modal and tabs
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // Demo Data State
  const [parcels, setParcels] = useState([
    { id: "FTX-883921", customer: "Rahat Khan", location: "Chittagong", amount: "৳১,২০০", status: "In Transit" },
    { id: "FTX-883710", customer: "Anika Rahman", location: "Dhaka (Mirpur)", amount: "৳৪৫০", status: "Delivered" },
    { id: "FTX-882199", customer: "Sabbir Ahmed", location: "Sylhet", amount: "৳৩,৫০০", status: "Pending" }
  ]);

  // Form States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("Dhaka");
  const [cash, setCash] = useState("");

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !cash) return alert("Please fill all fields!");
    
    const newParcel = {
      id: `FTX-${Math.floor(100000 + Math.random() * 900000)}`,
      customer: name,
      location: area,
      amount: `৳${cash}`,
      status: "Pending"
    };

    setParcels([newParcel, ...parcels]);
    setIsModalOpen(false);
    // Reset Form
    setName("");
    setPhone("");
    setCash("");
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col md:flex-row">
      
      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-slate-950 text-white p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-2 mb-10">
            <Truck className="h-7 w-7 text-orange-500" />
            <span className="text-xl font-black tracking-tight">FASTEX <span className="text-orange-500">PRO</span></span>
          </div>
          
          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition ${activeTab === "dashboard" ? "bg-orange-500 text-white" : "text-slate-400 hover:bg-slate-900 hover:text-white"}`}
            >
              <BarChart3 className="h-5 w-5" /> Dashboard
            </button>
            <button 
              onClick={() => setActiveTab("parcels")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition ${activeTab === "parcels" ? "bg-orange-500 text-white" : "text-slate-400 hover:bg-slate-900 hover:text-white"}`}
            >
              <Package className="h-5 w-5" /> All Parcels ({parcels.length})
            </button>
          </nav>
        </div>
        <div className="border-t border-slate-800 pt-4 mt-6 text-sm text-slate-500">Merchant ID: #FTX-9982</div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-10">
        
        {/* TOP BAR */}
        <header className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Welcome Back, Apex Shop!</h1>
            <p className="text-slate-500 text-sm">Steadfast style high-performance delivery panel.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-xl transition shadow-md shadow-orange-500/20"
          >
            <PlusCircle className="h-5 w-5" /> Create New Order
          </button>
        </header>

        {activeTab === "dashboard" ? (
          <>
            {/* STATS CARDS */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-sm font-semibold">Total Earnings</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">৳২৪,৫০০</h3>
                </div>
                <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl"><DollarSign className="h-6 w-6" /></div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-sm font-semibold">Live Deliveries</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">{parcels.filter(p => p.status !== "Delivered").length} Parcels</h3>
                </div>
                <div className="bg-orange-50 text-orange-500 p-3 rounded-xl"><Package className="h-6 w-6" /></div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-sm font-semibold">Completed Orders</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">১৪২ Parcels</h3>
                </div>
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl"><CheckCircle className="h-6 w-6" /></div>
              </div>
            </section>

            {/* TABLE */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
              <div className="p-6 border-b border-slate-100"><h2 className="text-lg font-bold text-slate-900">Recent Shipments</h2></div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-100">
                      <th className="p-4 pl-6">Tracking ID</th>
                      <th className="p-4">Customer</th>
                      <th className="p-4">Location</th>
                      <th className="p-4">Amount</th>
                      <th className="p-4 pr-6">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                    {parcels.map((parcel) => (
                      <tr key={parcel.id} className="hover:bg-slate-50/80 transition">
                        <td className="p-4 pl-6 font-bold text-orange-500">{parcel.id}</td>
                        <td className="p-4">{parcel.customer}</td>
                        <td className="p-4">{parcel.location}</td>
                        <td className="p-4">{parcel.amount}</td>
                        <td className="p-4 pr-6">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${parcel.status === "Delivered" ? "bg-emerald-100 text-emerald-700" : parcel.status === "In Transit" ? "bg-orange-100 text-orange-700" : "bg-slate-200 text-slate-700"}`}>
                            {parcel.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center py-20">
            <Package className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-700">All Parcels List ({parcels.length})</h3>
            <p className="text-slate-400 text-sm mt-1">Total shipments tracked in your profile repository.</p>
          </div>
        )}
      </main>

      {/* POPUP MODAL (STEADFAST STYLE) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-slate-900 text-white p-6 flex justify-between items-center">
              <h3 className="text-lg font-bold flex items-center gap-2"><PlusCircle className="text-orange-500" /> Create New Shipment</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white transition"><X className="h-6 w-6" /></button>
            </div>
            
            <form onSubmit={handleCreateOrder} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1 flex items-center gap-1"><User className="h-3.5 w-3.5" /> Customer Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Asif Rahman" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:border-orange-500 font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1 flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> Phone Number</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. 017XXXXXXXX" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:border-orange-500 font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1 flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Destination Area</label>
                <select value={area} onChange={(e) => setArea(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:border-orange-500 font-medium text-slate-700">
                  <option value="Dhaka (Inside)">Dhaka (Inside City)</option>
                  <option value="Dhaka Suburbs">Dhaka Suburbs</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1 flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" /> Cash Collection Amount (COD)</label>
                <input type="number" value={cash} onChange={(e) => setCash(e.target.value)} placeholder="e.g. 1500" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:border-orange-500 font-bold text-slate-900" />
              </div>
              
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition shadow-md shadow-orange-500/20 mt-2">
                Confirm & Place Order
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}