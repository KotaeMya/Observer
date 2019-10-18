import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top1',
  templateUrl: './top1.component.html',
  styleUrls: ['./top1.component.css']
})
export class Top1Component implements OnInit {
  data: any;
  data1: any;
  options: any;

  retailerTable = [];
  multiTabs = [];
  uhot = [];

  count = 1;

  btn1 = true;
  btn2 = false;
  btn3 = false;
  btn4 = false;
  btn5 = false;

  constructor() { }

  ngOnInit() {

    this.retailerTable = [
      {
        up: true,
        name: 'MARIY NAFTA',
        percent: 95,
        supPercent: 4
      },
      {
        up: true,
        name: 'MARIY NAFTA',
        percent: 95,
        supPercent: 4
      },
      {
        up: false,
        name: 'MARIY NAFTA',
        percent: 43,
        supPercent: -4
      },
      {
        up: false,
        name: 'MARIY NAFTA',
        percent: 43,
        supPercent: -4
      }
    ];

    this.multiTabs = [
      {
        title: 'Общий KPI',
        icon: 'assets/images/multiIco1.png',
        percent: 95,
        arrow: true,
        active: false
      },
      {
        title: 'UHOT',
        icon: 'assets/images/multiIco2.png',
        percent: 95,
        arrow: true,
        active: true
      },
      {
        title: 'Безопасность',
        icon: 'assets/images/multiIco3.png',
        percent: 95,
        arrow: false,
        active: false
      },
      {
        title: 'TLAG',
        icon: 'assets/images/multiIco4.png',
        percent: 95,
        arrow: false,
        active: false
      },
      {
        title: 'Мошенничество с картой лояльности',
        icon: 'assets/images/multiIco5.png',
        percent: 100,
        arrow: true,
        active: false
      },
      {
        title: 'Ночная процедура',
        icon: 'assets/images/multiIco6.png',
        percent: 100,
        arrow: true,
        active: false
      }
    ];

    this.chartsInit();
    this.chartsOptions();
    this.uhotInit();
  }
  chartsInit(): void {
    this.data = {
      labels: ['0.0', 'π/2', 'π', '3π/2'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#37b980'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#e20700'
        }
      ]
    };
    this.data1 = {
      labels: [1, 2, 3, 4],
      datasets: [
        {
          label: 'First Dataset',
          data: [1, 12, 13, 5, 12, 13, 5, 12, 13, 5, 12, 13, 5],
          fill: true,
          borderColor: '#37b980'
        }
      ]
    };
  }
  chartsOptions(): void {
    this.options = {
      title: {
        display: false,
        text: '',
        fontSize: 0
      },
      legend: {
        position: 'none'
      }
    };
  }

  uhotInit(): void {
    this.uhot = [
      {
        title: 'Установка визуального контакта',
        percent: 95,
        data: this.data1,
        options: this.options,
        red: false,
        blue: false
      },
      {
        title: 'Приветствие клиента',
        percent: 95,
        data: this.data1,
        options: this.options,
        red: false,
        blue: false
      },
      {
        title: 'Федеральная акция',
        percent: 43,
        data: this.data1,
        options: this.options,
        red: false,
        blue: false
      },
      {
        title: 'Озвучить клиенту вид топлива, количество литров',
        percent: 95,
        data: this.data1,
        options: this.options,
        red: false,
        blue: false
      },
      {
        title: 'Озвучить клиенту вид топлива, количество литров',
        percent: 78,
        data: this.data1,
        options: this.options,
        red: false,
        blue: false
      },
      {
        title: 'Приветствие клиента',
        percent: 95,
        data: this.data1,
        options: this.options,
        red: false,
        blue: false
      }
    ];

    this.uhot.forEach( item => {
        if (item.percent < 50) {
          item.red = true;
        } else if (item.percent >= 50 && item.percent <= 80) {
          item.blue = true;
        }
      }
    );
  }

  tabSet(numberTab: number): void {
    this.count = numberTab;

    switch (numberTab) {
      case 1: {
        this.btn1 = true;
        this.btn2 = false;
        this.btn3 = false;
        this.btn4 = false;
        this.btn5 = false;
      } return;

      case 2: {
        this.btn1 = false;
        this.btn2 = true;
        this.btn3 = false;
        this.btn4 = false;
        this.btn5 = false;

      } return;

      case 3: {
        this.btn1 = false;
        this.btn2 = false;
        this.btn3 = true;
        this.btn4 = false;
        this.btn5 = false;

      } return;

      case 4: {
        this.btn1 = false;
        this.btn2 = false;
        this.btn3 = false;
        this.btn4 = true;
        this.btn5 = false;

      } return;

      case 5: {
        this.btn1 = false;
        this.btn2 = false;
        this.btn3 = false;
        this.btn4 = false;
        this.btn5 = true;

      } return;

      default: {
        this.btn1 = true;
        this.btn2 = false;
        this.btn3 = false;
        this.btn4 = false;
        this.btn5 = false;
      } return;
    }
  }
}
