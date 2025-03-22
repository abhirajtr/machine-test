import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import { useResponsive } from "@src/hooks/useResponsive";
import { useSideNavStore } from "@src/store/sideNavStore";
import { Avatar, Button, Dropdown, Layout, Menu } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";
import Logo from "../assets/images/logo_dark.svg?url";
import Home from "@src/assets/icons/home_icon.svg"
import Job from "@src/assets/icons/job_icon.svg"
import Profile from "@src/assets/icons/profile_icon.svg"
import Users from "@src/assets/icons/users_icon.svg"
import { useUserContext } from "@src/context/userContext";

const { Header, Content, Sider } = Layout;

export const DefaultLayout = () => {
  const { collapsed, setCollapsed, toggleCollapsed } = useSideNavStore();
  const { isMobile } = useResponsive();
  const navigate = useNavigate();
  const { logout } = useUserContext();

  const handleOnBreakPoint = useCallback(
    (close: boolean) => setCollapsed(close),
    []
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

  const sideMenu = useMemo(
    () => (
      <Sider
        theme="light"
        width={isMobile ? 150 : 260}
        breakpoint="xs"
        collapsedWidth={50}
        collapsed={collapsed}
        onBreakpoint={handleOnBreakPoint}
      >
        <div className="flex items-center px-4 py-2 justify-between text-base font-semibold">
          {!collapsed && <span className="px-2">Menu</span>}
          {collapseButton}
          {/* <MenuOutlined className="size-5 hover:cursor-pointer" /> */}
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["home"]}
          onClick={(e) => navigate(e.key === "home" ? "/" : `/${e.key}`)}
          className="[&_.ant-menu-item]:rounded-none [&_.ant-menu-item]:mx-0 [&_.ant-menu-item]:w-full
            [&_.ant-menu-item-selected]:!bg-gray-300
          "
          items={[
            {
              key: "home",
              icon: < Home />,
              label: "Home",
              // style: { backgroundColor: "#d3d3d3" }
            },
            {
              key: "job",
              icon: <Job />,
              label: "Job",
            },
            {
              key: "profile",
              icon: <Profile />,
              label: "Profile",
            },
            {
              key: "users",
              icon: <Users />,
              label: "Users",
            }
          ]}
        />
        <div>
          {/* {collapseButton} */}
        </div>
      </Sider>
    ),
    [isMobile, collapsed]
  );


  const profileMenu = (
    <Menu
      items={[
        { key: "1", label: "Profile", onClick: () => navigate("/profile") },
        { key: "2", label: "Logout", onClick: logout },
      ]}
    />
  );

  return (
    <Layout className="h-screen">
      <Header className="flex items-center justify-between max-xs:px-2 border-b-2">
        {/* <Logo /> */}
        <Link to="/">
          <img src={Logo} alt="Recruiter logo" className="w-30 md:w-32 lg:w-40 h-auto" />
        </Link>
        <Dropdown overlay={profileMenu} placement="bottomRight" arrow>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            className="cursor-pointer"
          />
        </Dropdown>
      </Header>
      <Layout>
        {/* {collapseButton} */}
        {sideMenu}
        <Layout>
          <Layout>
            <Content className="px-5 py-9 h-svh overflow-auto">
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Layout >
  );
};
