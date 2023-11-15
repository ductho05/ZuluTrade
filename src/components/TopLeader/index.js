import { BORDER_COLOR, DARK_COLOR } from '@/utils/colors'
import React from 'react'
import CardItem from './CardItem'

function TopLeader() {
    return (
        <div
            style={{
                borderBottom: `1px solid ${BORDER_COLOR}`
            }}
            className="pb-[40px]"
        >
            <h1
                style={{
                    color: `${DARK_COLOR}`
                }}
                className="text-[1.5rem] font-[600] py-[30px] text-center">
                ZuluTrade's Top Leaders
            </h1>
            <div className="grid gap-[20px] grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <CardItem id={"id1"} />
                <CardItem id={"id1"} />
                <CardItem id={"id1"} />
                <div className="md:pl-[50px]">
                    <h1
                        style={{
                            color: `${DARK_COLOR}`
                        }}
                        className="text-[25px] font-[600] text-center md:text-start"
                    >
                        Rising
                    </h1>
                    <p
                        style={{
                            color: `${DARK_COLOR}`
                        }}
                        className="text-[16px] font-[400] text-center md:text-start"
                    >
                        Strategies that have positive momentum and trading history up to 30 weeks.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TopLeader