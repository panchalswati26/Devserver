import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css']
})
export class PrimeNGComponent {
//   basicData: any;

//   basicOptions: any;

//   ngOnInit() {
//       const documentStyle = getComputedStyle(document.documentElement);
//       const textColor = documentStyle.getPropertyValue('--text-color');
//       const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
//       const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

//       this.basicData = {
//           labels: ['Q1', 'Q2', 'Q3', 'Q4'],
//           datasets: [
//               {
//                   label: 'Sales',
//                   data: [540, 325, 702, 620],
//                   backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
//                   borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
//                   borderWidth: 1
//               }
//           ]
//       };

//       this.basicOptions = {
//           plugins: {
//               legend: {
//                   labels: {
//                       color: textColor
//                   }
//               }
//           },
//           scales: {
//               y: {
//                   beginAtZero: true,
//                   ticks: {
//                       color: textColorSecondary
//                   },
//                   grid: {
//                       color: surfaceBorder,
//                       drawBorder: false
//                   }
//               },
//               x: {
//                   ticks: {
//                       color: textColorSecondary
//                   },
//                   grid: {
//                       color: surfaceBorder,
//                       drawBorder: false
//                   }
//               }
//           }
//       };
//   }
// }

data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'line',
                    label: 'Dataset 1',
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [50, 25, 12, 48, 56, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
        
        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }
}