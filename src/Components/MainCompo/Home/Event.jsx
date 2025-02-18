import React from "react";

const Event = () => {
  return (
    <div className="bg-white my-5 text-violet-700 p-6 md:p-10 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Join Our Exclusive Matrimonial Events</h2>
      <p className="text-center text-lg mb-6">
        Participate in our online and offline events to meet like-minded individuals and build meaningful connections.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
      <div className="bg-violet-700 text-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold text-xl">💜 Virtual Matchmaking Sessions</h3>
          <p className="text-sm mt-2">Find your perfect match through our personalized online matchmaking events.</p>
        </div>
        <div className="bg-violet-700 text-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold text-xl">💜 Pre-Marriage Counseling Workshops</h3>
          <p className="text-sm mt-2">Gain valuable insights from relationship experts to build a strong foundation.</p>
        </div>
        <div className="bg-violet-700 text-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold text-xl">💜 Success Story Meet-and-Greets</h3>
          <p className="text-sm mt-2">Hear inspiring love stories and connect with happy couples from our platform.</p>
        </div>
        <div className="bg-violet-700 text-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold text-xl">💜 Communication and trust-building</h3>
          <p className="text-sm mt-2">Hear inspiring love stories and connect with happy couples from our platform.</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
