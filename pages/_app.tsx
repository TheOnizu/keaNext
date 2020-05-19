import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from "framer-motion"

const theme = {
	colors: {
		primary: '#0070f3',
	},
}

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	return (<ThemeProvider theme={theme}>
		<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
		</AnimatePresence>
	</ThemeProvider>)
}

export default MyApp