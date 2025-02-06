import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Signup</h1>
      <Form.Control id="wd-singup-username"
             placeholder="username"
             className="mb-2"/>
      <Form.Control id="wd-singup-password"
             placeholder="password" type="password"
             className="mb-2"/>
      <Form.Control id="wd-singup-verify-password"
             placeholder="verify password" type="password"
             className="mb-2"/>
      <Link to="/Kambaz/Account/Profile" id = "wd-btn-signup-add" className="btn btn-primary w-100 mb-2">Sign up</Link>
      <Link to="/Kambaz/Account/Signin" >Sign in</Link>
    </div>
);}