"use client"
import React from 'react'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Date: 15/11/2023',
        roi: 5.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 12.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 7.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 6.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 22.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 17.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 12.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 9.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 10.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 8.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 7.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 13.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 14.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 10.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 12.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 9.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 8.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 5.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 7.3
    },
    {
        name: 'Date: 15/11/2023',
        roi: 6.3
    }
];

function AreaChar({ id }) {
    return (
        <ResponsiveContainer width="100%" height={100}>
            <AreaChart
                width="100%"
                height={100}
                data={data}
                syncId={id}
            >
                <Tooltip />
                <Area type="monotone" dataKey="roi" stroke="#fd7e14" fill="#fd7e14" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default AreaChar