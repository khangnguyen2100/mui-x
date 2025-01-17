import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { AxisConfig } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function PositiveAndNegativeBarChart() {
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        {
          data: pData,
          label: 'pv',
        },
        {
          data: uData,
          label: 'uv',
        },
      ]}
      xAxis={[
        {
          data: xLabels,
          scaleType: 'band',
          categoryGapRatio: 0.2,
          barGapRatio: 0.1,
        } as Omit<AxisConfig, 'id'>,
      ]}
      yAxis={[{ max: 10000 }]}
    />
  );
}
