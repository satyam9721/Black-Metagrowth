import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './result.css';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

function QuizResult(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the server using Axios
    axios.post('http://localhost:6000/saveDataEndpoint', formData) // Replace with your server's endpoint
      .then(response => {
        console.log('Data sent successfully:', response.data);
        // Redirect to another page after submitting the form
        // navigate('/customers');
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });


    // For now, let's store it in local storage.
    localStorage.setItem('name', formData.name);
    localStorage.setItem('email', formData.email);
    localStorage.setItem('phoneNumber', formData.phoneNumber);
    
   

  };

  return (
    <div>
      <h2 className="info text-center ml-4">Contact Information</h2>
      <form className="contact mt-3" onSubmit={handleSubmit}>
        <div>
          <label className="elements">What's your name?</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="elements">What's your Email address?</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="elements">What's your Phone Number?</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button className="set btn mt-5">
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuizResult;






























































































// import React, { useState,useRef } from 'react'
// import { Button } from 'react-bootstrap';
// import './Style.css';
// import { useNavigate } from "react-router-dom";

// // const navigate = useNavigate();
// //   const handleClick = () => {
// //     navigate("/customers");
// //   };
// //   <button onClick={handleClick} className="btn sucessBtn px-5"></button>


// function QuizResult(props) {



  
  
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       phoneNumber: '',})
    
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // You can perform actions with the form data here, e.g., send it to an API.
//       console.log(formData);
//     }

//     console.log(props.score);
  

//   return (
//     <>
//     {/* <div className='show-score'>
//         Your Score:{props.score}<br/>
//         Total Score:{props.totalScore}
//     </div> */}

//     <div>
      
//     <h2>Contact Information</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input 
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input 
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input 
//             type="tel"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//       </form>
      
//     </div>
//     <Button onClick={store}  className='outline-primary mt-5'>Submit</Button>
//     {/* onClick={props.tryAgain} */}
//     </>
//   )
// }

// export default QuizResult