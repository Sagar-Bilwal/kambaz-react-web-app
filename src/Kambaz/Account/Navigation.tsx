import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const {pathname} = useLocation()
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {
        links.map((accountLink: any) => (
          <Link to={`/Kambaz/Account/${accountLink}`} id="wd-course-home-link"
          className={`list-group-item border border-0 pt-3 pb-3 ${pathname.includes(accountLink) ? "active": "text-danger"}`}> {accountLink}</Link>
        ))
      }
    </div>
);}
