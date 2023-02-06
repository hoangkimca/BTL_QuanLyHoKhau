import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);


function BieuDoTTruTVang() {
  return (
    <div className='ml-96 mr-96 mt-36' >
      <Line
        data={{
          labels: ["tháng 1", "tháng 2", "tháng 3", "tháng 4", "tháng 5", "tháng 6",
            "tháng 7", "tháng 8", "tháng 9", "tháng 10", "tháng 11", "tháng 12"],
          datasets: [
            {
              data: [4, 2, 1, 1, 2, 3, 7, 1, 0, 6],
              label: "Tạm trú",
              borderColor: "#e8c3b9",
              fill: false
            },
            {
              data: [6, 8, 2, 0, 7, 2, 8, 3, 3, 4],
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