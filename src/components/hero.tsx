"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const router = useRouter();

  const handleSignUp = (role: "interviewer" | "candidate") => {
    router.push(`/auth/signup?role=${role}`);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Revolutionize Your{" "}
        <span className="text-blue-600">Online Interviews</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Seamlessly conduct, schedule, and record interviews with real-time code
        collaboration and screen sharing.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => handleSignUp("interviewer")}
        >
          I&apos;m an Interviewer <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => handleSignUp("candidate")}
        >
          I&apos;m a Candidate <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
