import { ConfigProvider } from "antd";
import "./App.scss";
import MainRoutes from "./router";
import { BrowserRouter } from "react-router-dom";
import { useTheme } from "@src/hooks/useThemeProvider";
import { UserProvider } from "./context/userContext";
import { Toaster } from "sonner";


function App() {
  const { themeConfig } = useTheme();
  return (
    <>
      <ConfigProvider theme={themeConfig}>
        <BrowserRouter>
          <UserProvider>
            <Toaster />
            <MainRoutes />
          </UserProvider>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
