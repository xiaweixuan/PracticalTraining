const width_threshold = 480;

function drawLineChart() {
  if ($("#lineChart").length) {
    ctxLine = document.getElementById("lineChart").getContext("2d");
    optionsLine = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "人数"
            }
          }
        ]
      }
    };

    // Set aspect ratio based on window width
    optionsLine.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    configLine = {
      type: "line",
      data: {
        labels: [
          "5日",
          "6日",
          "7日",
          "8日",
          "9日",
          "10日",
          "11日"
        ],
        datasets: [
          {
            label: "人数",
            data: [15, 16, 17, 19, 21, 21, 21],
            fill: false,
            borderColor: "rgba(255,99,132,1)",
            lineTension: 0.1
          }
        ]
      },
      options: optionsLine
    };

    lineChart = new Chart(ctxLine, configLine);
  }
}

function drawBarChart() {
  if ($("#barChart").length) {
    ctxBar = document.getElementById("barChart").getContext("2d");

    optionsBar = {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "/人次"
            }
          }
        ]
      }
    };

    optionsBar.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    configBar = {
      type: "bar",
      data: {
        labels: ["5日","6日", "7日", "8日", "9日", "10日", "11日"],
        datasets: [
          {
            label: "/人次",
            data: [10,12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255,99,132,1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255,99,132,1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255,99,132,1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: optionsBar
    };

    barChart = new Chart(ctxBar, configBar);
  }
}

function drawPieChart() {
  if ($("#pieChart").length) {
    ctxPie = document.getElementById("pieChart").getContext("2d");
    optionsPie = {
      responsive: true,
      maintainAspectRatio: false
    };

    configPie = {
      type: "pie",
      data: {
        datasets: [
          {
            data: [5,1,15,1,18],
            backgroundColor: [
              window.chartColors.purple,
              window.chartColors.green,
              window.chartColors.red,
              window.chartColors.yellow,
              window.chartColors.blue
            ],
            label: "Storage"
          }
        ],
        labels: ["6:00-8:00", "8:00-12:00", "12:00-14:00", "14:00-18:00", "18:00-22:00"]
      },
      options: optionsPie
    };

    pieChart = new Chart(ctxPie, configPie);
  }
}

function updateChartOptions() {
  if ($(window).width() < width_threshold) {
    if (optionsLine) {
      optionsLine.maintainAspectRatio = false;
    }
    if (optionsBar) {
      optionsBar.maintainAspectRatio = false;
    }
  } else {
    if (optionsLine) {
      optionsLine.maintainAspectRatio = true;
    }
    if (optionsBar) {
      optionsBar.maintainAspectRatio = true;
    }
  }
}

function updateLineChart() {
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}

function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
}

function reloadPage() {
  setTimeout(function() {
    window.location.reload();
  }); // Reload the page so that charts will display correctly
}

function drawCalendar() {
  if ($("#calendar").length) {
    $("#calendar").fullCalendar({
      height: 400,
      events: [
        {
          title: "Meeting",
          start: "2018-09-1",
          end: "2018-09-2"
        },
        {
          title: "Marketing trip",
          start: "2018-09-6",
          end: "2018-09-8"
        },
        {
          title: "Follow up",
          start: "2018-10-12"
        },
        {
          title: "Team",
          start: "2018-10-17"
        },
        {
          title: "Company Trip",
          start: "2018-10-25",
		  end: "2018-10-27"
        },
        {
          title: "Review",
          start: "2018-11-12"
        },
        {
          title: "Plan",
          start: "2018-11-18"
        }
      ],
      eventColor: "rgba(54, 162, 235, 0.4)"
    });
  }
}
