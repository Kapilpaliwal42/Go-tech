import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const maxLength = 180;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name *"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:outline-none transition-colors placeholder:text-gray-400"
        />
        {/* Email */}
        <input
          type="email"
          placeholder="Email address *"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:outline-none transition-colors placeholder:text-gray-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone number (optional)"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:outline-none transition-colors placeholder:text-gray-400"
        />
        {/* Company */}
        <input
          type="text"
          placeholder="Company name (optional)"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:outline-none transition-colors placeholder:text-gray-400"
        />
      </div>

      <div className="relative">
        {/* Message */}
        <textarea
          placeholder="How can we help you? *"
          required
          rows={4}
          maxLength={maxLength}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:outline-none transition-colors placeholder:text-gray-400 resize-none"
        />
        {/* Character Counter */}
        <div className="text-right text-xs text-gray-400 mt-1">
          {message.length} / {maxLength}
        </div>
      </div>

      {/* Send Button */}
      <button
        type="submit"
        className="w-full md:w-1/3 bg-[#f2a93b] hover:bg-[#e0962d] text-white font-bold py-3 px-6 rounded-lg transition-all uppercase tracking-wider shadow-sm"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;