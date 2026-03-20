import React, { FormEvent, useState, useEffect } from "react";
import api from "../api";
import SubmitVideo from "../components/SubmitVideo";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../hooks/useAuth";

interface SubmitVideoType {
  id: number;
  title: string;
  description: string;
  submitted_at: string;
}

function Home() {
  const { username } = useAuth();

  const [submitVideos, setSubmitVideos] = useState<SubmitVideoType[]>([]);
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    getSubmitVideos();
  }, []);

  const getSubmitVideos = () => {
    api
      .get<SubmitVideoType[]>("/submitVideo/api-videos/")
      .then((res) => res.data)
      .then((data) => setSubmitVideos(data))
      .catch((err) => alert(err));
  };

  const deleteSubmitVideo = (id: number) => {
    api
      .delete(`/submitVideo/api-videos/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Video deleted");
        else alert("Failed to delete video");
        getSubmitVideos();
      })
      .catch((error) => alert(error));
  };

  const createSubmitVideo = (e: FormEvent) => {
    e.preventDefault();

    api
      .post("submitVideo/api-videos/", { description, title })
      .then((res) => {
        if (res.status === 201) alert("Video Submitted");
        else alert("Failed to submit video");

        getSubmitVideos();
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="home-wrapper ">
      <Header
        title="VisionScopes"
        username={username || "User"}
        navLinks={[{ label: "Logout", path: "/logout" }]}
      />
      <div className="flex items-center justify-center mt-24" />
      <div className="home-content">
        <div className="videos-panel">
          <h2 className="section-heading">Videos</h2>

          {submitVideos.length === 0 ? (
            <p className="videos-empty">No videos submitted yet.</p>
          ) : (
            submitVideos.map((submitVideo) => (
              <SubmitVideo
                key={submitVideo.id}
                submitVideo={submitVideo}
                onDelete={deleteSubmitVideo}
              />
            ))
          )}
        </div>

        <div className="submit-panel">
          <h2 className="section-heading">Submit Video</h2>

          <form className="submit-form" onSubmit={createSubmitVideo}>
            <div>
              <label htmlFor="title">Title</label>

              <input
                type="text"
                id="title"
                name="title"
                required
                value={title}
                placeholder="Enter video title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="description">Description</label>

              <textarea
                id="description"
                name="description"
                required
                value={description}
                placeholder="Enter video description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <input type="submit" className="submit-btn" value="Submit" />
          </form>

          <button className="logout-btn" onClick={() => navigate("/logout")}>
            Logout
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
