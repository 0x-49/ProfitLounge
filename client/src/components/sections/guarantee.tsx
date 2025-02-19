import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, DollarSign, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const guarantees = [
  {
    icon: Clock,
    title: "30-Day Trial Period",
    description: "Test drive our platform risk-free for a full month. If you're not satisfied, we'll refund your membership."
  },
  {
    icon: DollarSign,
    title: "ROI Guarantee",
    description: "Most members make back their membership fee within the first week through our exclusive deals."
  },
  {
    icon: Shield,
    title: "Secure Investment",
    description: "Your membership is protected by our satisfaction guarantee and dedicated support team."
  },
  {
    icon: ThumbsUp,
    title: "No Long-Term Contract",
    description: "Cancel anytime with no questions asked. We earn your business month after month."
  }
];

export default function Guarantee() {
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
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-green-100 rounded-full">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-semibold">Risk-Free Guarantee</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start With Complete Peace of Mind
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're so confident in our platform that we offer a comprehensive satisfaction guarantee. Your success is our priority.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <guarantee.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{guarantee.title}</h3>
                  <p className="text-gray-600">{guarantee.description}</p>
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
          className="max-w-3xl mx-auto text-center bg-white p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-600 mb-6">
            Join thousands of successful resellers who are already profiting from our platform. Start risk-free today.
          </p>
          <Button size="lg" className="gap-2">
            Start Your Risk-Free Trial <DollarSign className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
