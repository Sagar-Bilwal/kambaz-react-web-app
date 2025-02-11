import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    return (
      <div>
        <ModulesControls/><br /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons/></div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons/></span>
                <ListGroup className="wd-content mt-3">
                  <ListGroup.Item className="wd-content-item">Introduction to the course</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Learn what is Web Development</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons/></span>
                <ListGroup className="wd-content mt-3">
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons/></span>
                <ListGroup className="wd-content mt-3">
                  <ListGroup.Item className="wd-content-item">Introduction to Web Development</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Creating an HTTP server with Node.js</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Creating a React AppListGroup.Itemcation</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" /> Week 2  <ModuleControlButtons/></div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons/></span>
                <ListGroup className="wd-content mt-3">
                  <ListGroup.Item className="wd-content-item">Introduction to the course</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Learn what is Web Development</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons/></span>
                <ListGroup className="wd-content mt-3">
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons/></span>
                <ListGroup className="wd-content mt-3">
                  <ListGroup.Item className="wd-content-item">Introduction to Web Development</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Creating an HTTP server with Node.js</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Creating a React Application</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" /> Week 3  <ModuleControlButtons/></div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons/></span>
                <ListGroup className="wd-content mt-3">
                  <ListGroup.Item className="wd-content-item">Introduction to the course</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Learn what is Web Development</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title mb-2"><BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons/></span>
                <ListGroup className="wd-content mt-3 ">
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title"><BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons/></span>
                <ListGroup className="wd-content mt-3">
                  <ListGroup.Item className="wd-content-item">Introduction to Web Development</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Creating an HTTP server with Node.js</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Creating a React Application</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );}
  