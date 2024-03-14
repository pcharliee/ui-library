import { ChakraBaseProvider, theme } from "@chakra-ui/react";
import { ReactNode } from "react";

const CustomProvider = ({children}: {children: ReactNode | ReactNode[] }) => {

  return (
    <ChakraBaseProvider theme={theme}>
      {children}
    </ChakraBaseProvider>
  )
}

export { CustomProvider }