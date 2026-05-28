"use strict";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* HEADER */}
      <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-black mb-4">Delivery Pricing Calculator</h1>
        <p className="text-orange-50 opacity-90 max-w-xl mx-auto">
          Calculate your delivery charges instantly based on weight and destination inside Bangladesh.
        </p>
      </div>

      {/* CALCULATOR & CARD SECTION */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* INPUT FORM */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Enter Parcel Details</h2>
            
            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-600 mb-2">Destination</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:border-orange-500 font-medium text-slate-700">
                <option>Inside Dhaka (Next Day) — ৳৬০</option>
                <option>Dhaka Suburbs — ৳১০০</option>
                <option>Outside Dhaka (64 Districts) — ৳১৩০</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-600 mb-2">Weight (KG)</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:border-orange-500 font-medium text-slate-700">
                <option>Up to 1 KG (Base Charge)</option>
                <option>1 KG to 2 KG (+ ৳২০)</option>
                <option>2 KG to 3 KG (+ ৳৪০)</option>
                <option>3 KG to 5 KG (+ ৳৮০)</option>
              </select>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition shadow-md shadow-orange-500/20">
              Calculate Total Cost
            </button>
          </div>

          {/* PRICE DISPLAY CARD */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
            
            <div>
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">Estimated Cost</span>
              <div className="text-5xl font-black mt-2 text-white">৳৬০<span className="text-lg font-normal text-slate-400">/total</span></div>
              
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex justify-between"><span>Base Delivery Charge:</span> <span className="font-semibold">৳৬০</span></li>
                <li className="flex justify-between"><span>Weight Extra:</span> <span className="font-semibold">৳০</span></li>
                <li className="flex justify-between"><span>COD Charge (0%):</span> <span className="font-semibold">Free</span></li>
              </ul>
            </div>

            <div className="border-t border-slate-800 pt-4 mt-6">
              <p className="text-xs text-slate-400 leading-relaxed">
                * Rates are tentative. Cash on Delivery (COD) payment collection is completely free.
              </p>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}