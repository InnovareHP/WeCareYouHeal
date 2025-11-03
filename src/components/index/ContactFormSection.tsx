"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 md:py-28 w-full"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info and Promise */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="text-yellow-300 font-semibold text-sm tracking-wider uppercase mb-2 inline-block">
                Get Started
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to staff your facility?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, text: "(984) 327-5491" },
                { icon: Mail, text: "gina@wecareyouheal.com" },
                { icon: MapPin, text: "Chapel Hill, NC 27514" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="bg-teal-600/20 p-3 rounded-lg">
                    <item.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">Quality Care Promise</h3>
                <p className="text-teal-50">
                  We're committed to providing exceptional service and support
                  to every client.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form + Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="p-4 w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="p-4 w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="p-4 w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Decorative Image on Right */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
