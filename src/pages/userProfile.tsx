import { useState } from 'react';
import { Form, Input, Select, Button, Breadcrumb, Tag, Space, Card, Typography, Badge } from 'antd';
import Camera from '@src/assets/icons/camera_icon.svg?url';

const { Option } = Select;
const { Title } = Typography;

const UserProfile = () => {
    const [form] = Form.useForm();
    const [groups, setGroups] = useState(['HR Internal', 'Recruitment RPA']);

    const handleRemoveGroup = (removedGroup: string) => {
        setGroups(groups.filter(group => group !== removedGroup));
    };

    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    // Label styling component
    const FormLabel = ({ text }: { text: string }) => (
        <span className="font-semibold text-gray-500">{text}</span>
    );

    return (
        <>
            <div className="border-b">
                <Breadcrumb items={[{ title: 'Users' }, { title: 'User Profile' }]} />
            </div>

            <div className="w-full py-6">
                <Card className="shadow-sm rounded-none">
                    <div className='w-1/2'>
                        <Title level={4} className="mb-6">User Profile</Title>

                        <div className="flex items-center mb-8">
                            <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center">
                                <div className='flex flex-col items-center justify-center'>
                                    <img src={Camera} alt="camera icon" />
                                    <div className="text-xs text-center mt-2 text-blue-600">Upload photo</div>
                                </div>
                            </div>
                            <div className="ml-6">
                                <div className="text-xl font-medium">Winston Bruce</div>
                                <div className="text-gray-500">Manager</div>
                                <div className="mt-1">
                                    <Badge color='#16A086' />
                                    <span className='text-sm ml-2 font-semibold text-gray-500'>Active</span>
                                </div>
                            </div>
                        </div>
                        <Button type="link" className="px-0 text-blue-600 font-medium mb-4">CHANGE PASSWORD</Button>

                        <Form form={form} layout="vertical" onFinish={onFinish}>
                            <Form.Item name="fullName" label={<FormLabel text="Full Name" />}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="displayName" label={<FormLabel text="Display Name" />}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="email" label={<FormLabel text="Email Address" />}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="phone" label={<FormLabel text="Phone Number" />}>
                                <Input />
                            </Form.Item>

                            <div className="grid grid-cols-2 gap-4">
                                <Form.Item name="role" label={<FormLabel text="Role" />}>
                                    <Select>
                                        <Option value="Manager">Manager</Option>
                                        <Option value="Employee">Employee</Option>
                                        <Option value="Admin">Admin</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name="status" label={<FormLabel text="Status" />}>
                                    <Select>
                                        <Option value="Active">Active</Option>
                                        <Option value="Inactive">Inactive</Option>
                                    </Select>
                                </Form.Item>
                            </div>

                            <Form.Item name="groups" label={<FormLabel text="Groups Assigned" />}>
                                <div className="border rounded-md p-2 bg-white">
                                    <Space size="small" wrap>
                                        {groups.map(group => (
                                            <Tag key={group} closable onClose={() => handleRemoveGroup(group)}>
                                                {group}
                                            </Tag>
                                        ))}
                                    </Space>
                                </div>
                            </Form.Item>

                            <Form.Item name="address" label={<FormLabel text="Address" />}>
                                <Input />
                            </Form.Item>

                            <div className="grid grid-cols-2 gap-4">
                                <Form.Item name="city" label={<FormLabel text="City" />}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="state" label={<FormLabel text="State" />}>
                                    <Input />
                                </Form.Item>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Form.Item name="zipCode" label={<FormLabel text="Zip Code" />}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="country" label={<FormLabel text="Country" />}>
                                    <Input />
                                </Form.Item>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Form.Item name="timeFormat" label={<FormLabel text="Time Format" />}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="timeZone" label={<FormLabel text="Time Zone" />}>
                                    <Input />
                                </Form.Item>
                            </div>

                            <div className="flex mt-6 gap-3">
                                <Button size='large' type="primary" htmlType="submit" className="font-semibold">
                                    SAVE CHANGES
                                </Button>
                                <Button size='large' type='text' className='font-semibold text-gray-500'>CANCEL</Button>
                            </div>
                        </Form>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default UserProfile;