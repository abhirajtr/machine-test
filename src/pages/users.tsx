import { MoreOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Checkbox, Table, Tabs, Modal, Select, Tag } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import UserFilter from "@src/components/userFilter";
import { useState } from "react";
import users from "@src/data/users.json";

const { Option } = Select;

const Users = () => {
  const [inviteModalVisible, setInviteModalVisible] = useState(false);
  const [userRows, setUserRows] = useState<{ id: number; emails: string[]; role: string }[]>([
    { id: 1, emails: [], role: "Manager" },
    { id: 2, emails: [], role: "Recruiter" },
    { id: 3, emails: [], role: "" }
  ]);

  const columns = [
    {
      title: <Checkbox />,
      dataIndex: "checkbox",
      render: () => <Checkbox />,
      width: 50,
    },
    { title: "Name", dataIndex: "name" },
    { title: "Email Address", dataIndex: "email" },
    { title: "Phone Number", dataIndex: "phone" },
    { title: "Role", dataIndex: "role" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Badge
          className="site-badge-count-109"
          count={status}
          style={{ backgroundColor: status === "Active" ? "#16A086" : "#f5222d" }}
        />
      ),
    },
    { title: "Created On", dataIndex: "createdOn" },
    { title: "Last Active Date", dataIndex: "lastActive" },
    {
      title: "",
      dataIndex: "actions",
      render: () => <MoreOutlined />,
      width: 50,
    },
  ];


  const showInviteModal = () => setInviteModalVisible(true);
  const closeInviteModal = () => setInviteModalVisible(false);

  // Handle adding a new row for invitation
  const addNewRow = () => {
    const newId = userRows.length > 0 ? Math.max(...userRows.map(row => row.id)) + 1 : 1;
    setUserRows([...userRows, { id: newId, emails: [], role: "" }]);
  };

  // Handle email changes for a specific row
  const handleEmailChange = (rowId: number, emails: string[]) => {
    setUserRows(userRows.map(row =>
      row.id === rowId ? { ...row, emails } : row
    ));
  };

  // Handle role changes for a specific row
  const handleRoleChange = (rowId: number, role: string) => {
    setUserRows(userRows.map(row =>
      row.id === rowId ? { ...row, role } : row
    ));
  };

  return (
    <>
      <h1 className="font-semibold text-sm">Users</h1>
      <Card className="mt-6 rounded-none">
        <h2 className="font-semibold text-xl">Users</h2>
        <Tabs defaultActiveKey="1" tabBarStyle={{ color: "#718096" }}>
          <TabPane tab="Users" key="1">
            <div className="flex justify-end gap-5 mb-5">
              <UserFilter />
              <Button className="px-4 py-5 font-semibold" size="middle" type="primary" onClick={showInviteModal}>
                INVITE USERS
              </Button>
            </div>
            <Table columns={columns} dataSource={users} pagination={false} />
          </TabPane>
          <TabPane tab="Pending" key="2">
            <p>No pending users</p>
          </TabPane>
        </Tabs>
      </Card>

      <Modal
        title="Invite Users"
        open={inviteModalVisible}
        onCancel={closeInviteModal}
        footer={null}
        width={650}
      >
        <div className="px-1 py-2">
          {userRows.map((row) => (
            <div key={row.id} className="mb-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <div className="mb-2">Email Address</div>
                  <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Add email addresses"
                    value={row.emails}
                    onChange={(emails) => handleEmailChange(row.id, emails)}
                    tokenSeparators={[',']}
                    dropdownStyle={{ display: 'none' }}
                    tagRender={(props) => {
                      const { label, closable, onClose } = props;
                      return (
                        <Tag
                          closable={closable}
                          onClose={onClose}
                          style={{
                            marginRight: 3,
                            backgroundColor: '#f0f0f0',
                            borderRadius: 4,
                            padding: '2px 8px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            fontSize: '14px'
                          }}
                        >
                          {label}
                        </Tag>
                      );
                    }}
                  />
                </div>
                <div>
                  <div className="mb-2">Role</div>
                  <Select
                    style={{ width: '100%' }}
                    placeholder="Select"
                    value={row.role || undefined}
                    onChange={(role) => handleRoleChange(row.id, role)}
                  >
                    <Option value="Manager">Manager</Option>
                    <Option value="Recruiter">Recruiter</Option>
                    <Option value="Admin">Admin</Option>
                  </Select>
                </div>
              </div>
            </div>
          ))}

          <Button
            type="link"
            onClick={addNewRow}
            style={{ padding: 0, color: '#1890ff' }}
            className="mt-2 mb-4"
          >
            ADD NEW
          </Button>

          <div className="flex border-t pt-4 mt-2">
            <Button
              type="primary"
              className="mr-2"
              style={{
                backgroundColor: '#1890ff',
                borderColor: '#1890ff'
              }}
            >
              SEND INVITE
            </Button>
            <Button onClick={closeInviteModal}>CANCEL</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Users;