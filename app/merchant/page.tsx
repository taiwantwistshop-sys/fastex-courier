import { Truck, PlusCircle, DollarSign, Package, CheckCircle, BarChart3 } from "lucide-react";

export default function MerchantDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* SIDEBAR & MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* SIDEBAR */}
        <aside className="w-full md:w-64 bg-slate-950 text-white p-6 flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-10">
              <Truck className="h-7 w-7 text-orange-500" />
              <span className="text-xl font-black tracking-tight">FASTEX <span className="text-orange-500">PRO</span></span>
            </div>
            
            <nav className="space-y-2">
              <a href="#" className="flex items-center gap-3 bg-orange-500 text-white px-4 py-3 rounded-xl font-semibold transition">
                <BarChart3 className="h-5 w-5" /> Dashboard
              </a>
              <a href="#" className="flex items-center gap-3 text-slate-400 hover:bg-slate-900 hover:text-white px-4 py-3 rounded-xl font-medium transition">
                <Package className="h-5 w-5" /> All Parcels
              </a>
            </nav>
          </div>
          
          <div className="border-t border-slate-800 pt-4 mt-6 text-sm text-slate-500">
            Merchant ID: #FTX-9982
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 p-6 md:p-10">
          
          {/* TOP BAR */}
          <header className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Welcome Back, Apex Shop!</h1>
              <p className="text-slate-500 text-sm">Manage your business logistics and track daily updates.</p>
            </div>
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-xl transition shadow-md shadow-orange-500/20">
              <PlusCircle className="h-5 w-5" /> Create New Order
            </button>
          </header>

          {/* STATS CARDS */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* CARD 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
              <div>
                <span className="text-slate-400 text-sm font-semibold">Total Earnings</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">৳২৪,৫০০</h3>
              </div>
              <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl">
                <DollarSign className="h-6 w-6" />
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
              <div>
                <span className="text-slate-400 text-sm font-semibold">Live Deliveries</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">১৮ Parcels</h3>
              </div>
              <div className="bg-orange-50 text-orange-500 p-3 rounded-xl">
                <Package className="h-6 w-6" />
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
              <div>
                <span className="text-slate-400 text-sm font-semibold">Completed Orders</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">১৪২ Parcels</h3>
              </div>
              <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
                <CheckCircle className="h-6 w-6" />
              </div>
            </div>
          </section>

          {/* RECENT ORDERS TABLE */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Recent Shipments</h2>
            </div>
            
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
                  <tr>
                    <td className="p-4 pl-6 font-bold text-orange-500">FTX-883921</td>
                    <td className="p-4">Rahat Khan</td>
                    <td className="p-4">Chittagong</td>
                    <td className="p-4">৳১,২০০</td>
                    <td className="p-4 pr-6"><span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">In Transit</span></td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold text-orange-500">FTX-883710</td>
                    <td className="p-4">Anika Rahman</td>
                    <td className="p-4">Dhaka (Mirpur)</td>
                    <td className="p-4">৳৪৫০</td>
                    <td className="p-4 pr-6"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">Delivered</span></td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold text-orange-500">FTX-882199</td>
                    <td className="p-4">Sabbir Ahmed</td>
                    <td className="p-4">Sylhet</td>
                    <td className="p-4">৳৩,৫০০</td>
                    <td className="p-4 pr-6"><span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>

    </div>
  );
}