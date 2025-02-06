import { Button, Col, Container, Form, InputGroup, ListGroup, Row } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import AssignmentRightControl from "./AssignmentRightControl";
import AssignmentLeftControl from "./AssignmentLeftControl";
import { Link } from "react-router";
import AssignmentItemLeftControl from "./AssignmentItemLeftControl";
import "./styles.css"
import LessonControlButtons from "../Modules/LessonControlButtons";
export default function Assignments() {
    return (
      <div id="wd-assignments">
        <Container className="text-nowrap">
          <Row>
            <Col xs={6}>
            <InputGroup size="lg">
              <InputGroup.Text  style={{ backgroundColor: 'white', borderRight: "none" }} className="pe-0">
                <HiOutlineSearch />
              </InputGroup.Text>
              <Form.Control placeholder="Search for Assignments"
                    id="wd-search-assignment" size="lg" style={{ borderLeft: "none" }}/>
              </InputGroup>
            </Col>
            <Col>
              <Button id="wd-add-assignment" variant="danger" size="lg" className="float-end me-2"><FiPlus className="position-relative" style={{ bottom: "2px" }} /> Assignment</Button>
              <Button id="wd-add-assignment-group" className="btn btn-secondary me-2 float-end" size="lg"><FiPlus className="position-relative" style={{ bottom: "2px" }} /> Group</Button>
            </Col>
          </Row>
        </Container> <br/> <br/>
        <ListGroup className="rounded-0" id="wd-assignment-list">
        <ListGroup.Item className="wd-module p-0 fs-5 border-gray">
        <div id="wd-assignments-title" className="wd-title p-3 ps-2 mb-0 bg-secondary">
        <AssignmentLeftControl/> ASSIGNMENTS <AssignmentRightControl/> <span className="float-end me-3 rounded-pill border border-dark ps-2 pe-2">40% of Total</span></div>
        </ListGroup.Item>
          <ListGroup.Item className="wd-assignment-list-item pb-0 wd-assignment-item">
            <Row>
              <Col className="mt-4" xs="auto">
                <AssignmentItemLeftControl/>
              </Col>
              <Col>
                <Link to={"123"}
                  className="wd-assignment-link text-decoration-none text-black" style={{fontWeight: "bold"}}>
                  A1 - ENV + HTML
                </Link>
                <br/>
                <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</p>
              </Col>
              <Col className="pt-4" style={{}}>
                <LessonControlButtons/>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className="wd-assignment-list-item pb-0 wd-assignment-item">
            <Row>
              <Col className="mt-4" xs="auto">
                <AssignmentItemLeftControl/>
              </Col>
              <Col>
                <Link to={"123"}
                  className="wd-assignment-link text-decoration-none text-black" style={{fontWeight: "bold"}}>
                  A2 - Bootstrap + CSS
                </Link>
                <br/>
                <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 31 at 11:59pm | 100 pts</p>
              </Col>
              <Col className="pt-4" style={{}}>
                <LessonControlButtons/>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className="wd-assignment-list-item pb-0 wd-assignment-item">
            <Row>
              <Col className="mt-4" xs="auto">
                <AssignmentItemLeftControl/>
              </Col>
              <Col>
                <Link to={"123"}
                  className="wd-assignment-link text-decoration-none text-black" style={{fontWeight: "bold"}}>
                  A3 - Javascript + React
                </Link>
                <br/>
                <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 31 at 12:00am | <b>Due</b> June 07 at 11:59pm | 100 pts</p>
              </Col>
              <Col className="pt-4" style={{}}>
                <LessonControlButtons/>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );}
  