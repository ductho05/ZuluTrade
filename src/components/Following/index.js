import { DARK_COLOR } from '@/utils/colors'
import React from 'react'
import CardItem from '../TopLeader/CardItem'

function Following() {
    return (
        <div
            className="pb-[40px]"
        >
            <div className="grid gap-[20px] grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <div className="pr-[40px]">
                    <h1
                        style={{
                            color: `${DARK_COLOR}`
                        }}
                        className="text-[25px] font-[600]"
                    >
                        AMOUNT FOLLOWING - HIGHEST AUM
                    </h1>
                    <p
                        style={{
                            color: `${DARK_COLOR}`
                        }}
                        className="text-[16px] font-[400]"
                    >
                        Strategies that have positive momentum and move near ATHs (All Time Highs)
                    </p>
                </div>
                <CardItem id={"id2"} />
                <CardItem id={"id3"} />
                <CardItem id={"id4"} />
            </div>
        </div>
    )
}

export default Following