import React from 'react';
import { Image } from 'react-native';

import DiscordSvg from '../../assets/discord.svg'

import { styles } from './styles'

export function GuildIcon() {
  const urlImage = "https://yt3.googleusercontent.com/ytc/AGIKgqN6B10aT_jYBnR3mC6EdbWzQn5A8q0xlDPdvmB6=s900-c-k-c0x00ffffff-no-rj"

  return(
    <Image
      source={{ uri: urlImage}}
      style={styles.guildIcon}
    />
  )
}