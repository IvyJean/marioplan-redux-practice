import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Eiusmod tempor est commodo dolore do exercitation non id
            pariatur.Proident cillum sit est minim et laborum anim adipisicing
            amet esse deserunt deserunt aliquip sit exercitation minim anim
            velit.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by: Ivy </div>
          <div>Feb 13, 2020 , 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
