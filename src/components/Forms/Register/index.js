"use client"
import { BORDER_COLOR, ORANGE_COLOR, TEXT_COLOR } from '@/utils/colors'
import React from 'react'
import { Button, Select, Form, Input } from 'antd';
import GOOGLE_ICON from "@/assets/images/icons/google.png"
import Image from 'next/image';
import Link from 'next/link';

function RegisterForm() {

    const { Option } = Select;

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1
                style={{
                    color: `${TEXT_COLOR}`
                }}
                className="text-[26px] font-[500] text-center"
            >
                Create an account
            </h1>
            <Button
                className="flex items-center mt-[50px] shadow-none"
                icon={
                    <Image src={GOOGLE_ICON} style={{
                        width: '20px',
                        height: '20px',
                        objectFit: 'cover'
                    }} />
                }>
                Login with google
            </Button>
            <div className="my-[30px] flex items-center">
                <p style={{
                    borderBottom: `1px solid ${BORDER_COLOR}`,
                    width: '100px'
                }}></p>
                <p className="text-center mx-[20px]">OR</p>
                <p style={{
                    borderBottom: `1px solid ${BORDER_COLOR}`,
                    width: '100px'
                }}></p>
            </div>
            <div className="w-[80vw] md:w-[60vw] lg:w-[40vw]">
                <Form
                    name="basic"
                    layout="vertical"
                    style={{
                        width: '100%',
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <Form.Item
                            label="First Name"
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your first name!',
                                },
                            ]}
                        >
                            <Input size='large' placeholder='Enter your first name' />
                        </Form.Item>

                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your last name!',
                                },
                            ]}
                        >
                            <Input size='large' placeholder='Enter your last name' />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label="Country"
                        name="country"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your country!',
                            },
                        ]}
                    >
                        <Select placeholder="Select a country" size='large'>
                            <Option value="china">VietNam</Option>
                            <Option value="usa">U.S.A</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                                message: 'Phone number incorrect format',
                            },
                        ]}
                    >
                        <Input
                            size='large'
                            addonBefore={prefixSelector}
                            placeholder='Enter your phone number'
                            style={{
                                width: '100%'
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Email incorrect format',
                            },
                        ]}
                    >
                        <Input size='large' placeholder='Enter your email' />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                message: 'Password strength: 1 uppercase character, 8 or more characters, at least 1 number, at least 1 letter, at least 1 special character',
                            },
                        ]}
                    >
                        <Input.Password size='large' placeholder='Enter your password' />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            size='large'
                            style={{
                                backgroundColor: `${ORANGE_COLOR}`,
                                border: 'none',
                                color: '#fff',
                                width: '100%',
                                borderRadius: '100px',
                                marginTop: '50px',
                                fontWeight: 500
                            }} htmlType="submit">
                            Create account
                        </Button>
                    </Form.Item>
                    <div className="flex items-center text-[14px] font-[500] justify-center">
                        <p className="">Already have an account?</p>
                        <Link
                            href="/login"
                            className="ml-[6px] cursor-pointer underline hover:text-[#fd7e14]"
                        >
                            Login
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default RegisterForm