import React from 'react';
import './style.css';
import {
  AreaSeries,
  BarSeries,
  ArcSeries,
  Tooltip,
  ChartProvider,
  XAxis,
  YAxis,
} from 'rough-charts';
// import { colors } from './colors';
const colors = [
  '#fe4a49',
  '#2ab7ca ',
  '#fed766',
  '#fe9c8f',
  '#feb2a8 ',
  '#fec8c1',
  '#fad9c1',
  '#f9caa7',
  '#ee4035',
  '#f37736',
  '#fdf498 ',
  '#7bc043',
  '#0392cf',
  '#f6abb6',
  '#03396c',
];
const data = [
  { name: 'Britan Avarage yearly salary', value2: 40699 },
  { name: 'Elon Musk', value2: 192300000000 },
  { name: 'US GDP', value2: 20890000000000 },
];
const arrayData = Array.from({ length: 64 }, (x, i) => i).map((number) => {
  // number = number + 20;
  // return { name: `Field ${number + 1}`, value2: Math.pow(2, number) };
  return { name: number + 1, value2: Math.pow(2, number) };
});
let propOfNotHavingSameData = 364 / 365;
const properbilities = Array.from({ length: 50 }, (x, i) => i).map((number) => {
  return {
    name: number + 1,
    value2: 1 - Math.pow(propOfNotHavingSameData, (number * (number + 1)) / 2),
  };
  // return { name: number + 1, value2: 1-Math.pow(propOfNotHavingSameData, number+1) };
});

export default function App() {
  return (
    <div>
      <h1>Hello Charts!</h1>
      {/* <ChartProvider height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />

        <BarSeries
          dataKey="value2"
          options={{
            fill: colors[8],
            stroke: colors[8],
            strokeWidth: 1,
          }}
        />
        <Tooltip />
      </ChartProvider> */}
      <ChartProvider height={400} data={properbilities}>
        <XAxis
          format={(t) => {
            if (t % 10 === 0) return t;
          }}
          dataKey="name"
        />
        <YAxis />
        {/* <YAxis format={(ticks) => ticks / 1000000000000000000 + 'Q'} /> */}

        {/* <BarSeries
          dataKey="value2"
          options={{
            fill: colors[14],
            stroke: colors[14],
            strokeWidth: 1,
          }}
        /> */}
        {/* <ArcSeries
          dataKey="value2"
          options={{
            fill: colors[14],
            stroke: colors[14],
            strokeWidth: 1,
          }} />*/}
        <AreaSeries
          dataKey="value2"
          options={{
            fill: colors[14],
            stroke: colors[14],
            strokeWidth: 1,
          }}
        />
        <Tooltip />
      </ChartProvider>
    </div>
  );
}
