import React from 'react'
import "../styles/page3.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Page2 from "./page2"
import Page4 from "./page4"
import { useNavigate} from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function page3() {
  const navigate=useNavigate()
  const Back=()=>{
    navigate("/Page2")
  }
  const Front=()=>{
    navigate("/Page4")
  }
  return (

    <div className="div1">
      <h1>Future Invo Solutions</h1>
      <p>Employee OnBoarding Form</p>
      <div className="div2">
        <form>
          <div className="small-div1">
            <div>
              <label>PAN Card<span>*</span>:</label><br></br>
              <input type="text" id="cards" />
              <button type="button" id="bt">Select Files</button><FontAwesomeIcon icon={faTrash} id="icon" /><br></br>
              <label id="mb">Maximun 5Mb<span>*</span></label>

            </div>
            <div>
              <label>Aadhar Card Front<span>*</span>:</label><br></br>
              <input type="text" id="cards" />
              <button type="button" id="bt">Select Files</button><FontAwesomeIcon icon={faTrash} id="icon" /><br></br>
              <label id="mb">Maximun 5Mb<span>*</span></label>

            </div>
            <div>
              <label>Aadhar Card Back<span>*</span>:</label><br></br>
              <input type="text" id="cards" />
              <button type="button" id="bt">Select Files</button><FontAwesomeIcon icon={faTrash} id="icon" /><br></br>
              <label id="mb">Maximun 5Mb<span>*</span></label>

            </div>
            
          </div>

          <div className="small-div1">
            <div>
              <label>Voter ID<span>*</span>:</label><br></br>
              <input type="text" id="cards" />
              <button type="button" id="bt">Select Files</button><FontAwesomeIcon icon={faTrash} id="icon" /><br></br>
              <label id="mb">Maximun 5Mb<span>*</span></label>

            </div>
            <div>
              <label>Passport Size Photo<span>*</span>:</label><br></br>
              <input type="text" id="cards" />
              <button type="button" id="bt">Select Files</button><FontAwesomeIcon icon={faTrash} id="icon" /><br></br>
              <label id="mb">Maximun 5Mb<span>*</span></label>

            </div>
            <div>
              <label>Bank Pass Book<span>*</span>:</label><br></br>
              <input type="text" id="cards" />
              <button type="button" id="bt">Select Files</button><FontAwesomeIcon icon={faTrash} id="icon" /><br></br>
              <label id="mb">Maximun 5Mb<span>*</span></label>

            </div>
            
          </div>
          <div className="small-div1">
           <button id="btt" > Other Documents +</button>
           <button id="back" onClick={Back}>Back</button>
           <button id="front" onClick={Front}>Next</button>
            
          </div>

        </form>
      </div>
    </div>
  )
}
