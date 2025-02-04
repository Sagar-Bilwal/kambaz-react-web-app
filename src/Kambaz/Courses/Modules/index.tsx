import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModuleControls";

export default function Modules() {
    return (
      <div>
        <ModulesControls/> <br/>
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">Week 1</div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Introduction to the course</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Learn what is Web Development</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson">
                <span className="wd-title">READING</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Introduction to Web Development</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Creating an HTTP server with Node.js</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Creating a React AppListGroup.Itemcation</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">Week 2</div>
            <ListGroup className="wd-lessons">
              <ListGroup.Item className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Introduction to the course</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Learn what is Web Development</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson">
                <span className="wd-title">READING</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Introduction to Web Development</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Creating an HTTP server with Node.js</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Creating a React Application</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">Week 3</div>
            <ListGroup className="wd-lessons">
              <ListGroup.Item className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Introduction to the course</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Learn what is Web Development</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson">
                <span className="wd-title">READING</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ListGroup className="wd-content">
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
  