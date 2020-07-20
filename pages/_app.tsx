import '../style/index.scss'
import React from "react";

const App = ({ Component, pageProps }): JSX.Element => {
  return <Component {...pageProps} />
}

export default App;
