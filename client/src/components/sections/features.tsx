import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Bell, 
  Zap, 
  Users, 
  Rocket, 
  Target, 
  Shield,
  ShoppingBag,
  Banknote,
  Store,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Instant Deal Alerts",
    description: "Get real-time notifications for price errors, clearance deals, and exclusive opportunities. Never miss a profitable deal.",
    color: "text-blue-500"
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Join 10,000+ successful resellers. Learn proven strategies and get support from experienced members.",
    color: "text-purple-500"
  },
  {
    icon: Zap,
    title: "Lightning-Fast Monitors",
    description: "Our advanced technology spots profitable deals seconds before anyone else, giving you the competitive edge.",
    color: "text-yellow-500"
  },
  {
    icon: Store,
    title: "Retailer Specialists",
    description: "Dedicated sections for major retailers like Lowe's and Home Depot with expert staff guidance.",
    color: "text-green-500"
  },
  {
    icon: Shield,
    title: "24/7 Premium Support",
    description: "Get instant help from our dedicated support team whenever you need it. We're here to ensure your success.",
    color: "text-red-500"
  },
  {
    icon: Banknote,
    title: "Proven ROI",
    description: "Members typically make back their membership fee within days through our exclusive deals.",
    color: "text-emerald-500"
  },
  {
    icon: ShoppingBag,
    title: "Bulk Buying Guide",
    description: "Learn advanced techniques for securing multiple units and maximizing profits on every deal.",
    color: "text-indigo-500"
  },
  {
    icon: Clock,
    title: "Time-Saving Tools",
    description: "Automated tools and monitors do the hard work for you, just wait for the alerts and profit.",
    color: "text-orange-500"
  }
];

export default function Features() {
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
            Everything You Need to 
            <span className="text-primary"> Maximize Profits</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform combines cutting-edge technology, community expertise, and proven strategies to help you succeed in reselling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-opacity-10 flex items-center justify-center mb-4 ${feature.color.replace('text-', 'bg-')}/10`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}