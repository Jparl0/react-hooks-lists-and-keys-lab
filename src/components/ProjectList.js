import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
        const listedProjects = projects.map((project) => {
          return ProjectItem(project)
        })
  return (
    <div id="projects">
      <h2 key="myProjectTitle">My Projects</h2>
      <div id="project-list">
        {listedProjects}
      </div>
    </div>
  );
}

export default ProjectList;
