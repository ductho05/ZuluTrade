import { BACKGROUND_GRAY } from '@/utils/colors'
import React from 'react'
import ContentImageLeft from './ContentImageLeft'
import ContentImageRight from './ContentImageRight'
import HowItWork from './HowItWork'

function ModCenter() {
    return (
        <div
            className="pt-[60px] pb-[280px] px-[40px] relative"
            style={{
                backgroundColor: `${BACKGROUND_GRAY}`
            }}
        >
            <ContentImageLeft />
            <ContentImageRight />
            <div className="absolute z-1 left-0 right-0 bottom-[-20%] bg-white mx-[100px] p-[40px] rounded-[24px] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
                <HowItWork />
            </div>
        </div>
    )
}

export default ModCenter