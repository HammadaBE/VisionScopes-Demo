import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Trial",
    description: "Free trial valid for one week",
    price: "$0",
    period: {
      monthly: "per month",
      annually: "per year",
      weekly: "per week",
      custom: "contact for pricing",
    },
    features: [
      "Up to 2 video uploads",
      "720p resolution output",
      "Standard processing speed",
      "Basic editing tools",
      "Email support",
    ],
    buttonText: "Get Started",
    isPopular: false,
  },
  {
    name: "Starter",
    description: "Perfect for small projects and experimentation",
    price: "$29",
    period: {
      monthly: "per month",
      annually: "per year",
      weekly: "per week",
    },
    features: [
      "Up to 5 video uploads per month",
      "720p resolution output",
      "Standard processing speed",
      "Basic editing tools",
      "Email support",
    ],
    buttonText: "Get Started",
    isPopular: false,
  },
  {
    name: "Professional",
    description: "Ideal for creators and small businesses",
    price: "$89",
    period: {
      monthly: "per month",
      annually: "per year",
      weekly: "per week",
      custom: "contact for pricing",
    },
    features: [
      "Up to 20 video uploads per month",
      "1080p resolution output",
      "Priority processing",
      "Advanced editing tools",
      "Scene optimization features",
      "Material customization",
      "Priority email & chat support",
    ],
    buttonText: "Choose Professional",
    isPopular: true,
  },
  {
    name: "Enterprise",
    description: "For teams and high-volume needs",
    price: "Custom",
    period: {
      monthly: "per month",
      annually: "per year",
      weekly: "per week",
      custom: "contact for pricing",
    },
    features: [
      "Unlimited video uploads",
      "4K resolution output",
      "Fastest processing speed",
      "Complete editing suite",
      "API access",
      "Custom export formats",
      "Dedicated support manager",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-tech-blue">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs.
          </p>

          <div className="inline-flex items-center bg-tech-dark p-1 rounded-lg border border-gray-800 mb-8">
            <button
              className={`px-4 py-2 rounded ${
                !isAnnual ? "bg-tech-purple text-white" : "text-gray-400"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded ${
                isAnnual ? "bg-tech-purple text-white" : "text-gray-400"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual (20% off)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-tech-dark rounded-xl overflow-hidden border ${
                plan.isPopular
                  ? "border-tech-purple shadow-lg shadow-tech-purple/10"
                  : "border-gray-800"
              } relative`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-tech-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 h-12">{plan.description}</p>
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold">
                    {isAnnual
                      ? plan.price !== "Custom"
                        ? `$${(parseFloat(plan.price.replace("$", "")) * 0.8 * 12).toFixed(2)}`
                        : "Custom"
                      : plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">
                    {plan.name === "Trial"
                      ? "one week"
                      : plan.name === "Enterprise"
                        ? "contact for pricing"
                        : typeof plan.period === "object"
                          ? isAnnual
                            ? plan.period.annually
                            : plan.period.monthly
                          : ""}
                  </span>
                </div>

                <Button
                  className={`w-full ${
                    plan.isPopular
                      ? "bg-tech-purple hover:bg-tech-violet"
                      : "bg-gray-800 hover:bg-gray-700"
                  } text-white`}
                >
                  {plan.buttonText}
                </Button>
              </div>

              <div className="border-t border-gray-800 p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-tech-purple mr-3 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
