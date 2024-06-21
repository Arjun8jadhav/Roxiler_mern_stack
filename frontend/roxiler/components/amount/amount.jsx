import { useEffect, useState } from "react";
import "./amount.scss";
import axios from "axios";
import { Category } from "../category/category";

export const Amount_data = () => {
  const [selectedMonth,setMonth]=useState(3);
  const [data, setData] = useState([]);
  const handlechange = (event) => {
    setMonth(parseInt(event.target.value));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/sale_amount`, {
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
        <div>
        <label htmlFor="month">Select Month:</label>
        <select id="month" value={selectedMonth} onChange={handlechange}>
          <option value={1}>January</option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
      </div>
        <div className="data">
            <h2>Total Sales:</h2>
            <span> ₹ {data.length>0?parseInt(data[0].totalAmount): 0}</span>
        </div>
       <Category selectedMonth={selectedMonth} setMonth={setMonth}/>
    </div>
  )
}
