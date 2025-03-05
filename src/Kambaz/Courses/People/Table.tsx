import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../Database"
import { useParams } from "react-router";
export default function PeopleTable() {
 const { cid } = useParams();
 const enrollments = db.enrollments;
 const users = db.users
 const courseEnrollments = enrollments.filter((enrollment) => enrollment.course === cid);
 const enrolledUsers = users.filter(user =>
    courseEnrollments.some(enrollment => enrollment.user === user._id)
);
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
        {enrolledUsers.map((enrolledUser: any) => (
                <tr key={enrolledUser._id}>
                    <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{enrolledUser.firstName}</span>{" "}
                    <span className="wd-last-name">{enrolledUser.lastName}</span></td>
                    <td className="wd-login-id">{enrolledUser.loginId}</td>
                    <td className="wd-section">{enrolledUser.section}</td>
                    <td className="wd-role">{enrolledUser.role}</td>
                    <td className="wd-last-activity">{enrolledUser.lastActivity}</td>
                    <td className="wd-total-activity">{enrolledUser.totalActivity}</td>
                </tr>
            ))
        }
    </tbody>
   </Table>
  </div> );}