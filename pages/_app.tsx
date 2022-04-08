import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../components/Navgation";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setDark] = useState(false);

  const onDarkMode = () => {
    setDark((prev) => !prev);
  };
  return (
    <div className={"font-sans" && isDark ? "dark" : ""}>
      <Navigation onDarkMode={onDarkMode} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
