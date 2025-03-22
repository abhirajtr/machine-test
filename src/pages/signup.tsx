import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Button, Form, FormProps, Input } from 'antd';
import { Link } from "react-router-dom";
import AuthLayoutSide from "@src/components/authLayoutSide";
import SocialAuthSection from "@src/components/socialAuthSection";

type FieldType = {
    first_name: string;
    last_name: string;
    email_address: string;
    password: string;
}


const Signup = () => {

    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="flex h-screen">
            <AuthLayoutSide />
            <div className="flex-1 flex items-center">
                <div className="w-11/12 max-w-2xl p-10">
                    <h2 className="text-2xl font-semibold mb-6">Create your account</h2>
                    <Form
                        form={form}
                        onFinish={onFinish}
                        className="space-y-4">
                        <Form.Item
                            name="first_name"
                            rules={[
                                { required: true, message: 'First name is required!' },
                                { pattern: /^[A-Za-z]+$/, message: 'First name should contain only alphabets!' },
                            ]}
                        >
                            <Input className="w-full px-4 py-3 rounded-lg" placeholder="First Name" />
                        </Form.Item>

                        <Form.Item
                            name="last_name"
                            rules={[
                                { required: true, message: 'Last name is required!' },
                                { pattern: /^[A-Za-z]+$/, message: 'Last name should contain only alphabets!' },
                            ]}
                        >
                            <Input className="w-full px-4 py-3 rounded-lg" placeholder="Last Name" />
                        </Form.Item>

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
                        <p className="mt-6 text-gray-500">By creating an account, you agree to our
                            {" "}<Link className="underline" to="/terms-of-service">Terms of Service</Link>{" "}
                            and have read and understood the {" "}
                            <Link className="underline" to="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </p>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full py-5 font-medium mt-6">CREATE ACCOUNT</Button>
                        </Form.Item>
                    </Form>
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-6">or continue with</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                    <SocialAuthSection />
                    <p>Already a customer?{" "}
                        <Link to="/login" className="font-semibold">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;