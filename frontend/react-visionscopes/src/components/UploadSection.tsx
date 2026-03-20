import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const UploadSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the actual file upload and processing
    alert(
      "Upload feature would send the video for 3D processing in a real application",
    );
  };

  return (
    <section id="upload" className="py-20 bg-tech-dark">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="gradient-text">Transform</span> Your
            Video?
          </h2>
          <p className="text-gray-300">
            Upload your video below and let our AI work its magic.
          </p>
        </div>

        <div className="bg-tech-blue rounded-xl p-8 border border-gray-800">
          <form onSubmit={handleSubmit}>
            <div
              className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer mb-6 transition-colors ${
                isDragging
                  ? "border-tech-purple bg-tech-purple/5"
                  : "border-gray-700 hover:border-tech-purple/50 hover:bg-tech-purple/5"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="video/*"
                onChange={handleFileChange}
              />

              <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-lg font-medium">
                {file
                  ? file.name
                  : "Drag and drop your video here, or click to browse"}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Supported formats: MP4, MOV, AVI (max size: 500MB)
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-tech-purple hover:bg-tech-violet text-white px-8 py-6"
                size="lg"
                disabled={!file}
              >
                Convert to 3D
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            By uploading a video, you agree to our{" "}
            <a href="#" className="text-tech-purple hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
