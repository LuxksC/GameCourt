import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";

import { styles } from './styles';
import { appointments } from "../../mocks/appointments";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategoryList } from "../../components/CategoryList";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";

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
      <CategoryList 
        categorySelected={category}
        setCategory={handleCategorySelection}
      />
      <View style={styles.content}>
        <ListHeader
          title="Partidas agendadas"
          numberOfItems={6}
        />
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={ ({ item }) => (
            <Appointment 
              data={item}
            />
          )}
          style={styles.matchesList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}