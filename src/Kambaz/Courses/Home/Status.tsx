import { Button } from "react-bootstrap";
import { AiOutlineBell } from "react-icons/ai";
import { BiImport } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { ImTarget } from "react-icons/im";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { TiChartBar } from "react-icons/ti";

export default function CourseStatus() {
    return (
      <div id="wd-course-status" style={{ width: "350px" }} className="ps-2 d-none d-xxl-block">
        <h2>Course Status</h2>
        <div className="d-flex mb-0 pb-0">
       <div className="w-50 pe-1 me-1 mb-0">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap">
           <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>
       <div className="w-50 mb-0">
         <Button variant="success" size="lg" className="w-100">
           <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
      </div>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <ImTarget className="me-2 fs-5"/> Choose Home Page</Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <TiChartBar className="me-2 fs-5"/> View course Stream</Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <HiOutlineSpeakerphone className="me-2 fs-5"/> New Annoucement</Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <TiChartBar className="me-2 fs-5"/> New Analytics</Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <AiOutlineBell className="me-2 fs-5"/> View Course Notifications</Button>
      </div> );}