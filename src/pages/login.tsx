import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import { Link } from "react-router-dom";
import AuthLayoutSide from "@src/components/authLayoutSide";
import SocialAuthSection from "@src/components/socialAuthSection";

type FieldType = {
    email_address: string;
    password: string;
}


const Login = () => {

    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="flex h-screen">
            <AuthLayoutSide />
            <div className="flex-1 flex items-center">
                <div className="w-11/12 max-w-2xl p-10">
                    <h2 className="text-2xl font-semibold mb-6">Login to your account</h2>
                    <Form
                        form={form}
                        onFinish={onFinish}
                        className="space-y-4">

                        <Form.Item
                            name="email_address"
                            rules={[
                                { required: true, message: 'Email address is required!' },
                                { type: 'email', message: 'Please enter a valid email address!' },
                            ]}
                        >
                            <Input className="w-full px-4 py-3 rounded-lg" placeholder="Email Address" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: 'Password is required!' },
                                { min: 6, message: 'Password must be at least 6 characters long!' },
                                { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, message: 'Password must contain at least one letter and one number!' },
                            ]}
                        >
                            <Input.Password
                                className="w-full px-4 py-3 rounded-lg"
                                placeholder="Password"
                                iconRender={(visible) =>
                                    visible ? <EyeFilled className="w-10 h-10" /> : <EyeInvisibleFilled className="h-10 w-10" />
                                }
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full py-5 font-medium mt-4">LOG IN</Button>
                        </Form.Item>

                        <div className="flex items-center justify-between">
                            <Checkbox>Remember me</Checkbox>
                            <Link to="/cant-login" className="text-primary hover:underline">
                                Cant't Login?
                            </Link>
                        </div>

                    </Form>
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-6">or continue with</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                    <SocialAuthSection />
                    <p>Not a customer?{" "}
                        <Link to="/signup" className="font-semibold">Create your account</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;