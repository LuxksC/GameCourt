import React from 'react';
import { ScrollView } from 'react-native';
import { Category } from '../Category';

import { styles } from './styles'
import { categories } from '../../utils/categories'
import { theme } from '../../global/styles/theme';

type CategoryListProps = {
  categorySelected: string;
  setCategory: (id: string) => void
}

export function CategoryList({ categorySelected , setCategory}: CategoryListProps) {
  return(
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: theme.space.x2,
        paddingRight: theme.space.x1
      }}
    >
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
          />
        ))
      }
    </ScrollView>
  )
}