import '../styles/globals.css'
import {AppWrapper} from "../componenets/appProvider";

function MyApp({Component, pageProps}) {

    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}

export default MyApp
