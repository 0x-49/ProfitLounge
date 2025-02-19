import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SearchCheck, BellRing, TrendingUp, LineChart } from "lucide-react";

const steps = [
  {
    icon: SearchCheck,
    title: "Join the Community",
    description: "Sign up and get instant access to our exclusive Discord community and deal-finding tools."
  },
  {
    icon: BellRing,
    title: "Receive Deal Alerts",
    description: "Get real-time notifications for price errors, clearance deals, and profitable opportunities."
  },
  {
    icon: TrendingUp,
    title: "Act Fast & Profit",
    description: "Use our high-speed monitors to be first in line for the best deals and maximize your returns."
  },
  {
    icon: LineChart,
    title: "Scale Your Business",
    description: "Learn from the community, reinvest your profits, and grow your reselling empire."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Profit Lounge Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our proven system to start generating profits through reselling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full relative">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <CardContent className="pt-8 p-6">
                  <step.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
