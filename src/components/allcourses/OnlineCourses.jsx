import React from "react"
import "./courses.css"
import Heading from "../common/heading/Heading"
import { FaGraduationCap } from "react-icons/fa"
import { GiEarthAmerica } from "react-icons/gi"
import { MdEngineering } from "react-icons/md"
import { IoLanguage } from "react-icons/io5"

const OnlineCourses = () => {
  const categories = [
    {
      icon: <FaGraduationCap size={60}  />,
      title: "SAT Preparation",
      tag: "Standardized Testing"
    },
    {
      icon: <GiEarthAmerica size={60}  />,
      title: "International Curriculum",
      tag: "IB / IGCSE / Others"
    },
    {
      icon: <MdEngineering size={60} />,
      title: "Engineering Semester Exams",
      tag: "B.Tech / B.E."
    },
    {
      icon: <IoLanguage size={60}  />,
      title: "English and Other Languages",
      tag: "Language Mastery"
    }
  ]

  return (
    <section className='online' style={{marginTop:"40px" , marginBottom:"40px"}}>
      <div className='container'>
        <Heading subtitle='CATEGORIES WE OFFER' title='Explore Our Learning Categories' />
        <div className='content grid3'>
          {categories.map((item, index) => (
            <div className='box' key={index}>
              <div className="icon-category">{item.icon}</div>
              <h1>{item.title}</h1>
              <span>{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OnlineCourses
