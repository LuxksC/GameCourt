import React, { useState } from "react";
import { View} from "react-native";

import { styles } from './styles'

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategoryList } from "../../components/CategoryList";

export function Home() {
  const [category, setCategory] = useState('')

  function handleCategorySelection(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd/>
      </View>
      <View>
        <CategoryList 
          categorySelected={category}
          setCategory={handleCategorySelection}
        />
      </View>
    </View>
  )
}