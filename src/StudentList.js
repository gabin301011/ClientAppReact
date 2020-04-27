import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function StudentList() {
useEffect (() => {
    fetchStudents();
},[]);

const [students, setStudents] = useState([]);

const fetchStudents = async () => {
    const data = await fetch('http://tomaszgadek.com/api/students');
    const students = await data.json();
    console.log(students);  
    setStudents(students);
    console.log(students instanceof Array)
}; 



    return(
        <div>
            {students.map(student=> (
                <h3 key={student.index}><Link to={`/studentList/${student.index}`}>{student.index}</Link></h3>
            ))}  
              
        </div>
    );
}

export default StudentList;
