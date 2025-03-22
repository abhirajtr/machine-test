import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useResponsive } from "@src/hooks/useResponsive";
import { useSideNavStore } from "@src/store/sideNavStore";
import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { useCallback, useMemo } from "react";

const { Header, Content, Sider } = Layout;

export const DefaultLayout = () => {
  const { collapsed, setCollapsed, toggleCollapsed } = useSideNavStore();
  const { isMobile } = useResponsive();

  const handleOnBreakPoint = useCallback(
    (close: boolean) => setCollapsed(close),
    []
  );

  const sideMenu = useMemo(
    () => (
      <Sider
        theme="light"
        width={isMobile ? 150 : 260}
        breakpoint="xs"
        collapsedWidth={0}
        collapsed={collapsed}
        onBreakpoint={handleOnBreakPoint}
      >
        <div>Side Menu</div>
      </Sider>
    ),
    [isMobile, collapsed]
  );

  const collapseButton = useMemo(
    () => (
      <Button
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
      />
    ),
    [collapsed]
  );

  return (
    <Layout className="h-screen">
      <Layout>
        {sideMenu}
        <Layout>
          <Header className="max-xs:px-4">{collapseButton}</Header>
          <Layout>
            <Content className="px-5 py-9 h-svh overflow-auto">
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};
