import { DARK_COLOR, ORANGE_COLOR } from '@/utils/colors'
import React from 'react'
import AwardItem from './AwardItem'

function OurAwards() {
    return (
        <div className="py-[60px]">
            <h1
                style={{
                    color: `${DARK_COLOR}`
                }}
                className="text-[24px] text-center font-[700]"
            >
                Our <span style={{
                    color: `${ORANGE_COLOR}`
                }}>Awards</span>
            </h1>
            <div className="grid gap-[20px] grid-cols-1 md:grid-cols-3">
                <AwardItem />
                <AwardItem />
                <AwardItem />
            </div>
        </div>
    )
}

export default OurAwards