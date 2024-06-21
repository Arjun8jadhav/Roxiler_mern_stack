import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './datatable.scss';
export const Datatable = () => {
  const [data, setData] = useState([]);
 
  const [selectedMonth, setSelectedMonth] = useState(3);
  const [page,setPage]=useState(1);
  const [count,setcount]=useState(1);
  const handlechange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };
  const handlepage=()=>{
    setPage(page+10);
    setcount(count+1);
  }
  const handlepageneg=()=>{
    setPage(page-10);
    setcount(count-1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/show`, {
          params: { month: selectedMonth,
            page: page
           }
        });
        console.log(response.data);
        setData(response.data);
      } catch (err) {
         console.log(err);
      } 
    };

    fetchData();
  }, [selectedMonth,page]); 

  return (
    <div className='container'>
      <div className="select">
      <h1>Data Table</h1>
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
      </div>

      
        <table className='cont_t'>
          <thead>
            <tr>
              <th className='title'>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Sold</th>
              <th>Date of Sale</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.sold ? 'True' : 'False'}</td>
                <td>{item.dateOfSale}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="next">
           <button disabled={page<=10} onClick={handlepageneg}>Prev</button>
            <span>{count}</span>
            <button disabled={data.length==0}onClick={handlepage}>Next</button>
        </div>

      
    </div>
  );
};
