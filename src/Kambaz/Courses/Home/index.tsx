import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div id="wd-home" className="d-flex">
      <div className="flex-fill">
          <Modules/>
      </div>
          <CourseStatus/>
    </div>
);}
