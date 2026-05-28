'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  // Booking States
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [district, setDistrict] = useState('Dhaka')
  const [address, setAddress] = useState('')
  const [cod, setCod] = useState('')
  const [bookingLoading, setBookingLoading] = useState(false)
  const [createdTrackingId, setCreatedTrackingId] = useState('')

  // Tracking States
  const [searchTrackingId, setSearchTrackingId] = useState('')
  const [searchResult, setSearchResult] = useState<any>(null)
  const [trackingLoading, setTrackingLoading] = useState(false)
  const [trackingError, setTrackingError] = useState('')

  // Handle Parcel Booking
  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault()
    setBookingLoading(true)
    setCreatedTrackingId('')

    const trackingId = 'FTX-' + Math.floor(100000 + Math.random() * 900000)

    const { error } = await supabase.from('parcels').insert([
      {
        tracking_id: trackingId,
        customer_name: name,
        customer_phone: phone,
        district: district,
        address: address,
        cod_amount: parseFloat(cod) || 0,
        status: 'Pending'
      }
    ])

    setBookingLoading(false)
    if (error) {
      alert('Error creating parcel: ' + error.message)
    } else {
      setCreatedTrackingId(trackingId)
      setName('')
      setPhone('')
      setAddress('')
      setCod('')
    }
  }

  // Handle Parcel Tracking
  const handleTracking = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTrackingId) return
    
    setTrackingLoading(true)
    setSearchResult(null)
    setTrackingError('')

    const { data, error } = await supabase
      .from('parcels')
      .select('*')
      .eq('tracking_id', searchTrackingId.trim())
      .single()

    setTrackingLoading(false)
    if (error) {
      setTrackingError('Parcel not found. Please check the ID.')
    } else {
      setSearchResult(data)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-12">
      {/* Navbar */}
      <nav className="bg-orange-600 text-white p-4 shadow-md mb-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">FASTEX COURIER</h1>
          <span className="text-sm bg-orange-700 px-3 py-1 rounded-full">BD Delivery Service</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Track Parcel Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-orange-600 mb-4">Track Your Parcel</h2>
          <form onSubmit={handleTracking} className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter Tracking ID (e.g. FTX-123456)"
              value={searchTrackingId}
              onChange={(e) => setSearchTrackingId(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:border-orange-500 text-sm"
              required
            />
            <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-orange-700">
              {trackingLoading ? 'Searching...' : 'Track'}
            </button>
          </form>

          {/* Tracking Result */}
          {trackingError && <p className="text-red-500 text-sm">{trackingError}</p>}
          {searchResult && (
            <div className="mt-4 p-4 bg-orange-50 rounded-xl border border-orange-100 text-sm space-y-2">
              <p><strong>Tracking ID:</strong> <span className="text-orange-600 font-bold">{searchResult.tracking_id}</span></p>
              <p><strong>Customer:</strong> {searchResult.customer_name}</p>
              <p><strong>Status:</strong> <span className="bg-orange-200 text-orange-800 px-2 py-0.5 rounded text-xs font-bold">{searchResult.status}</span></p>
              <p><strong>Destination:</strong> {searchResult.district}</p>
              <p><strong>COD Amount:</strong> {searchResult.cod_amount} TK</p>
            </div>
          )}
        </div>

        {/* Book Parcel Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-orange-600 mb-4">Book New Parcel</h2>
          
          {createdTrackingId && (
            <div className="mb-4 p-4 bg-green-50 text-green-800 rounded-xl border border-green-200 text-sm">
              🎉 Parcel Booked Successfully! <br />
              Your Tracking ID is: <strong className="text-green-700 text-base">{createdTrackingId}</strong>
            </div>
          )}

          <form onSubmit={handleBooking} className="space-y-3 text-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Customer Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border rounded-xl" required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Phone Number</label>
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-2 border rounded-xl" required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">District</label>
              <select value={district} onChange={(e) => setDistrict(e.target.value)} className="w-full px-3 py-2 border rounded-xl bg-white">
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Full Delivery Address</label>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="w-full px-3 py-2 border rounded-xl h-16" required></textarea>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">COD Amount (TK)</label>
              <input type="number" value={cod} onChange={(e) => setCod(e.target.value)} className="w-full px-3 py-2 border rounded-xl" required />
            </div>
            <button type="submit" disabled={bookingLoading} className="w-full bg-orange-600 text-white py-2.5 rounded-xl font-bold hover:bg-orange-700 transition-colors mt-2">
              {bookingLoading ? 'Booking Parcel...' : 'Confirm Booking'}
            </button>
          </form>
        </div>

      </div>
    </main>
  )
}