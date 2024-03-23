import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { MarketChartData } from '../interfaces/MarketChartData'; // Import the MarketChartData interface

const screenWidth = Dimensions.get('window').width;

interface LineChartProps {
  marketChartData: MarketChartData | null; // Update prop type to allow null
}

export const LineChartExample: React.FC<LineChartProps> = ({
  marketChartData,
}) => {
  if (
    !marketChartData ||
    !marketChartData.prices ||
    marketChartData.prices.length === 0
  ) {
    // Return some placeholder or null if marketChartData is invalid or empty
    return null;
  }

  // Function to downsample the array to reduce the number of data points
  const downsampleArray = (array: any[]) =>
    array.filter((_, index) => index % 2 === 0);

  // Downsampling the prices array to reduce the number of data points
  const prices = downsampleArray(marketChartData.prices).map(
    ([_, price]) => price / 1000 // Divide prices by 1000
  );

  // Downsampling the labels array to reduce the number of labels
  const labels = downsampleArray(marketChartData.prices).map(([timestamp]) => {
    // Parse timestamp into a Date object
    const date = new Date(timestamp);
    // Get the month name
    return date.toLocaleString('default', { month: 'short' });
  });

  return (
    <LineChart
      data={{
        labels,
        datasets: [
          {
            data: prices,
          },
        ],
      }}
      width={screenWidth}
      height={250}
      yAxisLabel="$"
      yAxisSuffix="k" // Display prices in thousands
      yAxisInterval={1}
      chartConfig={{
        backgroundColor: 'rgba(173, 216, 230, 0.5)', // Ethereal blue with transparency
        backgroundGradientFrom: 'rgba(173, 216, 230, 0.5)', // Ethereal blue with transparency
        backgroundGradientTo: 'rgba(173, 216, 230, 0.5)', // Ethereal blue with transparency
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White color for the line
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White color for the labels
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: '.5',
          strokeWidth: '2',
          stroke: '#FFFFFF', // White color for the dots
        },
      }}
      bezier={false} // Set bezier to false to make the graph a line
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};
