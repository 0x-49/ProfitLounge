import { motion } from "framer-motion";
import Footer from "@/components/sections/footer";
import Header from "@/components/layout/header";

export default function Terms() {
  return (
    <div className="min-h-screen pt-16">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Profit Lounge's services, you agree to be bound by these Terms of Service.
              Our services are available only to individuals who can form legally binding contracts under applicable law.
            </p>

            <h2>2. Membership and Subscription</h2>
            <p>
              Profit Lounge offers a membership-based service that provides access to deal alerts, community features,
              and exclusive content. Your subscription will automatically renew unless cancelled before the renewal date.
            </p>

            <h2>3. User Conduct</h2>
            <p>
              Members agree to use our services in compliance with all applicable laws and regulations.
              Any abuse, harassment, or fraudulent activity will result in immediate termination of membership.
            </p>

            <h2>4. Disclaimer</h2>
            <p>
              Profit Lounge does not guarantee specific profits or results. Success in reselling depends on
              various factors including market conditions, timing, and individual effort.
            </p>

            {/* Add more sections as needed */}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
