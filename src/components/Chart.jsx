import React, { PureComponent } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination";
import { TbArrowsMaximize } from "react-icons/tb";
import { PiPlusCircleBold } from "react-icons/pi";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { data1d,data3d,data1w,data1m,data6m,dataMax } from '@/assets/data';


const dataMap = {
    '1d': data1d,
    '3d': data3d,
    '1w': data1w,
    '1m': data1m,
    '6m': data6m,
    'max': dataMax,
};

export default class StockChart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            chartData: data1w, // Default data
            selectedPeriod: '1w', // Default period
        };
    }

    handlePaginationClick = (period) => {
        this.setState({
            chartData: dataMap[period],
            selectedPeriod: period,
        });
    };

    render() {
        const { chartData, selectedPeriod } = this.state;

        return (
            <div className="">
                <div className="p-3 flex flex-wrap items-center justify-between gap-5">
                    <div className="flex flex-nowrap items-center gap-5">
                        <div className="flex flex-nowrap items-center gap-2 text-gray-500 cursor-pointer">
                            <TbArrowsMaximize className='text-lg' />
                            <h1 className='text-xs font-medium'>Fullscreen</h1>
                        </div>
                        <div className="flex flex-nowrap items-center gap-2 text-gray-500 cursor-pointer">
                            <PiPlusCircleBold className='text-lg' />
                            <h1 className='text-xs font-medium'>Compare</h1>
                        </div>
                    </div>

                    <div className="">
                        <Pagination>
                            <PaginationContent>
                                {Object.keys(dataMap).map((period) => (
                                    <PaginationItem key={period}>
                                        <PaginationLink
                                            href="#"
                                            className={`p-0 h-7 text-xs tracking-[1px] font-semibold ${
                                                selectedPeriod === period
                                                    ? 'bg-indigo-600 text-white'
                                                    : 'text-gray-400'
                                            }`}
                                            onClick={() => this.handlePaginationClick(period)}
                                        >
                                            {period}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>

                <div className="w-full h-[200px] flex flex-nowrap items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chartData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} /> */}
                            <Tooltip
                                formatter={(value, name) => [`${value}`, name]}
                                labelFormatter={(label) => `Date: ${label}`}
                            />
                            <Area type="monotone" dataKey="close" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
}
