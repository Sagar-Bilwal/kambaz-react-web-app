import { useState } from "react";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [moduleName, setModuleName] = useState("");
  const [moduleDescription, setModuleDescription] = useState("");
  const [assignmentScore, setAssignmentScore] = useState(0);
  const [assignmentCompleted, setAssignmentCompleted] = useState(false);

  return (
    <div id="wd-working-with-objects" className="ps-1">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
      <h4>Get Module</h4>
      <a id="wd-retrieve-module" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>
      <h4>Get Module Name</h4>
      <a id="wd-retrieve-module" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>
      <h4>Update Module Name</h4>
      <input
        type="text"
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
        placeholder="Type new module name"
      />
      <a
        className="btn btn-primary ms-3"
        href={`${REMOTE_SERVER}/lab5/module/update/name?name=${moduleName}`}
      >
        Update Module Name
      </a>
      <hr />

      <h4>Update Module Description</h4>
      <textarea className="col-3 ms-1"
        value={moduleDescription}
        onChange={(e) => setModuleDescription(e.target.value)}
        placeholder="Enter new module description"
        rows={4}
        cols={50}
      />
      <br/>
      <a
        className="btn btn-primary ms-1 mt-2"
        href={`${REMOTE_SERVER}/lab5/module/update/description?description=${encodeURIComponent(moduleDescription)}`}
      >
        Update Module Description
      </a>
      <hr />

      <h4>Update Assignment Score</h4>
      <input
        type="number"
        value={assignmentScore}
        onChange={(e) => setAssignmentScore(Number(e.target.value))}
        placeholder="Enter new score"
      />
      <a
        className="btn btn-primary ms-2"
        href={`${REMOTE_SERVER}/lab5/assignment/update/score?score=${assignmentScore}`}
      >
        Update Score
      </a>
      <hr />
      <h4>Update Assignment Status</h4>
      <input
        className="me-1 mb-3"
        type="checkbox"
        checked={assignmentCompleted}
        onChange={(e) => setAssignmentCompleted(e.target.checked)}
      /> Completed <br/>
      <a
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/update/completed?completed=${assignmentCompleted}`}
      >
        Update Assignment Status
      </a>
      <hr />
    </div>
);}
