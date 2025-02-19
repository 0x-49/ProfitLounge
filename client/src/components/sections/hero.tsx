import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-primary/[0.02]" />

      <div className="container mx-auto px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-1 bg-primary/10 rounded-full"
          >
            <span className="text-primary font-semibold">Join 10,000+ Successful Resellers Today</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Turn Price Errors Into
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-primary"
            >
              Massive Profits
            </motion.span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Access exclusive deals, price errors, and money-making opportunities with our
            <span className="font-semibold text-primary"> cutting-edge technology </span>
            and
            <span className="font-semibold text-primary"> 50+ expert staff</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              Start Making Money <DollarSign className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2 text-lg px-8 py-6">
              Watch Success Stories <TrendingUp className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { label: "Active Members", value: "10,000+", icon: ShoppingCart },
              { label: "Daily Deals", value: "50+", icon: TrendingUp },
              { label: "Success Rate", value: "97%", icon: ArrowRight },
              { label: "Total Profit Generated", value: "$10M+", icon: DollarSign },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center p-4 rounded-lg hover:bg-white/50 transition-all"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-sm text-gray-500"
          >
            Trusted by resellers from Home Depot, Lowe's, and major retailers
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}