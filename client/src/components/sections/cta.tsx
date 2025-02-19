import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Reselling Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join thousands of successful resellers who are already profiting from our exclusive deals and community.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="gap-2"
          >
            Get Started Now <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="mt-6 text-sm opacity-75">
            30-day satisfaction guarantee. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
