import { motion } from "framer-motion";
import Footer from "@/components/sections/footer";
import Header from "@/components/layout/header";

export default function Privacy() {
  return (
    <div className="min-h-screen pt-16">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including name, email address,
              and payment information when you register for our services.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide and improve our services,
              process your payments, send notifications, and communicate with you.
            </p>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties.
              We may share your information with service providers who assist in operating our platform.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information
              from unauthorized access, alteration, or disclosure.
            </p>

            {/* Add more sections as needed */}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
