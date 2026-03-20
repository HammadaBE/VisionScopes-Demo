import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const examples = [
  {
    title: "Living Room to 3D Space",
    description:
      "A standard home video transformed into a navigable 3D environment.",
    color: "from-tech-purple/20 to-tech-dark",
  },
  {
    title: "City Street to 3D Model",
    description:
      "Smartphone footage of a city block converted to a detailed 3D asset.",
    color: "from-tech-teal/20 to-tech-dark",
  },
  {
    title: "Nature Walk to Virtual World",
    description:
      "A forest trail hike transformed into an explorable virtual environment.",
    color: "from-tech-purple/20 to-tech-dark",
  },
];

const ExamplesSection = () => {
  return (
    <section id="examples" className="py-20 bg-tech-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out these examples of 2D videos transformed into immersive 3D
            environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-gray-800 hover:border-tech-purple/50 transition-all"
            >
              {/* Example video thumbnail */}
              <div
                className={`aspect-[4/3] bg-gradient-to-b ${example.color} flex items-center justify-center relative group cursor-pointer`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    className="w-16 h-16 rounded-full bg-tech-purple/20 backdrop-blur-sm group-hover:bg-tech-purple/40 transition-colors flex items-center justify-center"
                  >
                    <Play className="h-6 w-6 text-white" />
                  </Button>
                </div>
              </div>

              <div className="p-6 bg-tech-blue">
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <p className="text-gray-400">{example.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-tech-purple hover:bg-tech-violet text-white px-6">
            View More Examples
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
