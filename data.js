let data = [
  { period: "Март", name: "В программе ЦП", value: 120 },
  { period: "Апрель", name: "В программе ЦП", value: 120 },
  { period: "Май", name: "В программе ЦП", value: 120 },
  { period: "Июнь", name: "В программе ЦП", value: 120 },
  { period: "Июль", name: "В программе ЦП", value: 120 },
  { period: "Август", name: "В программе ЦП", value: 120 },
  { period: "Сентябрь", name: "В программе ЦП", value: 120 },
  { period: "Март", name: "В программе ИТ", value: 220 },
  { period: "Апрель", name: "В программе ИТ", value: 182 },
  { period: "Май", name: "В программе ИТ", value: 191 },
  { period: "Июнь", name: "В программе ИТ", value: 234 },
  { period: "Июль", name: "В программе ИТ", value: 290 },
  { period: "Август", name: "В программе ИТ", value: 330 },
  { period: "Сентябрь", name: "В программе ИТ", value: 310 },
  { period: "Март", name: "Вне программ ЦП", value: 620 },
  { period: "Апрель", name: "Вне программ ЦП", value: 732 },
  { period: "Май", name: "Вне программ ЦП", value: 701 },
  { period: "Июнь", name: "Вне программ ЦП", value: 734 },
  { period: "Июль", name: "Вне программ ЦП", value: 1090 },
  { period: "Август", name: "Вне программ ЦП", value: 1130 },
  { period: "Сентябрь", name: "Вне программ ЦП", value: 1120 },
  { period: "Март", name: "Вне программ ИТ", value: 120 },
  { period: "Апрель", name: "Вне программ ИТ", value: 132 },
  { period: "Май", name: "Вне программ ИТ", value: 101 },
  { period: "Июнь", name: "Вне программ ИТ", value: 134 },
  { period: "Июль", name: "Вне программ ИТ", value: 290 },
  { period: "Август", name: "Вне программ ИТ", value: 230 },
  { period: "Сентябрь", name: "Вне программ ИТ", value: 220 }
];

// var myChart = echarts.init(document.getElementById('main'));
let xArr1 = data.map((elem) => {
  return {
    period: elem.period
  }
})
console.log(xArr1)

let xArr2 = xArr1.reduce((acc, elem) => acc.map[elem.period] ? acc : ((acc.map[elem.period] = true), acc.xArr2.push(elem), acc), {
  map: {},
  xArr2: []
}).xArr2;

console.log(xArr2)
      var option = {
        title: {
          text: 'Проекты в программах и вне программ',
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          data: xArr2.map((elem) => {
            elem
          })
        }
        
      };  
      myChart.setOption(option);








