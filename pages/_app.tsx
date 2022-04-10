import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../components/Navgation";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../modules";
import logger from "redux-logger";
import Container from "../components/Container";

const store = createStore(rootReducer, applyMiddleware(logger));
function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = store.getState().app.darkMode;
  console.log(darkMode);
  return (
    <Provider store={store}>
      <Container>
        <Navigation />
        <div className="w-full max-w-3xl mx-auto">
          <Component {...pageProps} />
        </div>
      </Container>
    </Provider>
  );
}

export default MyApp;
