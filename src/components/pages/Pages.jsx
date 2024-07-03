



import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataFromStorage } from "../../utility/localStorage";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const Pages = () => {
  const pages = useLoaderData()
  const [readBook,setReadBook]=useState([])

  useEffect(()=>{
    const getReadBook=getDataFromStorage('read');

    if(pages.length>0){
      const readBooksData =pages.filter(page=> getReadBook.includes(page.id));
      setReadBook(readBooksData)
    }
  },[pages])

  return (
  <div className=" w-full max-w-3xl mx-auto p-4">
   
     <ResponsiveContainer width="100%" height={400}>
     <BarChart
      width={800}
      height={600}
      
      data={readBook}
      margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" />
      <YAxis />
      <Bar dataKey="numberOfPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {readBook.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  
     </ResponsiveContainer>
  </div>
  );
};

export default Pages;
