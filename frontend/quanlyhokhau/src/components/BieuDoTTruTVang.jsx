import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);


function BieuDoTTruTVang() {
  return (
    <div className='ml-96 mr-96 mt-36 mb-20' >
      <Line
        data={{
          labels: ["năm 2015", "năm 2016", "năm 2017", "năm 2018", "năm 2019",
            "năm 2020", "năm 2021", "năm 2022", "năm 2023"],
          datasets: [
            {
              data: [4, 2, 1, 1, 2, 3, 7, 1, 0],
              label: "Tạm trú",
              borderColor: "#e8c3b9",
              fill: false
            },
            {
              data: [6, 8, 2, 0, 7, 2, 8, 3, 3],
              label: "Tạm vắng",
              borderColor: "#c45850",
              fill: false
            }
          ]
        }}
        options={{
          title: {
            display: true,
            text: "Thống kê số lượng người tạm trú/ tạm vắng"
          },
          legend: {
            display: true,
            position: "bottom"
          }
        }}
      />
    </div>
  )
}

export default BieuDoTTruTVang