import React from 'react';
import { Text, Image, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles'

type ButtonIconProps = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  // Esse "...rest" representa todas as outras propriedades de ButtonIconProps que não foram especificadas
  return(
    <RectButton // componente que tenta adaptar o comportamento do botão ao nativo de cada plataforma
      style={styles.container}
      {...rest} // Aqui estamos passando todas as propriedades de ButtonIconProps, tirando title para o componente TouchableOpacity
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  )
}