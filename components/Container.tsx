import { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: NextPage<ContainerProps> = ({ children }) => {
  const darkMode = useSelector((state: RootState) => state.app.darkMode);
  return (
    <div className={darkMode ? "font-sans dark" : "font-sans"}>{children}</div>
  );
};

export default Container;
