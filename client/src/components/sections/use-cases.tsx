import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, ArrowLeft, ArrowRight, Tag, Package, Truck } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const useCases = [
  //#1
  {
    title: "Home Depot Clearance Find",
    profit: "$847",
    investment: "$153",
    timeframe: "2 days",
    description: "Member found Phillips Hue lights marked down to $5 each, regular price $100. Bought 20 units and sold them for $50 each on eBay.",
    icon: Tag
  },
  //#2
  {
    title: "Lowe's Price Error",
    profit: "$1,230",
    investment: "$270",
    timeframe: "1 week",
    description: "Caught a pricing mistake on premium power tools. Purchased 6 units at $45 each, sold locally for $250 each.",
    icon: Package
  },
  //#3
  {
    title: "Target Camera Deal",
    profit: "$720",
    investment: "$330",
    timeframe: "3 days",
    description: "Canon mirrorless cameras marked down 70%. Bought 3 units at $110 each, sold for $350 each on Amazon.",
    icon: Truck
  },
  //#4
  {
    title: "Walmart Electronics",
    profit: "$560",
    investment: "$240",
    timeframe: "5 days",
    description: "Gaming consoles clearance deal. Purchased 4 units at $60 each, sold for $200 each through Facebook Marketplace.",
    icon: Tag
  },
  //#5
  {
    title: "Best Buy Bundle",
    profit: "$950",
    investment: "$450",
    timeframe: "1 week",
    description: "Smart home security bundle pricing error. Bought 5 kits at $90 each, sold for $280 each online.",
    icon: Package
  },
  //#6
  {
    title: "Amazon Price Drop",
    profit: "$680",
    investment: "$120",
    timeframe: "2 days",
    description: "Premium headphones price mistake. Secured 4 units at $30 each, sold for $200 each on eBay.",
    icon: Truck
  },
  //#7
  {
    title: "Office Depot Find",
    profit: "$890",
    investment: "$310",
    timeframe: "4 days",
    description: "High-end office chairs clearance. Purchased 5 chairs at $62 each, sold for $240 each locally.",
    icon: Tag
  },
  //#8
  {
    title: "Costco Bulk Deal",
    profit: "$1,400",
    investment: "$600",
    timeframe: "1 week",
    description: "Premium coffee maker pricing error. Bought 10 units at $60 each, sold for $200 each through multiple channels.",
    icon: Package
  },
  //#9
  {
    title: "Sam's Club Error",
    profit: "$775",
    investment: "$225",
    timeframe: "3 days",
    description: "Robot vacuum clearance find. Acquired 5 units at $45 each, sold for $200 each on Amazon.",
    icon: Truck
  },
  //#10
  {
    title: "Staples Clearance",
    profit: "$640",
    investment: "$160",
    timeframe: "4 days",
    description: "Gaming chairs massive discount. Bought 4 chairs at $40 each, sold for $200 each on Facebook Marketplace.",
    icon: Tag
  },
  //#11
  {
    title: "Microcenter Find",
    profit: "$1,100",
    investment: "$400",
    timeframe: "6 days",
    description: "Graphics cards pricing error. Purchased 4 cards at $100 each, sold for $375 each to local buyers.",
    icon: Package
  },
  //#12
  {
    title: "Dick's Sporting Goods",
    profit: "$920",
    investment: "$280",
    timeframe: "5 days",
    description: "Premium treadmill clearance. Bought 2 units at $140 each, sold for $600 each through local pickup.",
    icon: Truck
  }
];

export default function UseCases() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

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
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-green-100 rounded-full">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-semibold">Real Success Stories</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See How Members Profit Daily
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through real examples of profitable deals our members discover and execute. From price errors to clearance finds, success stories happen daily.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <useCase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-gray-600 mb-4">{useCase.description}</p>
                      <div className="border-t pt-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <div className="text-green-600 font-bold text-lg">{useCase.profit}</div>
                            <div className="text-sm text-gray-500">Profit</div>
                          </div>
                          <div>
                            <div className="text-gray-900 font-bold text-lg">{useCase.investment}</div>
                            <div className="text-sm text-gray-500">Investment</div>
                          </div>
                          <div>
                            <div className="text-gray-900 font-bold text-lg">{useCase.timeframe}</div>
                            <div className="text-sm text-gray-500">Timeframe</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="rounded-full"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {useCases.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex ? 'bg-primary w-4' : 'bg-gray-300'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
