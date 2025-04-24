
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

interface PlantUsageChartProps {
  medicinalUses: string[];
}

const PlantUsageChart: React.FC<PlantUsageChartProps> = ({ medicinalUses }) => {
  // Transform medicinal uses into chart data with random effectiveness scores
  const data = medicinalUses.map((use) => ({
    use: use.length > 30 ? `${use.substring(0, 30)}...` : use,
    effectiveness: Math.floor(Math.random() * (100 - 60) + 60), // Random score between 60-100
    fullText: use,
  }));

  const chartConfig = {
    bar1: {
      label: "Effectiveness",
      theme: {
        light: "hsl(142, 72%, 29%)",  // Matches primary color
        dark: "hsl(142, 60%, 40%)"    // Matches dark mode primary
      }
    }
  };

  return (
    <div className="w-full h-[400px] mt-6 mb-8">
      <ChartContainer config={chartConfig}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="use"
            angle={-45}
            textAnchor="end"
            height={80}
            interval={0}
            className="text-xs"
          />
          <YAxis
            domain={[0, 100]}
            label={{ 
              value: 'Effectiveness (%)', 
              angle: -90, 
              position: 'insideLeft',
              className: 'text-xs'
            }}
          />
          <ChartTooltip
            content={({ active, payload }) => (
              <ChartTooltipContent
                active={active}
                payload={payload}
                formatter={(value, name, item) => (
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">{item.payload.fullText}</span>
                    <span>Effectiveness: {value}%</span>
                  </div>
                )}
              />
            )}
          />
          <Bar
            dataKey="effectiveness"
            fill="var(--color-bar1)"
            radius={[4, 4, 0, 0]}
            animationDuration={2000}
            animationBegin={200}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default PlantUsageChart;
