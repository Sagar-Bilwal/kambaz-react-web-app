import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation" style={{ width: 120 }} 
    className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" className="list-group-item bg-black border-0 text-center">
      <img src="src/assets/NEU.png" width="75px" /></a>
      <Link to="/Kambaz/Account" id="wd-account-link" className="list-group-item text-center border-0 bg-black text-white">
       <FaRegCircleUser className="fs-1 text text-white" /><br />
       Account </Link>
      <Link to="/Kambaz/Dashboard" id="wd-dashboard-link" className="list-group-item text-center border-0
                  bg-white text-danger active">
       <AiOutlineDashboard className="fs-1 text-danger" /><br />
       Dashboard </Link>
      <Link to="/Kambaz/Dashboard" id="wd-course-link" className="list-group-item text-white
                  bg-black text-center border-0">
       <LiaBookSolid className="fs-1 text-danger" /><br />
       Courses </Link>
      <Link to="/Kambaz/Calendar" id="wd-calendar-link" className="list-group-item text-center bg-black border-0 text-white pb-0"><IoCalendarOutline className="fs-1 text-danger"/>Calendar</Link><br/>
      <Link to="/Kambaz/Inbox" id="wd-inbox-link" className="list-group-item text-center bg-black border-0 text-white pt-0 pb-0"><FaInbox className="text-danger fs-1"/><br/>Inbox</Link><br/>
      <Link to="/Labs" id="wd-labs-link" className="list-group-item text-center bg-black border-0 text-white pt-0"><LiaCogSolid className="text-danger fs-1"/><br/>Labs</Link><br/>
    </div>
);}
