import { Button, Col, Container, Form, InputGroup, ListGroup, Row } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import AssignmentRightControl from "./AssignmentRightControl";
import AssignmentLeftControl from "./AssignmentLeftControl";
import { Link, useParams } from "react-router";
import AssignmentItemLeftControl from "./AssignmentItemLeftControl";
import "./styles.css"
import * as db from "../../Database"
import LessonControlButtons from "../Modules/LessonControlButtons";
export default function Assignments() {
    const assignments = db.assignments
    const { cid } = useParams();
    const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid)
    const formatDate = (isoString: any) => {
        const date: any = new Date(isoString);
        const options: any = { month: "long", day: "numeric", hour: "numeric", minute: "2-digit", hour12: true };
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
        
        return formattedDate.replace("AM", "am").replace("PM", "pm");
    };
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
        {courseAssignments.map((courseAssignment: any ) => (
          <ListGroup.Item className="wd-assignment-list-item pb-0 wd-assignment-item">
          <Row>
            <Col className="mt-4" xs="auto">
              <AssignmentItemLeftControl/>
            </Col>
            <Col>
              <Link to={`${courseAssignment._id}`}
                className="wd-assignment-link text-decoration-none text-black" style={{fontWeight: "bold"}}>
                {courseAssignment.title}
              </Link>
              <br/>
              <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {formatDate(courseAssignment.available_date)} | <b>Due</b> {formatDate(courseAssignment.due_date)} | {courseAssignment.points} pts</p>
            </Col>
            <Col className="pt-4" style={{}}>
              <LessonControlButtons/>
            </Col>
          </Row>
          </ListGroup.Item>
        ))}
          
          {/* <ListGroup.Item className="wd-assignment-list-item pb-0 wd-assignment-item">
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
          </ListGroup.Item> */}
        </ListGroup>
      </div>
  );}
  