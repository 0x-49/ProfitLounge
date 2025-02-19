import { motion } from "framer-motion";
import { SiTiktok, SiInstagram, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Profit Lounge</h3>
            <p className="mb-4 text-gray-400 max-w-md">
              Join the #1 exclusive reselling community and start profiting from our daily deals, price errors, and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="https://tiktok.com/@loungeprofit" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <SiTiktok className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/profit_lounge" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <SiInstagram className="w-6 h-6" />
              </a>
              <a href="https://x.com/profit_lounge" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <SiX className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@JoinProfitLounge.com" className="hover:text-white">
                  info@JoinProfitLounge.com
                </a>
              </li>
              <li>
                <a href="tel:8009826344" className="hover:text-white">
                  (800) 982-6344
                </a>
              </li>
              <li className="text-gray-400">
                8215 Roswell Rd
                <br />
                Atlanta, GA 30350
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white">Features</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white">Testimonials</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">FAQ</a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Profit Lounge. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}