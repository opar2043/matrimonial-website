import React from 'react'

const Benefits = () => {
  return (

        <div className="bg-gradient-to-b from-violet-100 via-violet-200 to-violet-300 text-violet-700 p-6 md:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-4">Benefits</h2>
          <p className="text-center text-lg mb-6">
            Discover the exclusive benefits of our platform that make your journey to finding a life partner seamless and enjoyable.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white text-violet-600 p-4 rounded-xl shadow-md">
              <h3 className="font-semibold text-xl">✅ Verified Profiles</h3>
              <p className="text-sm mt-2">All profiles are thoroughly verified to ensure safety and authenticity.</p>
            </div>
            <div className="bg-white text-violet-600 p-4 rounded-xl shadow-md">
              <h3 className="font-semibold text-xl">🔒 Secure Communication</h3>
              <p className="text-sm mt-2">Chat safely within our platform without sharing personal details.</p>
            </div>
            <div className="bg-white text-violet-600 p-4 rounded-xl shadow-md">
              <h3 className="font-semibold text-xl">💡 Personalized Matches</h3>
              <p className="text-sm mt-2">Advanced algorithms connect you with the most compatible partners.</p>
            </div>
            <div className="bg-white text-violet-600 p-4 rounded-xl shadow-md">
              <h3 className="font-semibold text-xl">💬 Expert Relationship Advice</h3>
              <p className="text-sm mt-2">Get guidance from experts to build a successful relationship.</p>
            </div>
            <div className="bg-white text-violet-600 p-4 rounded-xl shadow-md">
              <h3 className="font-semibold text-xl">📅 Exclusive Events</h3>
              <p className="text-sm mt-2">Participate in virtual matchmaking sessions and meet like-minded people.</p>
            </div>
            <div className="bg-white text-violet-600 p-4 rounded-xl shadow-md">
              <h3 className="font-semibold text-xl">🎉 Success Stories</h3>
              <p className="text-sm mt-2">Read inspiring testimonials from couples who found love on our platform.</p>
            </div>
          </div>
        </div>
  )
}

export default Benefits