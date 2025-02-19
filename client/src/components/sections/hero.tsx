import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, ShoppingCart, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-primary/[0.02] animate-[grid_20s_linear_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />
      </div>

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
            className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm"
          >
            <span className="text-primary font-semibold flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Trusted by 10,000+ Successful Resellers
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 animate-gradient">
              Turn Price Errors Into
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-primary inline-block"
            >
              Massive Profits
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Access <span className="font-semibold text-primary">exclusive deals</span>, 
            <span className="font-semibold text-primary"> price errors</span>, and 
            <span className="font-semibold text-primary"> money-making opportunities</span> with our
            cutting-edge technology and dedicated team of 50+ expert staff.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all group">
              Start Making Money Today 
              <DollarSign className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2 text-lg px-8 py-6 group">
              Watch Success Stories 
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                className="text-center p-4 rounded-lg hover:bg-white/50 transition-all group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/5 rounded-full scale-[1.8] group-hover:scale-[2.2] transition-transform" />
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 relative z-10" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
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
            className="mt-12 text-sm text-gray-500 flex items-center justify-center gap-4"
          >
            <span>Trusted by resellers from</span>
            <div className="flex items-center gap-4">
              <span className="font-semibold">Home Depot</span>
              <span>•</span>
              <span className="font-semibold">Lowe's</span>
              <span>•</span>
              <span className="font-semibold">Major Retailers</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}