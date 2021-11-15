const graph = document.getElementById("graph").getContext("2d");
console.log(graph);

const myChart = new Chart(graph, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    title: {
      display: true,
      text: "pop de qlq villes francos",
      fontSize: 24,
    },
    legend: {
      display: false,
    },
    layout: {
      padding: {
        top: 20,
      },
    },
  },
});

// let myChart = new Chart(graph, {
//   //   type: "pie",
//   type: "bar",
//   //   type: "polarArea",
//   //   type: "line",
//   //   type: "doughnut",
//   data: {
//     labels: ["Abidjan", "Alger", "Bamako", "Casablance", "Dakar", "Paris"],
//     datasets: [
//       {
//         label: "Population en M",
//         data: [6, 8, 4, 7, 2, 9],
//         backgroundColor: "orange",
//         hoverBorderWidth: 3,
//       },
//     ],
//   },
//   options: {
//     title: {
//       display: true,
//       Text: "pop de qlq villes francos",
//       fontSize: 24,
//     },
//     legend: {
//       display: false,
//     },
//     layout: {
//       padding: {
//         top: 20,
//       },
//     },
//   },
// });
// console.log(myChart);
