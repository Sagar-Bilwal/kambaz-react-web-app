import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";
import * as db from "../../Database"
export default function AssignmentEditor() {
    const { aid } = useParams();
    const assignments = db.assignments;
    const currAssignment = assignments.find((assignment) => assignment._id === aid)
    const formatDateForInput = (isoString: any) => {
      if (!isoString) return "";
      const date = new Date(isoString);
      return date.toISOString().split("T")[0];
    };
    return (
      <Form id="wd-assignments-editor" className="col-md-6 mt-3 ms-4">
        <Form.Group className="mb-3" controlId="formAssignmentName">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control id="wd-name" value={`${currAssignment?.title}`} className="mb-3"/>
          <Form.Control id="wd-description" as="textarea" value={`${currAssignment?.description}`} rows={6}/>
        </Form.Group>
        <Form.Group as={Row} controlId="formPoints">
          <Form.Label column htmlFor="wd-points" sm="3" className="text-end me-0 pe-3">Points</Form.Label>
          <Col sm="9">
            <Form.Control id="wd-points" value={`${currAssignment?.points}`} className="mb-3"/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formAssignmentGroups">
          <Form.Label column htmlFor="wd-group" sm="3" className="text-end me-0 pe-3">Assignment Group</Form.Label>
          <Col sm="9">
            <Form.Select id="wd-group" value="100" className="mb-3">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZ">QUIZ</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formDisplayAsGrade">
          <Form.Label column htmlFor="wd-display-grade-as" sm="3" className="text-end me-0 pe-3">Display Grade as</Form.Label>
          <Col border sm="9">
            <Form.Select id="wd-display-grade-as" value="100" className="mb-3">
              <option value = "Percentage">Percentage</option>
              <option value= "Scores">Scores</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formSubmissionType">
          <Form.Label column htmlFor="wd-submission-type" sm="3" className="text-end pe-3">Submission Type</Form.Label>
          <Col sm="9">
            <Form.Select id="wd-submission-type" value="100" className="mb-1 border">
              <option value = "Online">Online</option>
              <option value= "In Class">In Class</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label column htmlFor="wd-text-entry" className="text-end pe-3" style={{fontWeight: "bold"}}>Online Entry Options</Form.Label>
              <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry"/>
              <Form.Check type="checkbox" label="Website URL" id="wd-website-url"/>
              <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings"/>
              <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation"/>
              <Form.Check type="checkbox" label="File Uploads" id="wd-file-upload"/>
            </Form.Group>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formAssign">
          <Form.Label column htmlFor="wd-assign-to" sm="3" className="text-end me-0 pe-3">Assign</Form.Label>
          <Col sm="9">
            <Form.Label htmlFor="wd-assign-to" className="mt-2">Assign To</Form.Label>
            <Form.Control id="wd-assign-to" value="Everyone" className="mb-3"/>
            <Form.Label htmlFor="wd-due-date">Due</Form.Label>
            <Form.Control id="wd-assign-to" type="date" className="mb-3" value={formatDateForInput(currAssignment?.due_date)}/>
            <Row>
              <Col>
                <Form.Label htmlFor="wd-due-date">Available From</Form.Label>
                <Form.Control id="wd-assign-to" type="date" className="mb-3" value={formatDateForInput(currAssignment?.available_date)}/>
              </Col>
              <Col>
                <Form.Label htmlFor="wd-due-date">Until</Form.Label>
                <Form.Control id="wd-assign-to" type="date" className="mb-3" value="2024-05-20"/>
              </Col>
            </Row>
          </Col>
        </Form.Group>
        <hr/>
        <Row className="float-end">
          <Col>
            <Button className="btn btn-secondary me-1">Cancel</Button>
            <Button className="btn btn-danger">Save</Button>
          </Col>
        </Row>
        </Form>
  );}
  