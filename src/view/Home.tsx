import { Card, Flex } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  interface datatype {
    title: String;
    sunTitle: String;
    link: String;
  } 
  const datatypes:datatype[] = [
    {
      title: "Test 1",
      sunTitle: "asdasd",
      link: "/test1",
    },
    {
      title: "Test 2",
      sunTitle: "asdasd",
      link: "sadas",
    },
    {
      title: "Test 3",
      sunTitle: "asdasd",
      link: "sadas",
    },
  ];
  return (
    <Flex
    className="viewblackground"
     style={{width:"100%" , height:"100vh "}}
     justify="center"
     align="center"
     gap={30}
     >
        { datatypes.map(( datatype,index)=>{
          return(

           <Link to={`${datatype.link}`}> <Card key={index} title={datatype.title}  style={{ width: 300 }}>
         <p>{datatype.sunTitle}</p>
      
    </Card></Link>
          )
        })}
    </Flex>
  );
};

export default Home;
