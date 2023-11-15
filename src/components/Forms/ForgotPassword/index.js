"use client"
import { ORANGE_COLOR, TEXT_COLOR } from '@/utils/colors'
import React from 'react'
import { Button, Form, Input } from 'antd';
import Link from 'next/link';

function ForgotPasswordForm() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[74vh]">
            <h1
                style={{
                    color: `${TEXT_COLOR}`
                }}
                className="text-[26px] font-[500] text-center"
            >
                Forgot Password
            </h1>

            <p className="text-[14px] text-gray-500 font-[400] text-center w-[80vw] md:w-[60vw] lg:w-[40vw] my-[20px]">
                Please enter your registered email address so we can help you create a new password.
            </p>

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
                            Reset Password
                        </Button>
                    </Form.Item>
                    <div className="flex items-center text-[14px] font-[500] justify-center">
                        <Link
                            href="/login"
                            className="ml-[6px] cursor-pointer underline hover:text-[#fd7e14]"
                        >
                            Back to Login
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default ForgotPasswordForm