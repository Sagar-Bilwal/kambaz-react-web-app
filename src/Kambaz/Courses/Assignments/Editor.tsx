export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <br/><br/>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description"  cols={50} rows={8}>
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
               <select id = "wd-group">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZ">QUIZ</option>
               </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
               <select id = "wd-display-grade-as">
                    <option value = "Percentage">Percentage</option>
                    <option value= "Scores">Scores</option>
               </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
               <select id = "wd-submission-type">
                    <option value = "Online">Online</option>
                    <option value= "In Class">In Class</option>
               </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            <label htmlFor="wd-text-entry">Online Entry Options</label><br/>

            <input type="checkbox" name="check-genre" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="check-genre" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
            
            <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br/>
            <input type="checkbox" name="check-genre" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label>
                <br></br>
                <input id = "wd-assign-to" type = "text" value="Everyone"></input>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
                <label htmlFor="wd-due-date">Due</label>
                <br></br>
                <input id = "wd-due-date" type = "date" value="2024-05-13"></input>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
                <tr>
                <td>
                <label htmlFor="wd-available-from">Available from</label> 
                <br></br>
                <input id = "wd-available-from" type = "date" value="2024-05-13"></input>
                </td>
                <td>
                <label htmlFor="wd-available-until">Until</label> 
                <br></br>
                <input id = "wd-available-until" type = "date" value="2024-05-20"></input>
                </td>
                </tr>
            </td>
            
          </tr>
        </table>
        <hr/>
        <table width="100%">
            <tr>
                <td align = "right"><button>Cancel</button>
                <button>Save</button></td>
            </tr>
        </table>
        </div>
  );}
  