import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, DollarSign, TrendingUp, ArrowRight, ShoppingCart } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Shield className="w-4 h-4" />
            <span>Trusted by 10,000+ Successful Resellers</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Turn Price Errors Into
            <span className="block text-primary">Massive Profits</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Access exclusive deals, price errors, and money-making opportunities with our
            cutting-edge technology and dedicated team of 50+ expert staff.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Start Making Money Today
              <DollarSign className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              Watch Success Stories
              <TrendingUp className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Active Members", value: "10,000+", icon: ShoppingCart },
            { label: "Daily Deals", value: "50+", icon: TrendingUp },
            { label: "Success Rate", value: "97%", icon: ArrowRight },
            { label: "Total Profit Generated", value: "$10M+", icon: DollarSign },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-card hover:bg-accent transition-colors">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technology Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Avg. Detection Time", value: "500ms" },
            { label: "Alert Delivery", value: "<1s" },
            { label: "Accuracy Rate", value: "99.9%" },
            { label: "Uptime", value: "100%" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-card hover:bg-accent transition-colors">
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
