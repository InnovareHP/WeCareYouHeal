import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Heart } from "lucide-react";
import { Button } from "../ui/button";

const QualityCareSection = () => {
  return (
    <section className="w-full py-20 md:py-28 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Why Choose Us
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Quality Care
            </motion.h2>

            <motion.h3
              className="text-2xl md:text-3xl text-gray-600 font-light"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your Health, Our Priority
            </motion.h3>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We provide compassionate, professional healthcare services
              tailored to your needs. Our dedicated team ensures the highest
              standards of care for you and your loved ones.
            </motion.p>

            <motion.div
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              viewport={{ once: true }}
            >
              {[
                "Staff all over United States",
                "Variety of Services",
                "Flexible Staffing Solutions",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button className="bg-teal-700 text-white hover:bg-teal-800 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mt-4 flex items-center gap-2">
                <Link to="/staffing">Apply Now</Link>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src="/image/quality-care.webp"
              alt="Quality Care"
              className="w-full h-full object-cover rounded-3xl shadow-2xl object-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualityCareSection;
