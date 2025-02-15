import React, { Children } from "react";
import { IoBagHandle, IoCart, IoPeople, IoPieChart } from "react-icons/io5";

const DashboardStats = () => {
  return (
    <div className="flex gap-4 w-full">
        <BoxWrapper>
            <div className="rounded-full h-10 w-10 flex items-center justify-center bg-sky-500">
                <IoBagHandle className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">Total Sales</span>
                <div className="flex items-center">
                    <strong className="text-xl text-gray-700 font-semibold">$3234.4</strong>
                    <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
            </div>
        </BoxWrapper>

        <BoxWrapper>
            <div className="rounded-full h-10 w-10 flex items-center justify-center bg-orange-600">
                <IoPieChart className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">Total Expenses</span>
                <div className="flex items-center">
                    <strong className="text-xl text-gray-700 font-semibold">$2234.4</strong>
                    <span className="text-sm text-green-500 pl-2">+231</span>
                </div>
            </div>
        </BoxWrapper>

        <BoxWrapper>
            <div className="rounded-full h-10 w-10 flex items-center justify-center bg-yellow-400">
                <IoPeople  className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">Total Customer</span>
                <div className="flex items-center">
                    <strong className="text-xl text-gray-700 font-semibold">$1234.4</strong>
                    <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
            </div>
        </BoxWrapper>

        <BoxWrapper>
            <div className="rounded-full h-10 w-10 flex items-center justify-center bg-green-600">
                <IoCart className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">Total Orders</span>
                <div className="flex items-center">
                    <strong className="text-xl text-gray-700 font-semibold">$2234.4</strong>
                    <span className="text-sm text-red-500 pl-2">-32</span>
                </div>
            </div>
        </BoxWrapper>
        
    </div>
  );
};

export default DashboardStats;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-3 flex-1 border border-gray-200 flex items-center">{children}</div>
  );
}
