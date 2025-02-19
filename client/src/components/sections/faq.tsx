import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Profit Lounge different from other reselling groups?",
    answer: "Profit Lounge combines cutting-edge technology, a 50+ member expert staff, and a supportive community. We provide real-time alerts, exclusive deals, and comprehensive training to ensure your success."
  },
  {
    question: "How quickly can I expect to make my money back?",
    answer: "Many members report making their membership fee back within their first week. However, results vary based on individual effort and market conditions."
  },
  {
    question: "Do I need previous reselling experience?",
    answer: "No experience needed! Our 'Getting Started' course and supportive community will guide you through everything you need to know to start reselling successfully."
  },
  {
    question: "What kind of deals can I expect to find?",
    answer: "Members get access to daily deals, price errors, clearance finds, and exclusive opportunities across major retailers like Lowe's and Home Depot."
  },
  {
    question: "Is there a minimum time commitment required?",
    answer: "No minimum commitment required. You can participate as much or as little as you want, though more active members typically see better results."
  }
];

export default function FAQ() {
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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, reach out to our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
