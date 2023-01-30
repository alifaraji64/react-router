import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

const CareerDetails = () => {
  const { id } = useParams()
  const career = useLoaderData()
  return (
    <div className='career-details'>
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>location: {career.location}</p>
      <div className='details'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint
        asperiores accusamus eligendi vitae. Perferendis nam illum corporis
        quidem possimus quisquam pariatur sequi id quas sit. Optio nemo dolore
        exercitationem.
      </div>
    </div>
  )
}

export default CareerDetails

export const careerDetailLoader = async ({ params }) => {
  const { id } = params
  const res = await fetch('http://localhost:4000/careers/' + id)
  if(!res.ok){
    throw Error('Couldn"t find that career')
  }
  return await res.json()
}
