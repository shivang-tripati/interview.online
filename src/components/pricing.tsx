import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$29",
    features: [
      "Up to 10 interviews/month",
      "Basic code editor",
      "Screen sharing",
      "24/7 support",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$99",
    features: [
      "Unlimited interviews",
      "Advanced code editor",
      "Screen sharing",
      "Interview recording",
      "Custom branding",
      "Priority support",
    ],
    cta: "Go Pro",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Choose Your Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">
              {plan.price}
              <span className="text-lg font-normal text-gray-500">/month</span>
            </p>
            <ul className="mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center mb-2">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">{plan.cta}</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
