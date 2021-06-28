import React from 'react';

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ name, exercises }) => <p>{name} have: {exercises} exercises !</p>

const CourseContent = ({ parts }) => {
    return(
        <div>
            {parts.map(({ name, id, exercises}) => (
                <Part key={id} name={name} exercises={exercises}/>
            ))}
        </div>
    )
}

const Total = ({parts}) => {
    const total = parts.reduce((a, b) => a + b.exercises, 0)
    return(
        <p>
            Total of <b>{total}</b> exercises !
        </p>
    )
}

const Course = ({ course }) => {
       
    return(
        <div>
            <Header course={course.name}/> 
            <CourseContent parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
    
};

export default Course;