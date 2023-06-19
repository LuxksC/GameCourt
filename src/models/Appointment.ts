import { GuildProps } from "./Guild";

export type AppointmentProps = {
  id: string;
  guild: GuildProps,
  category: string,
  date: string,
  description: string,
}