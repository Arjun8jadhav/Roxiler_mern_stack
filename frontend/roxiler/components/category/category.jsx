import { useEffect, useState } from "react";
import './category.scss'
import axios from "axios";

export const Category = ({selectedMonth,setMonth}) => {
  
  const [data, setData] = useState([]);
  const handlechange = (event) => {
    setMonth(parseInt(event.target.value));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/category`, {
          params: { month: selectedMonth,
           }
        });
        console.log(response.data);
        setData(response.data);
      } catch (err) {
         console.log(err);
      } 
    };

    fetchData();
  }, [selectedMonth]); 
  return (
    <div className="container">
       
        <div className="data">
          
            <div className="cards">
            {data.map((item) => (
              <div key={item._id} className="card">
                <span>Category: {item._id}</span>
                <br/>
                <span>Quantity: {item.count}</span>
                <br/>
                <span>Sale Amount: {parseInt(item.total)}</span>
              </div>
            ))}
            </div>
            
        </div>
    </div>
  )
}
