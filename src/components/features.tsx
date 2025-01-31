import { Code, Monitor, Calendar, Video } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Live Code Collaboration",
    description:
      "Write and review code in real-time with syntax highlighting and multiple language support.",
  },
  {
    icon: Monitor,
    title: "Screen Sharing",
    description:
      "Share your screen effortlessly to demonstrate concepts or review projects together.",
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description:
      "Streamline the interview process with our intuitive scheduling system.",
  },
  {
    icon: Video,
    title: "Interview Recording",
    description:
      "Record interviews for later review or to share with team members.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Powerful Features for Seamless Interviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
