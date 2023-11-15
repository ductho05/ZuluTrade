import { DARK_COLOR, ORANGE_COLOR } from '@/utils/colors'
import { ClockCircleOutlined, GoldOutlined, RightCircleFilled } from '@ant-design/icons'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IMAGE from "../../assets/images/homepages/winner.png"

function ContentImageRight() {
  return (
    <div className="flex justify-center items-center h-max">
      <div className="mr-[100px] flex flex-col items-end">
        <h1
          style={{
            color: `${DARK_COLOR}`
          }}
          className="text-[24px] font-[700] mb-[10px]">
          Beat the odds with Copy Trading
        </h1>
        <p className="mt-[20px] text-gray-600 text-[16px] text-end">
          Did you know that <span className="font-[600]">73% of our investors make profit</span> when copying <br></br> top leaders correctly?
        </p>
        <Link href="/"
          style={{
            color: `${ORANGE_COLOR}`
          }}
          className="flex items-center my-[20px]">
          <p className='font-[500] mr-[10px]'>
            Explore ZuluTrade's Statistics
          </p>
          <RightCircleFilled />
        </Link>
        <Button
          className="text-[16px] font-[500]"
          style={{
            backgroundColor: `${ORANGE_COLOR}`,
            color: '#fff',
            width: '220px',
            height: '38px',
            borderRadius: '1000px',
            border: 'none'
          }}
        >
          Try it Yourself
        </Button>
      </div>
      <Image src={IMAGE}
        style={{
          width: '352px',
          height: '414px',
          objectFit: 'contain'
        }}
      />
    </div>
  )
}

export default ContentImageRight