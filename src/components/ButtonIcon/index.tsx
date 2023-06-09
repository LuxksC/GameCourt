import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles'

type ButtonIconProps = TouchableOpacityProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  // Esse "...rest" representa todas as outras propriedades de ButtonIconProps que não foram especificadas
  return(
    <TouchableOpacity 
      style={styles.container}
      {...rest} // Aqui estamos passando todas as propriedades de ButtonIconProps, tirando title para o componente TouchableOpacity
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}