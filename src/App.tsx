import { ConfigProvider } from "antd";
import "./App.scss";
import MainRoutes from "./router";
import { BrowserRouter } from "react-router-dom";
import { useTheme } from "@src/hooks/useThemeProvider";

function App() {
  const { themeConfig } = useTheme();
  return (
    <>
      <ConfigProvider theme={themeConfig}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
