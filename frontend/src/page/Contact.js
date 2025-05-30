// import React from "react";

// const Contact = () => {
//   return <div>contact</div>;
// };

// export default Contact;




import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
        📞 Contact Us
      </h1>

      <p className="text-center mb-8 text-lg">
        We'd love to hear from you! Fill out the form below or reach out
        directly.
      </p>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            placeholder="Write your message..."
            rows={5}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="text-center mt-10 text-gray-700">
        <p className="text-lg font-semibold">📞 1800 - 120 - 7777</p>
        <p className="text-lg">📧 aanazoor@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;

