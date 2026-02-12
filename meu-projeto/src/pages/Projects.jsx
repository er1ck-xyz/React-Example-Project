import React, { useState, useEffect } from "react";
import Message from "../components/layouts/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Loading from "../components/layouts/Loading";
import LinkButton from "../components/layouts/LinkButton";
import ProjectCard from "../components/projects/ProjectCard";
import containerStyles from "../components/layouts/Container.module.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }
  useEffect(() => {
    fetch("http://localhost:5001/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
        setRemoveLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5001/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      <div className={`${containerStyles.container} ${containerStyles.start}`}>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados.</p>
        )}
      </div>
    </div>
  );
}
