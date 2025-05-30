import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
        🏠 About Us
      </h1>
      <p className="text-lg mb-4 leading-relaxed">
        At <strong>Aana Zoor</strong>, we believe your time is precious — and so is your comfort.
        That’s why we are committed to providing <strong>the fastest delivery</strong> right to your doorstep.
      </p>
      <p className="text-lg mb-4 leading-relaxed">
        Whether you’re craving delicious meals, fresh groceries, or daily essentials, our mission is simple:
        <strong> bring what you need, when you need it</strong> — without delays.
        We’ve streamlined every step of our process to ensure your order reaches you quickly, safely, and hassle-free.
      </p>
      <p className="text-lg mb-4 leading-relaxed">
        Powered by a smart logistics system and a passionate local delivery team,
        we guarantee speed without compromising quality.
        With just a few clicks, your order is on its way —
        <strong> fast, fresh, and right to your home</strong>.
      </p>
      <p className="text-lg leading-relaxed font-semibold text-center mt-8">
        Thank you for choosing us to be a part of your daily life. <br />
        <span className="text-red-500">Fast. Reliable. Home Delivered.</span>
      </p>

      <div className="text-center mt-10 border-t pt-6">
        <p className="text-lg">
          📞 <strong>Contact:</strong> 1800-120-7777
        </p>
        <p className="text-lg">
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:aanazoor@gmail.com" className="text-blue-600 underline">
            aanazoor@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
