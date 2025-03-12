import { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
export default function ArrayStateVariable() {
 const [array, setArray] = useState([1, 2, 3, 4, 5]);
 const addElement = () => {
   setArray([...array, Math.floor(Math.random() * 100)]);
 };
 const deleteElement = (index: number) => {
   setArray(array.filter((_, i) => i !== index));
 };
 return (
  <div id="wd-array-state-variables" className="mt-3">
   <h2>Array State Variable</h2>
   <Button variant="success" className="mb-2" onClick={addElement}>Add Element</Button>
   <ListGroup className="w-25">
    {array.map((item, index) => (
     <ListGroupItem key={index} className="d-flex justify-content-between align-items-center"> <span className="fw-bold">{item}</span>
      <Button variant="danger" className="ms-auto" onClick={() => deleteElement(index)}>
       Delete</Button>
     </ListGroupItem>))}
   </ListGroup><hr/></div>);}