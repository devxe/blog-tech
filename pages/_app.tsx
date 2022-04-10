import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../modules";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Container from "../components/Container";
import Footer from "../components/Footer";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = store.getState().app.darkMode;
  console.log(darkMode);
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <div className="w-full max-w-3xl mx-auto p-8">
          <Component {...pageProps} />
        </div>
        <Footer />
      </Container>
    </Provider>
  );
}

export default MyApp;
