import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Chart from './Chart';

export default function Sample({value,setValue}) {
  return (
    <div>
      <Tabs defaultValue="chart" className="w-full">
        <TabsList className="bg-transparent relative w-full overflow-x-auto md:overflow-hidden overflow-y-hidden flex justify-start items-center gap-2 ">
          <div className="line absolute -top-1 border-b-[3px] border-gray-100 w-full h-full"></div>
          <TabsTrigger className="rounded-none text-xs outline-none ring-offset-0 bg-transparent  data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:border-indigo-500 border-b-2 border-transparent relative" value="summary">Summary</TabsTrigger>
          <TabsTrigger className="rounded-none text-xs outline-none ring-offset-0 bg-transparent  data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:border-indigo-500 border-b-2 border-transparent relative" value="chart">Chart</TabsTrigger>
          <TabsTrigger className="rounded-none text-xs outline-none ring-offset-0 bg-transparent  data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:border-indigo-500 border-b-2 border-transparent relative" value="statistics">Statistics</TabsTrigger>
          <TabsTrigger className="rounded-none text-xs outline-none ring-offset-0 bg-transparent  data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:border-indigo-500 data-[state=active]:border-b-2 relative" value="analysis">Analysis</TabsTrigger>
          <TabsTrigger className="rounded-none text-xs outline-none ring-offset-0 bg-transparent  data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:border-indigo-500 border-b-2 border-transparent  relative" value="setting">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="chart">
          <Chart value={value} setValue={setValue} />
        </TabsContent>
      </Tabs>



    </div>
  )
}
