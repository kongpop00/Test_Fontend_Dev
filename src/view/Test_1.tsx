import {  useState } from "react"
import Test_1Style from "../component/Test_1Style"


export interface Props{
  handleMove_Position? :()=>void
  shape : string[];
  arrayShape    :number[]
  isMove_Position : Boolean
}

const Test_1 = () => {

    const [arrayShape ,setArrayShape]=useState<number[] >([0,1,2,3,4,5])
  const [isMove_Position , setIsMove_Position]=useState<boolean>(false)


  


  const handleRandom =():void=>{
      let newArrayShape:number[]=[]
      let checkAraay:boolean = true  // ไว้เช็คว่า newArrayShape ครบ 6 ตัวหรือยัง
      while (checkAraay) {
        var random:number= Math.floor(Math.random() * 6);
        if (newArrayShape.indexOf(random) < 0) {
          newArrayShape.push(random);
        }
        if (newArrayShape.length == 6) {
          checkAraay = false;
        }
        setArrayShape(newArrayShape)
      
   
      }
  }
  const handleMove_Position = ():void=>{
    setIsMove_Position(!isMove_Position)
    console.log(isMove_Position);
    
  }


  const shape: string[] = [
    "circle",
    "squares",
    "rectangle",
    "oval",
    "parallelogram",
    "trapezoid",
  ];
  return (
    <div>
   
       <Test_1Style  handleMove_Position={handleMove_Position} shape={shape}  handleRandom ={handleRandom } arrayShape={arrayShape}  isMove_Position={ isMove_Position}/>
    </div>
  )
}

export default Test_1
