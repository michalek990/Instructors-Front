import React, { useEffect, useState } from 'react';
import "./styles.css"
import Avatar from "../../images/journalist_741839.png";
function Instrcutors() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/instructors/all', {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    })
    .then(response => response.json())
    .then(data => setInstructors(data))
        .then(data => console.log(data))
    .catch(error => console.error('Error fetching instructors:', error));
  }, []);

    return (
        <div className="instructors-page">
            <h1>Our Instructors</h1>
            <ul className="instructors-list">
                {instructors.map(instructor => (
                    <li key={instructor.id} className="instructor-item">
                        <img src={Avatar} alt={instructor.name} className="instructor-image" />
                        <div className="instructor-info">
                            <h2>{instructor.firstName} {instructor.lastName}</h2>
                            <h5>{instructor.email}, tel: {instructor.phoneNumber}</h5>
                            <p>{instructor.firstName} is a highly dedicated and certified fitness trainer, boasting over
                                a decade of
                                hands-on experience in the health and wellness sector. His journey began with a profound
                                passion for sports and physical activity, which naturally evolved into a professional
                                career after obtaining his certification from a prestigious fitness training
                                institute.</p>
                            <br />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Instrcutors;
