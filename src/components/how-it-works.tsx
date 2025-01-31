import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Sign Up",
    description: "Create your account as an interviewer or candidate.",
  },
  {
    title: "Schedule or Join",
    description: "Set up interview slots or accept interview invitations.",
  },
  {
    title: "Conduct Interview",
    description:
      "Use our platform for live coding, screen sharing, and discussion.",
  },
  {
    title: "Review and Decide",
    description: "Access recordings and notes to make informed decisions.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        How It Works
      </h2>
      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start mb-8">
            <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
