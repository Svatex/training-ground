import {ThemeProvider} from "styled-components"

const theme = {
    color: {
        dark: '#080303',
        light: '#FBFAF4'
    }
}

const Theme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}


export default Theme;