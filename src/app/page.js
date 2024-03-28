import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import EllipseCard from "./Components/EllipseCard";
import Image from "next/image";
import AlertCard from "./Components/AlertCard";
import Highlights from "./Components/Highlights";
import Sidebar from "./Components/Sidebar";
import Task1 from "./Components/task1";

export default function Dashboard() {
  Task1();

  return (
    <>
      {/* sidebar */}
      <Sidebar />
      <div className="bg-[#F8FAFC] w-full h-full px-20 pt-6 pb-12">
        <div className="w-3/4">
          {/* Dashboard start */}
          <div className="flex flex-row justify-between w-full">
            <p className="font-medium text-[24px] tracking-[0] leading-[normal] font-[Montserrat]">
              Dashboard
            </p>
            <div className="w-36 h-9 bg-white rounded-2xl shadow px-2 mb-4">
              <div className="flex flex-row items-center w-full h-full justify-around bg-transparent">
                <span className="border-r-2 border-[#CBCBCB] pr-2 bg-transparent">
                  <IoSearchOutline className="w-5 h-5 bg-transparent" />
                </span>
                <span className="border-r-2 border-[#CBCBCB] pr-2 bg-transparent">
                  <IoIosNotificationsOutline className="w-5 h-5 bg-transparent" />
                </span>
                <BsThreeDotsVertical className="w-5 h-5 bg-transparent" />
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full gap-x-4 md:justify-around">
            <EllipseCard />
            <EllipseCard />
            <EllipseCard />
            <EllipseCard />
          </div>
          {/* Dashboard end */}

          {/* Quick actions start */}
          <p className="font-medium text-text-colorstext-color-3 text-base whitespace-nowrap mt-6 font-[Roboto] mb-3">
            Quick Actions
          </p>
          <div className="flex flex-row justify-around h-[74px] rounded-[16px] overflow-hidden bg-white shadow-[0px_2px_8px_#1a38750d] py-4">
            <div className="flex flex-col justify-center items-center bg-transparent">
              <Image
                className="text-black w-6 h-6 bg-transparent"
                alt="Dashboard"
                src="/icons/arrow.svg"
                width={16}
                height={16}
              />
              <p className="font-medium text-[12px] bg-transparent">
                Create Indents
              </p>
            </div>
            <div className="border-r-2 border-[#CBCBCB] " />
            <div className="flex flex-col justify-center items-center bg-transparent">
              <Image
                className="black text-black w-6 h-6 bg-transparent"
                alt="Dashboard"
                src="/icons/shipment.svg"
                width={16}
                height={16}
              />
              <p className="font-medium text-[12px] bg-transparent">
                Add Vehicles
              </p>
            </div>
            <div className="border-r-2 border-[#CBCBCB] " />
            <div className="flex flex-col justify-center items-center bg-transparent">
              <Image
                className="text-black w-6 h-6 bg-transparent"
                alt="Dashboard"
                src="/icons/trailer.svg"
                width={16}
                height={16}
              />
              <p className="font-medium text-[12px] bg-transparent">
                Add Trailer
              </p>
            </div>
            <div className="border-r-2 border-[#CBCBCB] " />
            <div className="flex flex-col justify-center items-center bg-transparent">
              <Image
                className="text-black w-6 h-6 bg-transparent"
                alt="Dashboard"
                src="/icons/profile.svg"
                width={16}
                height={16}
              />
              <p className="font-medium text-[12px] bg-transparent">
                Add Driver
              </p>
            </div>
            <div className="border-r-2 border-[#CBCBCB] " />
            <div className="flex flex-col justify-center items-center bg-transparent">
              <Image
                className="text-black w-6 h-6 bg-transparent"
                alt="Dashboard"
                src="/icons/shipment.svg"
                width={16}
                height={16}
              />
              <p className="font-medium text-[12px] bg-transparent">
                Add Indents
              </p>
            </div>
          </div>
          {/* Quick actions end */}

          {/* priority alerts start */}
          <p className="font-medium text-base whitespace-nowrap mt-6 font-[Roboto] mb-3">
            High Priority alerts (14)
          </p>
          <div className="flex flex-row w-full gap-x-14 pb-2 md:justify-around">
            <AlertCard />
            <AlertCard />
          </div>
          {/* priority alerts end */}
        </div>
        <Highlights />
      </div>
    </>
  );
}

// height issue
// host
// task 2 
