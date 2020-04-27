import React, {useState, useEffect} from 'react';
import './App.css';

function Details({match}) {
useEffect (() => {
    console.log(match);
    fetchStudent();
}, []);

const [student, setStudent] = useState({});
const fetchStudent = async () => {
    const fetchStudent = await fetch(`http://tomaszgadek.com/api/students/${match.params.index}`);
    const student = await fetchStudent.json();
    //console.log(student instanceof Array)
    setStudent(student);
}

    return(
        <div>
            <h1 key={student.index}>{student.index}</h1>
            <h3 key={student.group}>{student.group}</h3>   
            {student.labs.map(det=> (
                <h3 key={det.points}>{det.points}</h3>
            ))}
        </div>
    );
}
export default Details;
