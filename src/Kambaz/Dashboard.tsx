import { Button, Card, CardTitle, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <CardTitle className="wd-dashboard-course-title"> CS1234 React JS </CardTitle>
                  <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1235/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS1235 Node JS </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Backend software developer  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1236/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS1236 Jenkins </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    CI/CD developer  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
            </Link>
          </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1237/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS1237 Machine Learning </Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">
                    ML Engineer  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
            </Link>
          </Card> 
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1238/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/reactjs.jpg"width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS1238 Gen AI </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Gen AI Engineer  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
            </Link>
          </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1239/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS1239 Data Pipelines </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                  Data Engineer  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
            </Link>
          </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1240/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS1240 Data Analysis </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                  Data Analyst  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
            </Link>
          </Card>
          </Col>
        </Row>
      </div>
    </div>
);}
