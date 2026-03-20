import React from "react";

const steps = [
  {
    number: "01",
    title: "Upload Your Video",
    description:
      "Simply upload any 2D video file through our intuitive interface. No preprocessing or special recording techniques required.",
  },
  {
    number: "02",
    title: "AI Processing",
    description:
      "Our advanced neural networks analyze every frame to extract depth, motion, and texture information from your video.",
  },
  {
    number: "03",
    title: "3D Scene Construction",
    description:
      "The system builds a complete 3D model with accurate geometry, textures, and lighting information.",
  },
  {
    number: "04",
    title: "Download & Use",
    description:
      "Get your fully-rendered 3D scene in popular formats compatible with Unity, Unreal Engine, Blender, and more.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-tech-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our streamlined process makes creating 3D scenes from videos simple
            and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[calc(50%-150px)] right-[calc(50%-150px)] h-0.5 bg-gradient-to-r from-tech-purple to-tech-teal"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-12 h-12 rounded-full bg-tech-purple/20 flex items-center justify-center border border-tech-purple z-10 relative">
                  <span className="text-tech-purple font-bold">
                    {step.number}
                  </span>
                </div>
                <div className="absolute top-5 -z-10 w-20 h-10 bg-tech-purple/10 blur-xl rounded-full"></div>
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
