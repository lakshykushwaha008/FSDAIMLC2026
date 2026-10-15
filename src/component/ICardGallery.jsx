import React from 'react'
import ICard from './ICard'
import cat from '../images/cat.png'
function ICardGallery() {

  const student=
  [
    {
    pic:cat,
    roll:'80808',
    name:'Rahul',
    branch:'CSE-AIML'
  },
  {
    pic:cat,
    roll:'565656',
    name:'Pankaj',
    branch:'CSE-AIML'
  },
  {
    pic:cat,
    roll:'43233',
    name:'Raj ',
    branch:'CSE'
  },
  {
    pic:cat,
    roll:'565656',
    name:'Ankit',
    branch:'CSE-AIML'
  },
  {
    pic:cat,
    roll:'676767',
    name:'Vansh',
    branch:'CSE'
  }

]
  return (
    <div style={{display:'flex'}}>
    {/* <ICard pic={cat} roll="24343" name="Ram" branch="AIML" />
    <ICard roll="9090" name="Amit" branch="CSE" />
    <ICard />
    <ICard /> */}
    {/* <ICard data={student[1]} /> */}

    {
      student.map((ele)=>(
       <ICard data={ele} />
      ))
    }
    </div>
  )
}

export default ICardGallery