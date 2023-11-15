import { DARK_COLOR } from '@/utils/colors'
import { MoreOutlined, StarOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import Image from 'next/image'
import React from 'react'
import IMAGE from "../../assets/images/homepages/card.jpg"
import AreaChar from '../chars/AreaChar'

function CardItem() {

    const items = [
        {
            key: '1',
            label: (
                <a href="/">
                    Share
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a href="/">
                    Compare
                </a>
            ),
        },
    ]

    return (
        <div className="bg-white rounded-[12px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <div className="p-[16px]">
                <div className="flex items-start justify-between">
                    <p className="w-max font-[500] rounded-[100px] bg-[rgba(175,76,70,.14)] text-[#af4c46] uppercase text-[12px] py-[5px] px-[8px]">
                        Risk 5
                    </p>
                    <Image
                        className="rounded-[50%]"
                        src={IMAGE}
                        style={{
                            width: '36px',
                            height: '36px',
                            objectFit: 'contain'
                        }}
                    />
                    <div className="flex items-center text-[22px] text-gray-400 cursor-pointer">
                        <StarOutlined />
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomLeft"
                        >

                            <Button style={{
                                border: 'none',
                                boxShadow: 'none'
                            }} icon={<MoreOutlined />}></Button>
                        </Dropdown>
                    </div>
                </div>
                <h1
                    style={{
                        color: `${DARK_COLOR}`
                    }}
                    className="text-[15px] font-[500] text-center my-[10px]"
                >
                    AlpineFX
                </h1>

                <div className="flex items-center justify-center">
                    <div className="flex items-center text-[12px] font-[500] mr-[10px]">
                        <h1 className="uppercase text-gray-400 mr-[6px]">COPIERS</h1>
                        <p>1006</p>
                    </div>

                    <div className="flex items-center text-[12px] font-[500] mr-[10px]">
                        <h1 className="uppercase text-gray-400 mr-[6px]">FOLLOWERS</h1>
                        <p>483</p>
                    </div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                    <Button style={{
                        fontWeight: 'bold',
                        boxShadow: 'none'
                    }}>
                        +13.6 %
                    </Button>
                </div>
            </div>
            <AreaChar />
        </div>
    )
}

export default CardItem