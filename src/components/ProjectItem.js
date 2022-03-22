import React from "react";

function ProjectItem({ id, name, about, technologies }) {
  // const TechLinks = technologies.forEach((techname) => {
  //         return <span key={techname}>{techname}</span>;
  //   });
  return (
    <div className="project-item" key={id}>
      <h3 key={name}>{name}</h3>
      <p key={about}>{about}</p>
      <div className="technologies">{technologies.map((techname) => {
          return <span key={techname}>{techname}</span>;
        })}
    </div>
    </div>
  );
}

export default ProjectItem;

