// import React,{useState} from 'react'
// import '../styles/page2.css'
// import Page3 from "./page3"
// export default function Page2() {

//      const[name,setName]=useState("");
//      const[college,setCollege]=useState("");
//      const[university,setUniversity]=useState("");
//      const[postUniversity,setPostUniversity]=useState("");

//      const[year1,setYear1]=useState("");
//      const[percentage1,setPercentage1]=useState("");
//      const[hallTicket1,setHallTicket1]=useState("");

//      const[year2,setYear2]=useState("");
//      const[percentage2,setPercentage2]=useState("");
//      const[hallTicket2,setHallTicket2]=useState("");

//      const[year3,setYear3]=useState("");
//      const[percentage3,setPercentage3]=useState("");
//      const[hallTicket3,setHallTicket3]=useState("");

//      const[year4,setYear4]=useState("");
//      const[percentage4,setPercentage4]=useState("");
//      const[hallTicket4,setHallTicket4]=useState("");



//      const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);
//      const isValidCollege = (college) => /^[A-Za-z\s]+$/.test(college);
//      const isValiduniversity = (university) => /^[A-Za-z\s]+$/.test(university);
//      const isValidpostUniversity = (postUniversity) => /^[A-Za-z\s]+$/.test(postUniversity);

//      const isValidYear1 = (year1) => /^\d{4}$/.test(year1);
//      const isValidPercentage1= (percentage1) => /^\d+(\.\d+)?$/.test(percentage1);
//      const isValidHallTicket1 = (hallTicket1) => /^\d+$/.test(hallTicket1);

//       const isValidYear2 = (year2) => /^\d{4}$/.test(year2);
//      const isValidPercentage2= (percentage2) => /^\d+(\.\d+)?$/.test(percentage2);
//      const isValidHallTicket2 = (hallTicket2) => /^\d+$/.test(hallTicket2);

//       const isValidYear3 = (year3) => /^\d{4}$/.test(year3);
//      const isValidPercentage3= (percentage3) => /^\d+(\.\d+)?$/.test(percentage3);
//      const isValidHallTicket3 = (hallTicket3) => /^\d+$/.test(hallTicket3);

//      const isValidYear4 = (year4) => /^\d{4}$/.test(year4);
//      const isValidPercentage4= (percentage4) => /^\d+(\.\d+)?$/.test(percentage4);
//      const isValidHallTicket4 = (hallTicket4) => /^\d+$/.test(hallTicket4);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(!isValidName(name)){
//             alert("Please enter a valid name (letters and spaces only).");
//     }
//      if(!isValidCollege(college)){
//                alert("Please enter a valid college name (letters and spaces only).");
//   }
//      if(!isValiduniversity(university)){
//                alert("Please enter a valid university name (letters and spaces only).");
//   }
//      if(!isValidpostUniversity(postUniversity)){
//                alert("Please enter a valid post-university name (letters and spaces only).");
//   }
//   if(!isValidYear1(year1)){
//                alert("Please enter a valid year of passing (4 digit year).");
//   }
//      if(!isValidPercentage1(percentage1)){
//                alert("Please enter a valid percentage (numeric value).");
//  }

//      if(!isValidHallTicket1(hallTicket1)){
//                alert("Please enter a valid hall ticket number (numeric value).");
//   }
//      if(!isValidYear2(year2)){
//                alert("Please enter a valid year of passing (4 digit year).");
//   }
//      if(!isValidPercentage2(percentage2)){
//                alert("Please enter a valid percentage (numeric value).");
//   }
//      if(!isValidHallTicket2(hallTicket2)){
//                alert("Please enter a valid hall ticket number (numeric value).");
//   }

//      if(!isValidYear3(year3)){
//                alert("Please enter a valid year of passing (4 digit year).");
//   }
//      if(!isValidPercentage3(percentage3)){
//                alert("Please enter a valid percentage (numeric value).");
//   }
//      if(!isValidHallTicket3(hallTicket3)){
//                alert("Please enter a valid hall ticket number (numeric value).");
//   }
//      if(!isValidYear4(year4)){
//                alert("Please enter a valid year of passing (4 digit year).");
//   }
//      if(!isValidPercentage4(percentage4)){
//                alert("Please enter a valid percentage (numeric value).");
//   }
//      if(!isValidHallTicket4(hallTicket4)){
//                alert("Please enter a valid hall ticket number (numeric value).");
//   }

// }



// let usersData={
//      name,
//      college,
//      university,
//      postUniversity,
//      year1,
//      percentage1,
//      hallTicket1,
//      year2,
//      percentage2,
//      hallTicket2,
//      year3,
//      percentage3,
//      hallTicket3,
//      year4,
//      percentage4,
//      hallTicket4
// }

// localStorage.setItem("userData",JSON.stringify(usersData));


//   setName('');
//   setCollege('');
//   setUniversity('');
//   setPostUniversity('');
//   setYear1('');
//   setPercentage1('');
//   setHallTicket1('');
//   setYear2('');
//   setPercentage2('');
//   setHallTicket2('');
//   setYear3('');
//   setPercentage3('');
//   setHallTicket3('');
//   setYear4('');
//   setPercentage4('');
//   setHallTicket4('');

//   return (
//     <div className="parent">
//       <div className="child">
//         <h1>Future Invo Solutions</h1>
//         <p>Employee OnBoarding Form</p>
//           <h2> Education Details</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="first-column">
//             <label className="label-field">School Name <span>*</span>:</label><br />
//             <label id="small-label">Ssc/10th</label><br></br>
//             <input type="text" className="input-field" value={name} onChange={(e)=>setName(e.target.value)}/><br />
//             <div className="flexing">

//                  <div className="flexing1">
//                       <label>Year of Passing<span>*</span>:</label><br></br>
//                       <input type="number"  className="small-input" value={year1} onChange={(e)=>setYear1(e.target.value)}></input>
//                  </div>
//                  <div className="flexing2">
//                       <label>Percentage<span>*</span>:</label><br></br>
//                       <input type="text" className="small-input" value={percentage1} onChange={(e)=>setPercentage1(e.target.value)}></input>
//                  </div>
//                  <div className="flexing3">
//                       <label>Hall Ticket Number<span>*</span>:</label><br></br>
//                       <input type="number" className="small-input" id="flex3" value={hallTicket1} onChange={(e)=>setHallTicket1(e.target.value)}></input>
//                  </div>

//             </div>
           

//           </div>

//           <div className="column-second">
//             <label  className="label-field">Senior Secondary <span>*</span>:</label><br />
//             <label id="small-label">College Name</label><br></br>
//             <input type="text" className="input-field" value={college} onChange={(e)=>setCollege(e.target.value)} /><br />
//                   <div className="flexing">

//                  <div className="flexing1">
//                       <label>Year of Passing<span>*</span>:</label><br></br>
//                       <input type="number"  className="small-input" value={year2} onChange={(e)=>setYear2(e.target.value)}></input>
//                  </div>
//                  <div className="flexing2">
//                       <label>Percentage<span>*</span>:</label><br></br>
//                       <input type="text" className="small-input" value={percentage2} onChange={(e)=>setPercentage2(e.target.value)}></input>
//                  </div>
//                  <div className="flexing3">
//                       <label>Hall Ticket Number<span>*</span>:</label><br></br>
//                       <input type="number" className="small-input" id="flex3"></input>
//                  </div>

//             </div>
           
            
//           </div>

//           <div className="column-three">
//             <label  className="label-field">Graduation <span>*</span>:</label><br />
//             <label  id="small-label" >University Name</label><br />
//             <input type="text" className="input-field" value={university} onChange={(e)=>setUniversity(e.target.value)} /><br />
//              <div className="flexing">

//                  <div className="flexing1">
//                       <label>Year of Passing<span>*</span>:</label><br></br>
//                       <input type="number"  className="small-input" value={year3} onChange={(e)=>setYear3(e.target.value)}></input>
//                  </div>
//                  <div className="flexing2">
//                       <label>Percentage<span>*</span>:</label><br></br>
//                       <input type="text" className="small-input" value={percentage3} onChange={(e)=>setPercentage3(e.target.value)}></input>
//                  </div>
//                  <div className="flexing3">
//                       <label>Hall Ticket Number<span>*</span>:</label><br></br>
//                       <input type="number" className="small-input" id="flex3" value={hallTicket3} onChange={(e)=>setHallTicket3(e.target.value)}></input>
//                  </div>

//             </div>
           
//           </div>

//           <div className="column-four">
//             <label  className="label-field">Post Graduation <span>*</span>:</label><br />
//             <label  id="small-label">University Name</label><br />
//             <input type="text" className="input-field" value={postUniversity} onChange={(e)=>setPostUniversity(e.target.value)}/><br />
//              <div className="flexing">

//                  <div className="flexing1">
//                       <label>Year of Passing<span>*</span>:</label><br></br>
//                       <input type="number"  className="small-input" value={year4} onChange={(e)=>setYear4(e.target.value)}></input>
//                  </div>
//                  <div className="flexing2">
//                       <label>Percentage<span>*</span>:</label><br></br>
//                       <input type="text" className="small-input" value={percentage4} onChange={(e)=>setPercentage4(e.target.value)}></input>
//                  </div>
//                  <div className="flexing3">
//                       <label>Hall Ticket Number<span>*</span>:</label><br></br>
//                       <input type="number" className="small-input" id="flex3" value={hallTicket4} onChange={(e)=>setHallTicket4(e.target.value)}></input>
//                  </div>

//             </div>
           
//           </div>

//           <button type="submit" id="btn">Any Other Documentations</button>
//           <button id="back-btn">Back</button><button id="next-btn" onClick={Page3} >Next</button>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import '../styles/page2.css';
import { useNavigate } from 'react-router-dom';

export default function Page2() {
    const [name, setName] = useState("");
    const [college, setCollege] = useState("");
    const [university, setUniversity] = useState("");
    const [postUniversity, setPostUniversity] = useState("");

    const [year1, setYear1] = useState("");
    const [percentage1, setPercentage1] = useState("");
    const [hallTicket1, setHallTicket1] = useState("");

    const [year2, setYear2] = useState("");
    const [percentage2, setPercentage2] = useState("");
    const [hallTicket2, setHallTicket2] = useState("");

    const [year3, setYear3] = useState("");
    const [percentage3, setPercentage3] = useState("");
    const [hallTicket3, setHallTicket3] = useState("");

    const [year4, setYear4] = useState("");
    const [percentage4, setPercentage4] = useState("");
    const [hallTicket4, setHallTicket4] = useState("");

    // Validation functions
    const isValidName = (value) => /^[A-Za-z\s]+$/.test(value);
    const isValidCollege = (value) => /^[A-Za-z\s]+$/.test(value);
    const isValidUniversity = (value) => /^[A-Za-z\s]+$/.test(value);
    const isValidPostUniversity = (value) => /^[A-Za-z\s]+$/.test(value);

    const isValidYear1 = (year1) => /^\d{4}$/.test(year1);
    const isValidPercentage1 = (percentage1) => /^\d+(\.\d+)?$/.test(percentage1);
    const isValidHallTicket1 = (hallticket1) => /^\d+$/.test(hallticket1);

     const isValidYear2 = (year2) => /^\d{4}$/.test(year2);
    const isValidPercentage2 = (percentage2) => /^\d+(\.\d+)?$/.test(percentage2);
    const isValidHallTicket2 = (hallticket2) => /^\d+$/.test(hallticket2);

     const isValidYear3 = (year3) => /^\d{4}$/.test(year3);
    const isValidPercentage3 = (percentage3) => /^\d+(\.\d+)?$/.test(percentage3);
    const isValidHallTicket3 = (hallticket3) => /^\d+$/.test(hallticket3);

     const isValidYear4 = (year4) => /^\d{4}$/.test(year4);
    const isValidPercentage4 = (percentage4) => /^\d+(\.\d+)?$/.test(percentage4);
    const isValidHallTicket4 = (hallticket4) => /^\d+$/.test(hallticket4);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        if (!isValidName(name)) {
            alert("Please enter a valid name (letters and spaces only).");
            return;
        }
        if (!isValidCollege(college)) {
            alert("Please enter a valid college name.");
            return;
        }
        if (!isValidUniversity(university)) {
            alert("Please enter a valid university name.");
            return;
        }
        if (!isValidPostUniversity(postUniversity)) {
            alert("Please enter a valid post-university name.");
            return;
        }
        if (!isValidYear1(year1)) {
            alert("Please enter a valid year of passing for School.");
            return;
        }
        if (!isValidPercentage1(percentage1)) {
            alert("Please enter a valid percentage for School.");
            return;
        }
        if (!isValidHallTicket1(hallTicket1)) {
            alert("Please enter a valid hall ticket number for School.");
            return;
        }
        if (!isValidYear2(year2)) {
            alert("Please enter a valid year of passing for Senior Secondary.");
            return;
        }
        if (!isValidPercentage2(percentage2)) {
            alert("Please enter a valid percentage for Senior Secondary.");
            return;
        }
        if (!isValidHallTicket2(hallTicket2)) {
            alert("Please enter a valid hall ticket number for Senior Secondary.");
            return;
        }
        if (!isValidYear3(year3)) {
            alert("Please enter a valid year of passing for Graduation.");
            return;
        }
        if (!isValidPercentage3(percentage3)) {
            alert("Please enter a valid percentage for Graduation.");
            return;
        }
        if (!isValidHallTicket3(hallTicket3)) {
            alert("Please enter a valid hall ticket number for Graduation.");
            return;
        }
        if (!isValidYear4(year4)) {
            alert("Please enter a valid year of passing for Post Graduation.");
            return;
        }
        if (!isValidPercentage4(percentage4)) {
            alert("Please enter a valid percentage for Post Graduation.");
            return;
        }
        if (!isValidHallTicket4(hallTicket4)) {
            alert("Please enter a valid hall ticket number for Post Graduation.");
            return;
        }

        // Save to localStorage
        const usersData = {
            name,
            college,
            university,
            postUniversity,
            year1,
            percentage1,
            hallTicket1,
            year2,
            percentage2,
            hallTicket2,
            year3,
            percentage3,
            hallTicket3,
            year4,
            percentage4,
            hallTicket4
        };

        localStorage.setItem("userData", JSON.stringify(usersData));
        alert("Data saved successfully!");

        // Reset form fields
        setName('');
        setCollege('');
        setUniversity('');
        setPostUniversity('');
        setYear1('');
        setPercentage1('');
        setHallTicket1('');
        setYear2('');
        setPercentage2('');
        setHallTicket2('');
        setYear3('');
        setPercentage3('');
        setHallTicket3('');
        setYear4('');
        setPercentage4('');
        setHallTicket4('');
    };

    const handleBack = () => {
        alert("Back button clicked!");
        // Implement navigation logic here if needed
    };

    const handleNext = () => {
        alert("Next button clicked!");
        // Implement navigation logic here if needed
    };

    const handleOtherDocuments = () => {
        alert("Other documents button clicked!");
        // Implement logic to upload or show modal
    };

    return (
        <div className="parent">
            <div className="child">
                <h1>Future Invo Solutions</h1>
                <p>Employee OnBoarding Form</p>
                <h2>Education Details</h2>
                <form onSubmit={handleSubmit} id="formm">

                    <div className="first-column">
                        <label className="label-field">School Name <span>*</span>:</label><br />
                        <input type="text" className="input-field" value={name} onChange={(e) => setName(e.target.value)} /><br />
                        <div className="flexing">
                             
                             <div className="flexing1">
                               <label id="small-label">Year of Passing</label>
                                  <input type="number" className="small-input" value={year1} onChange={(e) => setYear1(e.target.value)} />
                             </div>
                             <div className="flexing2">
                              <label id="small-label">Percentage</label>
                              <input type="number" step="0.01" className="small-input" value={percentage1} onChange={(e) => setPercentage1(e.target.value)} />
                             </div>
                           <div className="flexing3">
                                    <label id="small-label">Hall Ticket Number</label>
                                     <input type="number" className="small-input" value={hallTicket1} id="flex1" onChange={(e) => setHallTicket1(e.target.value)} />

                           </div>
                        
                       
                        </div>
                     
                    </div>

                    <div className="column-second">
                        <label className="label-field">Senior Secondary <span>*</span>:</label><br />
                        <input type="text" className="input-field" value={college} onChange={(e) => setCollege(e.target.value)} />
                           
                            <div className="flexing">

                         <div className="flexing1">
                              <label id="small-label">Year of Passing</label>
                                 <input type="number" className="small-input" value={year2} onChange={(e) => setYear2(e.target.value)} />
                         </div>
                         <div className="flexing2">

                               <label id="small-label">Percentage</label>
                              <input type="number" step="0.01" className="small-input" value={percentage2} onChange={(e) => setPercentage2(e.target.value)} />
                         </div>
                         <div className="flexing3">
                               <label id="small-label">Hall Ticket Number</label>
                              <input type="number" className="small-input" value={hallTicket2} id="flex2" onChange={(e) => setHallTicket2(e.target.value)} />
                         </div>
                        </div>
                        
                       
                        
                        
                    </div>

                    <div className="column-three">
                        <label className="label-field">Graduation <span>*</span>:</label><br />
                        <input type="text" className="input-field" value={university} onChange={(e) => setUniversity(e.target.value)} />

                        <div className="flexing">
                              <div className="flexing1">
                               <label id="small-label">Year of Passing</label>
                               <input type="number" className="small-input" value={year3} onChange={(e) => setYear3(e.target.value)} />
                              </div>
                             <div className="flexing2">
                               <label id="small-label">Percentage</label>
                               <input type="number" step="0.01" className="small-input" value={percentage3} onChange={(e) => setPercentage3(e.target.value)} />

                               </div>
                               <div className="flexing3">
                                  <label id="small-label">Hall Ticket Number</label>
                                  <input type="number" className="small-input" value={hallTicket3} id="flex3" onChange={(e) => setHallTicket3(e.target.value)} />
                               </div>

                        </div>
                       
                       
                       
                    </div>

                    <div className="column-four">
                        <label className="label-field">Post Graduation <span>*</span>:</label><br />
                        <input type="text" className="input-field" value={postUniversity} onChange={(e) => setPostUniversity(e.target.value)} />
                        <div className="flexing">

                         <div className="flexing1">
                              <label id="small-label">Year of Passing</label>
                                 <input type="number" className="small-input" value={year4} onChange={(e) => setYear4(e.target.value)} />
                         </div>
                         <div className="flexing2">

                               <label id="small-label">Percentage</label>
                              <input type="number" step="0.01" className="small-input" value={percentage4} onChange={(e) => setPercentage4(e.target.value)} />
                         </div>
                         <div className="flexing3">
                               <label id="small-label">Hall Ticket Number</label>
                              <input type="number" className="small-input" value={hallTicket4} id="flex4" onChange={(e) => setHallTicket4(e.target.value)} />
                         </div>
                        </div>
                        
                       
                       
                    </div>

                    {/* Buttons */}
                    <div className="button-container">
                        <button type="button" onClick={handleOtherDocuments} id="btn">Any Other Documentations</button>
                        <button type="button" onClick={handleBack} id="back-btn">Back</button>
                        <button type="submit" id="next-btn">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
}






// import React, { useState } from 'react';
// import '../styles/page2.css';
// import { useNavigate } from 'react-router-dom';

// export default function Page2() {
//     const [name, setName] = useState("");
//     const [college, setCollege] = useState("");
//     const [university, setUniversity] = useState("");
//     const [postUniversity, setPostUniversity] = useState("");

//     const [year1, setYear1] = useState("");
//     const [percentage1, setPercentage1] = useState("");
//     const [hallTicket1, setHallTicket1] = useState("");

//     const [year2, setYear2] = useState("");
//     const [percentage2, setPercentage2] = useState("");
//     const [hallTicket2, setHallTicket2] = useState("");

//     const [year3, setYear3] = useState("");
//     const [percentage3, setPercentage3] = useState("");
//     const [hallTicket3, setHallTicket3] = useState("");

//     const [year4, setYear4] = useState("");
//     const [percentage4, setPercentage4] = useState("");
//     const [hallTicket4, setHallTicket4] = useState("");

//     // Validation functions
//     const isValidName = (value) => /^[A-Za-z\s]+$/.test(value);
//     const isValidCollege = (value) => /^[A-Za-z\s]+$/.test(value);
//     const isValidUniversity = (value) => /^[A-Za-z\s]+$/.test(value);
//     const isValidPostUniversity = (value) => /^[A-Za-z\s]+$/.test(value);

//     const isValidYear1 = (year1) => /^\d{4}$/.test(year1);
//     const isValidPercentage1 = (percentage1) => /^\d+(\.\d+)?$/.test(percentage1);
//     const isValidHallTicket1 = (hallTicket1) => /^\d+$/.test(hallTicket1);

//     const isValidYear2 = (year2) => /^\d{4}$/.test(year2);
//     const isValidPercentage2 = (percentage2) => /^\d+(\.\d+)?$/.test(percentage2);
//     const isValidHallTicket2 = (hallTicket2) => /^\d+$/.test(hallTicket2);

//     const isValidYear3 = (year3) => /^\d{4}$/.test(year3);
//     const isValidPercentage3 = (percentage3) => /^\d+(\.\d+)?$/.test(percentage3);
//     const isValidHallTicket3 = (hallTicket3) => /^\d+$/.test(hallTicket3);

//     const isValidYear4 = (year4) => /^\d{4}$/.test(year4);
//     const isValidPercentage4 = (percentage4) => /^\d+(\.\d+)?$/.test(percentage4);
//     const isValidHallTicket4 = (hallTicket4) => /^\d+$/.test(hallTicket4);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate all fields
//         if (!isValidName(name)) {
//             alert("Please enter a valid name (letters and spaces only).");
//             return;
//         }
//         if (!isValidCollege(college)) {
//             alert("Please enter a valid college name.");
//             return;
//         }
//         if (!isValidUniversity(university)) {
//             alert("Please enter a valid university name.");
//             return;
//         }
//         if (!isValidPostUniversity(postUniversity)) {
//             alert("Please enter a valid post-university name.");
//             return;
//         }
//         if (!isValidYear1(year1)) {
//             alert("Please enter a valid year of passing for School.");
//             return;
//         }
//         if (!isValidPercentage1(percentage1)) {
//             alert("Please enter a valid percentage for School.");
//             return;
//         }
//         if (!isValidHallTicket1(hallTicket1)) {
//             alert("Please enter a valid hall ticket number for School.");
//             return;
//         }
//         if (!isValidYear2(year2)) {
//             alert("Please enter a valid year of passing for Senior Secondary.");
//             return;
//         }
//         if (!isValidPercentage2(percentage2)) {
//             alert("Please enter a valid percentage for Senior Secondary.");
//             return;
//         }
//         if (!isValidHallTicket2(hallTicket2)) {
//             alert("Please enter a valid hall ticket number for Senior Secondary.");
//             return;
//         }
//         if (!isValidYear3(year3)) {
//             alert("Please enter a valid year of passing for Graduation.");
//             return;
//         }
//         if (!isValidPercentage3(percentage3)) {
//             alert("Please enter a valid percentage for Graduation.");
//             return;
//         }
//         if (!isValidHallTicket3(hallTicket3)) {
//             alert("Please enter a valid hall ticket number for Graduation.");
//             return;
//         }
//         if (!isValidYear4(year4)) {
//             alert("Please enter a valid year of passing for Post Graduation.");
//             return;
//         }
//         if (!isValidPercentage4(percentage4)) {
//             alert("Please enter a valid percentage for Post Graduation.");
//             return;
//         }
//         if (!isValidHallTicket4(hallTicket4)) {
//             alert("Please enter a valid hall ticket number for Post Graduation.");
//             return;
//         }

//         // Save to localStorage
//         const usersData = {
//             name,
//             college,
//             university,
//             postUniversity,
//             year1,
//             percentage1,
//             hallTicket1,
//             year2,
//             percentage2,
//             hallTicket2,
//             year3,
//             percentage3,
//             hallTicket3,
//             year4,
//             percentage4,
//             hallTicket4
//         };

//         localStorage.setItem("userData", JSON.stringify(usersData));
//         alert("Data saved successfully!");

//         // Reset form fields
//         setName('');
//         setCollege('');
//         setUniversity('');
//         setPostUniversity('');
//         setYear1('');
//         setPercentage1('');
//         setHallTicket1('');
//         setYear2('');
//         setPercentage2('');
//         setHallTicket2('');
//         setYear3('');
//         setPercentage3('');
//         setHallTicket3('');
//         setYear4('');
//         setPercentage4('');
//         setHallTicket4('');
//     };

//     const handleBack = () => {
//         alert("Back button clicked!");
//         // Implement navigation logic here if needed
//     };

//     const handleNext = () => {
//         alert("Next button clicked!");
//         // Implement navigation logic here if needed
//     };

//     const handleOtherDocuments = () => {
//         alert("Other documents button clicked!");
//         // Implement logic to upload or show modal
//     };

//     return (
//         <div className="parent">
//             <div className="child">
//                 <h1>Future Invo Solutions</h1>
//                 <p>Employee OnBoarding Form</p>
//                 <h2>Education Details</h2>
//                 <form onSubmit={handleSubmit} id="formm">

//                     <div className="first-column">
//                         <label className="label-field">School Name <span>*</span>:</label><br />
//                         <input
//                             type="text"
//                             className="input-field"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         /><br />
//                         <div className="flexing">

//                             <div className="flexing1">
//                                 <label id="small-label">Year of Passing</label>
//                                 <input
//                                     type="number"
//                                     className="small-input"
//                                     value={year1 || ""}
//                                     onChange={(e) => setYear1(e.target.value)}
//                                 />
//                             </div>
//                             <div className="flexing2">
//                                 <label id="small-label">Percentage</label>
//                                 <input
//                                     type="number"
//                                     step="0.01"
//                                     className="small-input"
//                                     value={percentage1 || ""}
//                                     onChange={(e) => setPercentage1(e.target.value)}
//                                 />
//                             </div>
//                             <div className="flexing3">
//                                 <label id="small-label">Hall Ticket Number</label>
//                                 <input
//                                     type="number"
//                                     className="small-input"
//                                     value={hallTicket1 || ""}
//                                     id="flex1"
//                                     onChange={(e) => setHallTicket1(e.target.value)}
//                                 />
//                             </div>

//                         </div>

//                     </div>

//                     <div className="column-second">
//                         <label className="label-field">Senior Secondary <span>*</span>:</label><br />
//                         <input
//                             type="text"
//                             className="input-field"
//                             value={college}
//                             onChange={(e) => setCollege(e.target.value)}
//                         />

//                         <div className="flexing">

//                             <div className="flexing1">
//                                 <label id="small-label">Year of Passing</label>
//                                 <input
//                                     type="number"
//                                     className="small-input"
//                                     value={year2}
//                                     onChange={(e) => setYear2(e.target.value)}
//                                 />
//                             </div>
//                             <div className="flexing2">
//                                 <label id="small-label">Percentage</label>
//                                 <input
//                                     type="number"
//                                     step="0.01"
//                                     className="small-input"
//                                     value={percentage2}
//                                     onChange={(e) => setPercentage2(e.target.value)}
//                                 />
//                             </div>
//                             <div className="flexing3">
//                                 <label id="small-label">Hall Ticket Number</label>
//                                 <input
//                                     type="number"
//                                     className="small-input"
//                                     value={hallTicket2}
//                                     id="flex2"
//                                     onChange={(e) => setHallTicket2(e.target.value)}
//                                 />
//                             </div>
//                         </div>

//                     </div>

//                     <div className="column-three">
//                         <label className="label-field">Graduation <span>*</span>:</label><br />
//                         <input
//                             type="text"
//                             className="input-field"
//                             value={university}
//                             onChange={(e) => setUniversity(e.target.value)}
//                         />

//                         <div className="flexing">
//                             <div className="flexing1">
//                                 <label id="small-label">Year of Passing</label>
//                                 <input
//                                     type="number"
//                                     className="small-input"
//                                     value={year3}
//                                     onChange={(e) => setYear3(e.target.value)}
//                                 />
//                             </div>
//                             <div className="flexing2">
//                                 <label id="small-label">Percentage</label>
//                                 <input
//                                     type="number"
//                                     step="0.01"
//                                     className="small-input"
//                                     value={percentage3}
//                                     onChange={(e) => setPercentage3(e.target.value)}
//                                 />
//                             </div>
//                             <div className="flexing3">
//                                 <label id="small-label">Hall Ticket Number</label>
//                                 <input
//                                     type="number"
//                                     className="small-input"
//                                     value={hallTicket3}
//                                     id="flex3"
//                                     onChange={(e) => setHallTicket3(e.target.value)}
//                                 />
//                             </div>

//                         </div>

//                     </div>

//                     <div className="column-four">
//                         <label className="label-field">Post Graduation <span>*</span>:</label><br />
//                         <input
//                             type="text"
//                             className="input-field"
//                             value={postUniversity}
//                             onChange={(e) => setPostUniversity(e.target.value)}
//                         />
//                         <div className="flexing">

//                             <div className="flexing1">
//                                 <label id="small-label">Year of Passing</label>
//                                 <input
//                                     type="number"
//                                     className="small-input"
//                                     value={year4}
//                                     onChange={(e) => setYear4(e.target.value)}
//                                 />
//                             </div>
//                             <div className="flexing2">
//                                 <label id="small-label">Percentage</label>
//                                 <input
//                                     type="number"
//                                     step="0.01"
//                                     className="small-input"
//                                     value={percentage4}
//                                     onChange={(e) => setPercentage4(e.target.value)}
//                                 />
//                             </div>
//                             <div className="flexing3">
//                                 <label id="small-label">Hall Ticket Number</label>
//                                 <input
//                                     type="number"
//                                     className="small-input"
//                                     value={hallTicket4}
//                                     id="flex4"
//                                     onChange={(e) => setHallTicket4(e.target.value)}
//                                 />
//                             </div>
//                         </div>

//                     </div>

//                     {/* Buttons */}
//                     <div className="button-container">
//                         <button type="button" onClick={handleOtherDocuments} id="btn">Any Other Documentations</button>
//                         <button type="button" onClick={handleBack} id="back-btn">Back</button>
//                         <button type="submit" id="next-btn">Next</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }
