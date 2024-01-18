import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/home";
import { StocksProvider } from "./contexts/StocksContext";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

         <StocksProvider>
            <Home/>
         </StocksProvider>
    </ThemeProvider>

  )
}
export default App
