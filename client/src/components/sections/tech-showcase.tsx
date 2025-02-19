import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Zap, Terminal, Webhook, Database, Cpu, Server, LineChart } from "lucide-react";

const techFeatures = [
  {
    icon: Terminal,
    title: "Advanced Algorithms",
    description: "Our proprietary price detection system processes millions of data points per second.",
    metric: "500ms",
    metricLabel: "Avg. Detection Time"
  },
  {
    icon: Webhook,
    title: "Real-Time Webhooks",
    description: "Instant notifications through multiple channels including Discord and mobile.",
    metric: "< 1s",
    metricLabel: "Alert Delivery"
  },
  {
    icon: Database,
    title: "Smart Filtering",
    description: "Machine learning algorithms eliminate false positives and identify the best deals.",
    metric: "99.9%",
    metricLabel: "Accuracy Rate"
  },
  {
    icon: Server,
    title: "Distributed Network",
    description: "Multiple server locations ensure you never miss a deal anywhere.",
    metric: "100%",
    metricLabel: "Uptime"
  }
];

export default function TechShowcase() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-primary/20 rounded-full">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold">Cutting-Edge Technology</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by Advanced Technology
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our sophisticated monitoring system gives you the competitive edge in finding and securing the best deals before anyone else.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gray-800 border-gray-700 hover:bg-gray-700/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <div className="pt-4 border-t border-gray-700">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {feature.metric}
                    </div>
                    <div className="text-sm text-gray-400">
                      {feature.metricLabel}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-gray-800 rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <LineChart className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-gray-400">Continuous Monitoring</div>
            </div>
            <div className="text-center p-4">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">0.5s</div>
              <div className="text-gray-400">Average Response Time</div>
            </div>
            <div className="text-center p-4">
              <Bell className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">100k+</div>
              <div className="text-gray-400">Daily Alerts Sent</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
