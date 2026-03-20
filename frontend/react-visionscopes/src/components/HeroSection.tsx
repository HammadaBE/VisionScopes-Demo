import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark to-tech-blue -z-10"></div>

      {/* Floating cube decorations */}
      <div className="hidden lg:block absolute top-20 right-20 animate-float opacity-70">
        <div className="cube-container">
          <div className="cube">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-20 left-20 animate-float animation-delay-1000 opacity-70">
        <div
          className="cube-container"
          style={{ width: "100px", height: "100px" }}
        >
          <div className="cube">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform <span className="gradient-text">2D Videos</span> into
            <span className="gradient-text"> 3D Scenes</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our AI-powered technology converts ordinary videos into immersive,
            photorealistic 3D environments for VR, gaming, and metaverse
            applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-tech-purple hover:bg-tech-violet text-white px-8 py-6 text-lg"
              size="lg"
            >
              Upload Your Video
            </Button>
            <Button
              variant="outline"
              className="border-tech-teal text-tech-teal hover:bg-tech-teal/10 px-8 py-6 text-lg"
              size="lg"
            >
              <Play className="mr-2 h-5 w-5" /> Watch Demo
            </Button>
          </div>
        </div>

        <div className="mt-16 relative max-w-4xl mx-auto">
          {/* Video placeholder */}
          <div className="rounded-xl overflow-hidden border border-gray-800 shadow-2xl relative">
            <div className="aspect-[16/9] bg-gradient-to-tr from-tech-blue to-black flex items-center justify-center">
              <div className="text-center">
                <div className="animate-pulse-soft">
                  <Play className="h-20 w-20 text-tech-purple opacity-80" />
                </div>
                <p className="mt-4 text-gray-400">Demo Video</p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-tech-purple/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-tech-teal/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
