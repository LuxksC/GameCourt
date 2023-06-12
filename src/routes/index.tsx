import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  },
};

export function Routes(){
  return(
    <NavigationContainer theme={Theme}>
      <AuthRoutes/>
    </NavigationContainer>
  )
}