import React from "react";
import { Camera, Box, Square, Video } from "lucide-react";

const features = [
  {
    icon: <Video className="h-8 w-8 text-tech-purple" />,
    title: "2D Video Input",
    description:
      "Upload any standard video file. Our system works with most common formats including MP4, MOV, and AVI.",
  },
  {
    icon: <Box className="h-8 w-8 text-tech-purple" />,
    title: "3D Scene Generation",
    description:
      "Our AI converts your 2D video into a full 3D scene with depth information and spatial mapping.",
  },
  {
    icon: <Square className="h-8 w-8 text-tech-purple" />,
    title: "Texture Mapping",
    description:
      "Automatically extracts and applies high-quality textures from your video to create realistic materials.",
  },
  {
    icon: <Camera className="h-8 w-8 text-tech-purple" />,
    title: "Camera Path Reconstruction",
    description:
      "Accurately reconstructs the original camera movements for perfect perspective matching.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-tech-blue">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our cutting-edge technology transforms ordinary videos into
            immersive 3D environments with unmatched precision and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-tech-dark rounded-xl p-6 border border-gray-800 hover:border-tech-purple/50 transition-all hover:shadow-lg hover:shadow-tech-purple/10"
            >
              <div className="p-3 bg-tech-purple/10 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
