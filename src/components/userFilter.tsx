import { SetStateAction, useState } from 'react';
import { Popover, Button, Select, Input, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Setting from "@src/assets/icons/settings_icon.svg";

const { Option } = Select;

const UserFilter = () => {
    const [visible, setVisible] = useState(false);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [status, setStatus] = useState('');
    const [selectedGroups, setSelectedGroups] = useState([]);

    const handleVisibleChange = (visible: boolean) => {
        setVisible(visible);
    };

    const handleRoleChange = (value: SetStateAction<never[]>) => {
        setSelectedRoles(value);
    };

    const handleStatusChange = (value: SetStateAction<string>) => {
        setStatus(value);
    };

    const handleGroupChange = (value: SetStateAction<never[]>) => {
        setSelectedGroups(value);
    };

    const resetFilters = () => {
        setSelectedRoles([]);
        setStatus('');
        setSelectedGroups([]);
    };

    const content = (
        <div style={{ width: 250 }}>
            <div style={{ marginBottom: 10 }}>
                <label>Role</label>
                <Select
                    mode="multiple"
                    placeholder="Select Roles"
                    value={selectedRoles}
                    onChange={handleRoleChange}
                    style={{ width: '100%' }}
                >
                    <Option value="Admin">Admin</Option>
                    <Option value="Manager">Manager</Option>
                    <Option value="Recruiter">Recruiter</Option>
                </Select>
            </div>
            <div style={{ marginBottom: 10 }}>
                <label>Status</label>
                <Select
                    placeholder="Select Status"
                    value={status}
                    onChange={handleStatusChange}
                    style={{ width: '100%' }}
                >
                    <Option value="Active">Active</Option>
                    <Option value="Inactive">Inactive</Option>
                </Select>
            </div>
            <div style={{ marginBottom: 10 }}>
                <label>Group</label>
                <Select
                    mode="multiple"
                    placeholder="Select Groups"
                    value={selectedGroups}
                    onChange={handleGroupChange}
                    style={{ width: '100%' }}
                >
                    <Option value="HR Internal">HR Internal</Option>
                    <Option value="Tech Team">Tech Team</Option>
                </Select>
            </div>
            <div className='flex justify-between'>
                <Button className='font-semibold' type="primary" onClick={() => setVisible(false)}>SEARCH</Button>
                <Button className='font-semibold' onClick={resetFilters}>RESET</Button>
            </div>
        </div>
    );

    return (
        <div className='flex items-center gap-5 w-96 relative'>
            <Popover
                placement='bottomRight'
                content={content}
                title="Filter Options"
                trigger="click"
                open={visible}
                onOpenChange={handleVisibleChange}
                getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
                align={{
                    offset: [0, 0],
                }}
            >
                <div className="w-full">
                    <Input
                        size="middle"
                        className="w-full py-2 px-4"
                        placeholder="Search"
                        prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={
                            <Tooltip title="filter">

                                <Setting
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setVisible(!visible);
                                    }}
                                    style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                    />
                </div>
            </Popover>
        </div >
    );
};

export default UserFilter;