import React from 'react';
import { Line, LineChart } from 'recharts';

const resultData = [
  {
    "id": 1,
    "name": "Alex Mercer",
    "physics": 88,
    "chemistry": 92,
    "math": 95
  },
  {
    "id": 2,
    "name": "Jamie Lin",
    "physics": 76,
    "chemistry": 85,
    "math": 82
  },
  {
    "id": 3,
    "name": "Samira Patel",
    "physics": 91,
    "chemistry": 89,
    "math": 98
  },
  {
    "id": 4,
    "name": "Jordan Hayes",
    "physics": 65,
    "chemistry": 72,
    "math": 68
  },
  {
    "id": 5,
    "name": "Taylor Swift",
    "physics": 84,
    "chemistry": 90,
    "math": 87
  },
  {
    "id": 6,
    "name": "Casey Lee",
    "physics": 95,
    "chemistry": 96,
    "math": 99
  },
  {
    "id": 7,
    "name": "Morgan Wright",
    "physics": 58,
    "chemistry": 64,
    "math": 70
  },
  {
    "id": 8,
    "name": "Riley Kim",
    "physics": 82,
    "chemistry": 79,
    "math": 85
  },
  {
    "id": 9,
    "name": "Devon Carter",
    "physics": 73,
    "chemistry": 68,
    "math": 77
  },
  {
    "id": 10,
    "name": "Avery Brooks",
    "physics": 89,
    "chemistry": 94,
    "math": 91
  }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey='chemistry' stroke='blue'></Line>
                <Line dataKey='physics' stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;