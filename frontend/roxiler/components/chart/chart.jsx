import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export const BarChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(3);
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  const handleChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/bar_chart', {
          params: { month: selectedMonth }
        });
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [selectedMonth]);

  useEffect(() => {
    const chartData = {
      labels: [
        '0-100',
        '101-200',
        '201-300',
        '301-400',
        '401-500',
        '501-600',
        '601-700',
        '701-800',
        '801-900',
        '901-above'
      ],
      datasets: [
        {
          label: 'Total Products Sold',
          data: data,
          backgroundColor: 'rgba(75, 192, 197, 0.6)',
          borderColor: 'rgba(70, 192, 192, 1)',
          borderWidth: 2,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: options,
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <>
      <div>
        <label htmlFor="month">Select Month:</label>
        <select id="month" value={selectedMonth} onChange={handleChange}>
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
      <div className="bar-chart">
        <canvas id="myChart"></canvas>
      </div>
    </>
  );
};
