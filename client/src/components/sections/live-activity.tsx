import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Clock, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Simulated live activity data
const activities = [
  {
    id: 1,
    user: "Alex S.",
    action: "just profited",
    amount: "$847",
    item: "Home Depot clearance deal",
    timeAgo: "2m ago",
    icon: DollarSign
  },
  {
    id: 2,
    user: "Michelle K.",
    action: "purchased",
    amount: "12 units",
    item: "Lowe's price error find",
    timeAgo: "5m ago",
    icon: ShoppingBag
  },
  {
    id: 3,
    user: "James R.",
    action: "made",
    amount: "$1,230",
    item: "from bulk buying opportunity",
    timeAgo: "7m ago",
    icon: DollarSign
  },
  {
    id: 4,
    user: "Sarah M.",
    action: "saved",
    amount: "$590",
    item: "using member discount",
    timeAgo: "12m ago",
    icon: DollarSign
  }
];

export default function LiveActivity() {
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
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold">Live Community Activity</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-Time Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Watch our community members profit in real-time. These are actual deals and savings happening right now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gray-800 border-gray-700 hover:bg-gray-700/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{activity.user}</h3>
                      <p className="text-sm text-gray-400">{activity.timeAgo}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    {activity.action}{" "}
                    <span className="text-primary font-semibold">
                      {activity.amount}
                    </span>{" "}
                    {activity.item}
                  </p>
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
          className="text-center"
        >
          <p className="text-xl text-gray-400 mb-6">
            Don't miss out on these opportunities. Join now and start profiting today!
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            Join the Community <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
