import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';
import { labels } from '../../global/styles/labels';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { AppointmentProps } from '../../models/Appointment';
import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';

type Props = RectButtonProps & {
  data: AppointmentProps
}

export function Appointment({ data, ...rest }: Props) {
  // TODO: Adicionar uma explicação pra lógica abaixo com bookmark ou link.
  const category = categories.filter(item => item.id === data.category)[0]
  const { owner } = data.guild
  const { primary, on } = theme.colors

  return(
    <RectButton style={styles.container} {...rest}>
      <GuildIcon/>
      <View style={styles.content}>
      <View style={styles.header}>
        <Text style={labels.title}>{data.guild.name}</Text>
        <Text style={labels.subtitle}>{category.title}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.infoContainer}>
          <CalendarSvg />
          <Text style={styles.date}>{data.date}</Text>
        </View>
        <View style={styles.infoContainer}>
          <PlayerSvg fill={owner ? primary : on}/>
          <Text style={[styles.userStatus, {color: owner ? primary : on}]}>
            {owner ? 'Anfitrião' : 'Visitante'}
          </Text>
        </View>
      </View>
    </View>
    </RectButton>
  )
}