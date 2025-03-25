import { useEffect, useState } from 'react'
import { onlineCourses } from './data'


const App = () => {
  const [courses,setCourses]=useState()
  const [allCost, setAllCost]=useState()
  const [selectedCourse,setSelectedCourse]=useState([])
  const selectCourse=(num)=>{
    let newArr=[...selectedCourse]
    let newCourse=courses.find((item,index)=>index===num)
    let totalPrice=0
    selectedCourse.map((item)=>{
      totalPrice+=item.price
    })
    if(!selectedCourse.some((course)=>course.title===newCourse.title)){
      newArr.push(newCourse)
      setSelectedCourse(newArr)
    }
    setAllCost(totalPrice)
  }
  useEffect(()=>{
    setCourses(onlineCourses)
  },[])
  
  return (
    <>
      <div className="p-2 flex gap-10 flex-col">
        <h1 className="text-center text-4xl">STARTUM ONLINE COURSES</h1>
        <div className="grid grid-cols-[1fr,3fr] gap-4 max-md:grid-cols-1 ">
          <div className="bg-purple-600 text-white p-4">
            {selectedCourse?selectedCourse.map((item, index) => (
              <>
                <div><p>Total price {allCost}</p></div>
                <div key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.price}</p>
                </div>
              </>
            )):''}
          </div>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {courses ? courses.map((item, index) => (
              <div
                key={index}
                className="flex cursor-pointer flex-col gap-4 p-4 rounded-lg bg-slate-800 text-white items-center relative min-h-[30vh]"
              >
                <h4>{<item.img/>}</h4>
                <h3 className="text-3xl">
                  <b>Course:</b> {item.title}
                </h3>
                <p className="absolute top-2 left-2 bg-red-700 text-white p-2 rounded-md">
                  {item.level}
                </p>
                <p className="absolute top-2 right-2 bg-blue-700 text-white p-2 rounded-md">
                  {item.length}
                </p>
                <p>
                  <b>Price:</b> $ {item.price}
                </p>
                <button onClick={()=>selectCourse(index)} className="p-2 rounded-md bg-green-700 text-white cursor-pointer w-full">
                  Buy
                </button>
              </div>
            )):''}
          </div>
        </div>
      </div>
    </>
  );
}

export default App