import React from "react";
import "../styles/SubmitVideo.css";

interface SubmitVideoType {
  id: number;
  title: string;
  description: string;
  submitted_at: string;
}

interface SubmitVideoProps {
  submitVideo: SubmitVideoType;
  onDelete: (id: number) => void;
}

const SubmitVideo: React.FC<SubmitVideoProps> = ({ submitVideo, onDelete }) => {
  const formattedDated = new Date(submitVideo.submitted_at).toLocaleDateString(
    "en-US",
  );

  return (
    <div className="submitVideo-container">
      <p className="submitVideo-title">{submitVideo.title}</p>
      <p className="submitVideo-description">{submitVideo.description}</p>
      <div className="submitVideo-footer">
        <p className="submitVideo-date">{formattedDated}</p>
        <button
          className="delete-button"
          onClick={() => onDelete(submitVideo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SubmitVideo;
