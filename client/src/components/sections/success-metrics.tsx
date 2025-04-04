import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, ShoppingBag, TrendingUp } from "lucide-react";

const metrics = [
  {
    title: "Total Community Profits",
    value: "$10M+",
    growth: "+127%",
    description: "Generated by our members in 2024",
    icon: DollarSign
  },
  {
    title: "Active Members",
    value: "10,000+",
    growth: "+45%",
    description: "Growing community of resellers",
    icon: Users
  },
  {
    title: "Deals Shared",
    value: "50K+",
    growth: "+89%",
    description: "Profitable opportunities in 2024",
    icon: ShoppingBag
  },
  {
    title: "Success Rate",
    value: "97%",
    growth: "+12%",
    description: "Members reporting positive ROI",
    icon: TrendingUp
  }
];

export default function SuccessMetrics() {
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
            Real-Time Community Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track our community's growth and success with live metrics. These numbers represent real profits and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className="w-8 h-8 text-primary" />
                    <span className="text-green-500 text-sm font-semibold">
                      {metric.growth}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{metric.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <p className="text-sm text-gray-500">{metric.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500">
            Data updated in real-time based on member activity and reported profits
          </p>
        </motion.div>
      </div>
    </section>
  );
}
