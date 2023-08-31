import React, {FC} from 'react';
import { StyleSheet, Text, View } from '@ikigai/ui-components';

export interface <%= name %>Props {

}

export const <%= name %>: FC<<%= name %>Props> = () => {
  return (
    <View styles={styles.<%= name %>}>
      <Text>Hello <%= name %></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  <%= name %>: {}
});
