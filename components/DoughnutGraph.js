import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const DoughnutGraph = () => {
  const data = {
    labels: ['cataract', 'childhood', 'undetermined', 'diabetic retinopathy', 'trachoma', 'corneal Occlusions', 'age-related macular degeneration', 'glaucoma','uncorrected refractive errors'],
    datasets: [
      {
        data: [51, 4, 21, 1, 3, 4, 5, 8, 3],
        backgroundColor: [
          '#fc5e03',
          '#ff6363',
          '#ffa340',
          '#ffd51c',
          '#1ee660',
          '#00b06d',
          '#1e88e6',
          '#004fb0',
        ],
        hoverBackgroundColor: '#ff0000',
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        formatter: function (value) {
          return value + '%';
        },
        labels: {
          title: {
            font: {
              weight: 'bold',
            },
          },
        },

        color: '#fff',
        'font-weight': 'bold',
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="p-2 flex flex-col justify-center text-center items-center">
      <h1 className="p-2 mb-2 text-4xl text-red-500 font-bold shadow-md">
        Global eye disease percentage
      </h1>
      <div className="flex flex-col justify-center text-center w-80 lg:w-3/6 pb-6">
        <Doughnut data={data} plugins={[ChartDataLabels]} options={options} />
      </div>
    </div>
  );
};

export default DoughnutGraph;