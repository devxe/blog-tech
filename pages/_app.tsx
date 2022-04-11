import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../store";
import Logger from "redux-logger";
import Container from "../components/Container";
import Footer from "../components/Footer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../store/user/sagas";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/lib/persistStore";

const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(sagaMiddleware))
    : composeWithDevTools(applyMiddleware(sagaMiddleware, Logger));

const store = createStore(rootReducer, enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container>
          <Header />
          <div className="w-full max-w-3xl mx-auto p-8 pb-36">
            <Component {...pageProps} />
          </div>
          <Footer />
        </Container>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
