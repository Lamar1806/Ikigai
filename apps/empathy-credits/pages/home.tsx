import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '../api/react-query/queryKeys';

export function Home() {
  return (
    <View>
      {/* <BlurredCircleBackground /> */}
      <Text>Homes</Text>
    </View>
  );
}
