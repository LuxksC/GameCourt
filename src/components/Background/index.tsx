import React, { ReactNode } from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from "../../global/styles/theme";
import { styles } from './styles'
import { View, ViewProps } from "react-native";

type BackgroundProps = ViewProps & {
  children: ReactNode
}

export function Background({ children, ...rest }: BackgroundProps) {
  const {secondary80, secondary100} = theme.colors

  return(
    
    <LinearGradient
    style={styles.container}
    colors={[secondary80, secondary100]}
    >
      <View {...rest} style={styles.container}>
        {children}
      </View>
    </LinearGradient>
  )
}