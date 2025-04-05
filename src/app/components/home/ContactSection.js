'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    if (res.ok) {
      setStatus('SUCCESS');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Left Side - Form */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <textarea
              name="message"
              placeholder="Message Here"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              required
            />
            <button
              type="submit"
              className="mt-4 border border-black px-6 py-2 hover:bg-black hover:text-white transition-all"
            >
              SUBMIT
            </button>
            {status === 'SUCCESS' && (
              <p className="text-green-500 mt-2">Message sent successfully!</p>
            )}
            {status === 'ERROR' && (
              <p className="text-red-500 mt-2">
                Something went wrong. Try again!
              </p>
            )}
          </form>
        </div>

        {/* Right Side - Map */}
        <div className="flex justify-center md:justify-end">
          <div className="rounded-full overflow-hidden w-[400px] h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.875521267725!2d77.2409917!3d28.5508795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f597b20f7d%3A0x798f510cdd869b9b!2sGreater%20Kailash%20II%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1712313957579!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
