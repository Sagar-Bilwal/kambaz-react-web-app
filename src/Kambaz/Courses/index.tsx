import { FaAlignJustify } from "react-icons/fa";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";
export default function Courses() {
    const {cid} = useParams()
    const {pathname} = useLocation()
    const pathnameList = pathname.split("/");
    const currentLocation = pathnameList[pathnameList.length-1] ? " > "+ pathnameList[4]: "";
    const { courses } = useSelector((state: any) => state.courseReducer);
    const course = courses.find((course: any) => course._id === cid)
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />{(course && pathname && course.name + currentLocation)}</h2>
        <hr/>
        <div className="d-flex">
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
            <div className="flex-fill">
              <Routes>
                <Route path="/" element={<Navigate to="Home"/>} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route path="Assignments/:aid" element={<AssignmentEditor/>} />
                <Route path="People" element={<PeopleTable/>} />
              </Routes>
            </div>
          </div>
      </div>
  );}
  