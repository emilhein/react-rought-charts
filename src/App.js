import React from 'react';
import './style.css';
import {
  AreaSeries,
  BarSeries,
  Circle,
  CircleSeries,
  LineSeries,
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
const states = [
  {
    name: 'Wyoming',
    electoralVotes: 3,
    population: 567025,
  },
  {
    name: 'Vermont',
    electoralVotes: 3,
    population: 643503,
  },
  {
    name: 'Alaska',
    electoralVotes: 3,
    population: 737438,
  },
  {
    name: 'North Dakota',
    electoralVotes: 3,
    population: 779094,
  },
  {
    name: 'South Dakota',
    electoralVotes: 3,
    population: 884659,
  },
  {
    name: 'Delaware',
    electoralVotes: 3,
    population: 989948,
  },
  {
    name: 'Montana',
    electoralVotes: 3,
    population: 1085404,
  },
  {
    name: 'Rhode Island',
    electoralVotes: 4,
    population: 1097379,
  },
  {
    name: 'Maine',
    electoralVotes: 4,
    population: 1362359,
  },
  {
    name: 'New Hampshire',
    electoralVotes: 4,
    population: 1377529,
  },
  {
    name: 'Hawaii',
    electoralVotes: 4,
    population: 1455271,
  },
  {
    name: 'West Virginia',
    electoralVotes: 5,
    population: 1793716,
  },
  {
    name: 'Idaho',
    electoralVotes: 4,
    population: 1839106,
  },
  {
    name: 'Nebraska',
    electoralVotes: 5,
    population: 1961504,
  },
  {
    name: 'New Mexico',
    electoralVotes: 5,
    population: 2117522,
  },
  {
    name: 'Kansas',
    electoralVotes: 6,
    population: 2937880,
  },
  {
    name: 'Mississippi',
    electoralVotes: 6,
    population: 2961279,
  },
  {
    name: 'Arkansas',
    electoralVotes: 6,
    population: 3011524,
  },
  {
    name: 'Nevada',
    electoralVotes: 6,
    population: 3108462,
  },
  {
    name: 'Iowa',
    electoralVotes: 6,
    population: 3192406,
  },
  {
    name: 'Utah',
    electoralVotes: 6,
    population: 3271616,
  },
  {
    name: 'Connecticut',
    electoralVotes: 7,
    population: 3605944,
  },
  {
    name: 'Oklahoma',
    electoralVotes: 7,
    population: 3953822,
  },
  {
    name: 'Oregon',
    electoralVotes: 7,
    population: 4241500,
  },
  {
    name: 'Kentucky',
    electoralVotes: 8,
    population: 4505836,
  },
  {
    name: 'Louisiana',
    electoralVotes: 8,
    population: 4657757,
  },
  {
    name: 'Alabama',
    electoralVotes: 9,
    population: 5024279,
  },
  {
    name: 'South Carolina',
    electoralVotes: 9,
    population: 5148714,
  },
  {
    name: 'Minnesota',
    electoralVotes: 10,
    population: 5706494,
  },
  {
    name: 'Colorado',
    electoralVotes: 9,
    population: 5773714,
  },
  {
    name: 'Wisconsin',
    electoralVotes: 10,
    population: 5851754,
  },
  {
    name: 'Missouri',
    electoralVotes: 10,
    population: 6169038,
  },
  {
    name: 'Maryland',
    electoralVotes: 10,
    population: 6177224,
  },
  {
    name: 'Indiana',
    electoralVotes: 11,
    population: 6785528,
  },
  {
    name: 'Tennessee',
    electoralVotes: 11,
    population: 6910840,
  },
  {
    name: 'Massachusetts',
    electoralVotes: 11,
    population: 7029917,
  },
  {
    name: 'Arizona',
    electoralVotes: 11,
    population: 7151502,
  },
  {
    name: 'Washington',
    electoralVotes: 12,
    population: 7693612,
  },
  {
    name: 'Virginia',
    electoralVotes: 13,
    population: 8631393,
  },
  {
    name: 'New Jersey',
    electoralVotes: 14,
    population: 9288994,
  },
  {
    name: 'Michigan',
    electoralVotes: 16,
    population: 10077331,
  },
  {
    name: 'North Carolina',
    electoralVotes: 15,
    population: 10453948,
  },
  {
    name: 'Georgia',
    electoralVotes: 16,
    population: 10711908,
  },
  {
    name: 'Ohio',
    electoralVotes: 18,
    population: 11799448,
  },
  {
    name: 'Illinois',
    electoralVotes: 20,
    population: 12812508,
  },
  {
    name: 'Pennsylvania',
    electoralVotes: 20,
    population: 13011844,
  },
  {
    name: 'New York',
    electoralVotes: 29,
    population: 20215751,
  },
  {
    name: 'Florida',
    electoralVotes: 29,
    population: 21538187,
  },
  {
    name: 'Texas',
    electoralVotes: 38,
    population: 29145505,
  },
  {
    name: 'California',
    electoralVotes: 55,
    population: 39538223,
  },
].map((e) => {
  e.power = parseFloat(e.population / e.electoralVotes).toFixed(2);
  return e;
});

const enrichedStates = states.map((state, index) => {
  if (index === 0) {
    state.totalVotes = state.electoralVotes;
    state.totalVotesUnderReq = state.electoralVotes;
    state.totalVotesOverReq = 0;
  } else {
    let prevTotal = states
      .filter((_, lookupIndex) => lookupIndex < index)
      .map((e) => e.electoralVotes)
      .reduce((partialSum, a) => partialSum + a, 0);

    state.totalVotes = prevTotal + state.electoralVotes;
    if (prevTotal + state.electoralVotes <= 270) {
      state.totalVotesUnderReq = prevTotal + state.electoralVotes;
      state.totalVotesOverReq = 0;
    } else {
      state.totalVotesOverReq = prevTotal + state.electoralVotes;
      state.totalVotesUnderReq = 0;
    }
  }
  return state;
});
// .reduce(
//   (prev, item) => {
//     item.totalVotes = prev.totalVotes + item.electoralVotes;
//     return item;
//   },
//   { totalVotes: 0 }
// );

// const arrayData = Array.from({ length: 64 }, (x, i) => i).map((number) => {
//   // number = number + 20;
//   // return { name: `Field ${number + 1}`, value2: Math.pow(2, number) };
//   return { name: number + 1, value2: Math.pow(2, number) };
// });
// let propOfNotHavingSameData = 364 / 365;
// const properbilities = Array.from({ length: 50 }, (x, i) => i).map((number) => {
//   return {
//     name: number + 1,
//     value2: 1 - Math.pow(propOfNotHavingSameData, (number * (number + 1)) / 2),
//   };
//   // return { name: number + 1, value2: 1-Math.pow(propOfNotHavingSameData, number+1) };
// });

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
      <ChartProvider height={400} data={states}>
        <BarSeries
          dataKey="power"
          options={{
            fill: colors[13],
            stroke: colors[13],
            strokeWidth: 1,
          }}
        />
        {/* <YAxis /> */}
        <YAxis dataKey="power" format={(tick) => `${tick / 1000} K`} />
        {/* <XAxis   dataKey="name" /> */}
        <XAxis
          dataKey="name"
          format={(tick) => {
            let objec = states.find((e) => e.name === tick);
            let index = states.indexOf(objec);
            if (index % 8 === 0) {
              return `${tick}`;
              // return `${(tick / 1000000).toFixed(1)} Mio`;
            }
            // return tick;
          }}
        />

        {/* <CircleSeries dataKey="electoralVotes">
          {(item, itemProps, index) => (
            <Circle
              key={index}
              {...itemProps}
              diameter={10 + item.electoralVotes * 2}
              options={{
                fill: colors[index % colors.length],
              }}
            />
          )}
        </CircleSeries> */}
        <Tooltip />
      </ChartProvider>
      <ChartProvider height={400} data={enrichedStates}>
        <BarSeries
          dataKey="totalVotesUnderReq"
          options={{
            fill: colors[14],
            stroke: colors[14],
          }}
        />
        <BarSeries
          dataKey="totalVotesOverReq"
          options={{
            fill: colors[3],
            stroke: colors[3],
          }}
        />
        <YAxis dataKey="totalVotes" />
        <XAxis
          dataKey="name"
          format={(tick) => {
            let objec = states.find((e) => e.name === tick);
            let index = states.indexOf(objec);
            if (index % 8 === 0) {
              return `${tick}`;
              // return `${(tick / 1000000).toFixed(1)} Mio`;
            }
            // return tick;
          }}
        />{' '}
      </ChartProvider>
    </div>
  );
}

// {/* <XAxis
//       format={(t) => {
//         if (t % 10 === 0) return t;
//       }}
//       dataKey="name"
//     />
//     <YAxis /> */}
//     {/* <YAxis format={(ticks) => ticks / 1000000000000000000 + 'Q'} /> */}

//     {/* <BarSeries
//       dataKey="value2"
//       options={{
//         fill: colors[14],
//         stroke: colors[14],
//         strokeWidth: 1,
//       }}
//     /> */}
//     {/* <ArcSeries
//       dataKey="electoralVotes"
//       options={{
//         fill: colors[4],
//         stroke: colors[4],
//         strokeWidth: 1,
//       }} /> */}
//     {/* <AreaSeries
//       dataKey="value2"
//       options={{
//         fill: colors[14],
//         stroke: colors[14],
//         strokeWidth: 1,
//       }}
//     /> */}
// {/* <BarSeries
//   dataKey="power"
//   options={{
//     fill: colors[8],
//     stroke: colors[8],
//     strokeWidth: 1,
//   }}
// /> */}
// {/* <LineSeries
// dataKey="power"
// options={{
// stroke: colors[5],
// strokeWidth: 3,
// }}
// /> */}
// {/* <LineSeries
// dataKey="population"
// options={{
// stroke: colors[3],
// strokeWidth: 2,
// }}
// /> */}
