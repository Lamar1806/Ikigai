import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../state/slices/counter.js';

import { View, Text, Button } from 'react-native';

/* eslint-disable-next-line */
export interface CounterProps {}

export function Counter(navigation) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Welcome to counter!</Text>
      <Text>Current: {count}</Text>
      <Button title="increment" onPress={() => dispatch(increment())} />
      <Button title="decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
}

export default Counter;
