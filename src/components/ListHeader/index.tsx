import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles'
import { labels } from '../../global/styles/labels';

type ListHeaderProps = {
  title: string,
  numberOfItems: number
}

export function ListHeader({ title, numberOfItems }: ListHeaderProps) {
  return(
    <View style={styles.container}>
      <Text style={labels.title}>
        {title}
      </Text>
      <Text style={labels.subtitle}>
        Total {numberOfItems}
      </Text>
    </View>
  )
}