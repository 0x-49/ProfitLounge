import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Zap, Users, Rocket, Target, Shield } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Get instant notifications for price errors, clearance deals, and exclusive opportunities."
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Join a supportive network of successful resellers and learn from their experience."
  },
  {
    icon: Zap,
    title: "High-Speed Monitors",
    description: "Our cutting-edge technology spots profitable deals before anyone else."
  },
  {
    icon: Target,
    title: "Targeted Deals",
    description: "Access specialized sections for major retailers like Lowe's and Home Depot."
  },
  {
    icon: Shield,
    title: "24/7 Support",
    description: "Get help anytime with our dedicated customer support team."
  },
  {
    icon: Rocket,
    title: "Quick ROI",
    description: "Members report making their membership fee back within days."
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
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform combines technology, community, and expertise to help you maximize your reselling profits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
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
