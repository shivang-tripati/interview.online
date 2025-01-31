import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Manager",
    company: "TechCorp",
    content:
      "interview.online has streamlined our hiring process. The live coding feature is a game-changer!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "StartupX",
    content:
      "As a candidate, I found the platform intuitive and it helped me showcase my skills effectively.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">
              &quot;{testimonial.content}&quot;
            </p>
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
