import React from "react";
import Card from './Card';

const Cards = ({courses}) => {
    let allCourses = [];

    //it returns you a list of all courses recived from the api response
    const getCourses = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    return (
        <div>
        {
            getCourses().map((course)=>{
                <Card course={course}/>
            })
        }
        </div>
    )
}

export default Cards