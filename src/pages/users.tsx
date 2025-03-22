import { MoreOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Checkbox, Table, Tabs } from "antd"
import TabPane from "antd/es/tabs/TabPane"
import UserFilter from "@src/components/userFilter";


const Users = () => {
  const columns = [
    {
      title: <Checkbox />,
      dataIndex: 'checkbox',
      render: () => <Checkbox />,
      width: 50,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
    },
    {
      title: 'Role',
      dataIndex: 'role',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status: string) => <Badge
        className="site-badge-count-109"
        count={status}
        style={{ backgroundColor: status === 'Active' ? '#16A086' : '#f5222d' }}
      />,
    },
    {
      title: 'Created On',
      dataIndex: 'createdOn',
    },
    {
      title: 'Last Active Date',
      dataIndex: 'lastActive',
    },
    {
      title: '',
      dataIndex: 'actions',
      render: () => <MoreOutlined />,
      width: 50,
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Lola Barr',
      email: 'lolabarr@microsoft.ai',
      phone: '+1-212-456-7890',
      role: 'Admin',
      status: 'Active',
      createdOn: '20-12-2024',
      lastActive: '20-12-2024',
    },
    {
      key: '2',
      name: 'Everest Glenn',
      email: 'everestglenn@microsoft.ai',
      phone: '+1-212-456-7890',
      role: 'Manager',
      status: 'Active',
      createdOn: '20-12-2024',
      lastActive: '20-12-2024',
    },
    {
      key: '3',
      name: 'Rosie Hendrix',
      email: 'rhendrix@microsoft.ai',
      phone: '+1-212-456-7890',
      role: 'Recruiter',
      status: 'Active',
      createdOn: '20-12-2024',
      lastActive: '20-12-2024',
    },
  ];

  return (
    <>
      <h1 className="font-semibold text-sm">Users</h1>
      <Card className="mt-6 rounded-none">
        <h2 className="font-semibold text-xl">Users</h2>
        <Tabs defaultActiveKey="1"
          tabBarStyle={{ color: '#718096' }}
          // style={activeTabStyle}
        >
          <TabPane tab="Users" key="1">
            <div
              className="flex justify-end gap-5 mb-5"
            >
              <UserFilter />
              <Button className="px-4 py-5 font-semibold" size="middle" type="primary">INVITE USERS</Button>
            </div>
            <Table columns={columns} dataSource={data} pagination={false} />
          </TabPane>
          <TabPane tab="Pending" key="2">
            <p>No pending users</p>
          </TabPane>
        </Tabs>
      </Card >
    </>
  )
}

export default Users