import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = [
  "Daily Deal Alerts",
  "Price Error Notifications",
  "High-Speed Monitors",
  "Expert Community Access",
  "24/7 Support",
  "Exclusive Retailer Sections",
  "Private Discord Access",
  "Getting Started Course"
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Reselling Journey Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our exclusive community and start making money with our proven system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
              Most Popular
            </div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl font-bold">Premium Membership</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$90</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" size="lg">
                Get Started Now
              </Button>
              <p className="text-center text-sm text-gray-500 mt-4">
                30% Commission on Referrals
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
