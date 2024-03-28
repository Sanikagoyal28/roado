import Image from "next/image";

export default function EllipseCard() {
  return (
    <>
      <div className="w-[196px] h-[266px] bg-white rounded-[12px] shadow-[0px_2px_8px_#1a38750d] px-4 py-3">
        <p className="font-normal text-black text-[14px] whitespace-nowrap mb-0 bg-transparent">
          Orders
        </p>
        <div className="w-[105px] h-[105px] bg-white rounded-full border-[#FFCB49] border-[16px] m-auto my-2 text-center flex justify-center items-center flex-col">
          <p className="text-[12px] text-[#676666] bg-transparent my-auto">
            Total
            <br />
            <span className="bg-transparent text-[12px] text-black">123456</span>
          </p>
        </div>
        {/* <Image
          className="w-[105px] h-[105px] bg-blue-500 rounded-full m-auto my-2"
          src="/icons/ellipse.svg"
          alt="Ellipse"
          width={16}
          height={16}
        /> */}
        <div className="w-[172px] h-6 px-2 flex flex-row justify-between items-center rounded bg-gradient-to-r from-white to-[#FFCB49] my-2">
          <p className="text-black text-[12px] bg-transparent">Upcoming</p>
          <p className="font-normal text-black text-[12px] whitespace-nowrap bg-transparent">
            50
          </p>
        </div>
        <div className="w-[172px] h-6 px-2 flex flex-row justify-between items-center rounded bg-gradient-to-r from-white to-[#7464FF] my-2">
          <p className="text-black text-[12px] bg-transparent">Ongoing</p>
          <p className="font-normal text-black text-[12px] whitespace-nowrap bg-transparent">
            100
          </p>
        </div>
        <div className="w-[172px] h-6 px-2 flex flex-row justify-between items-center rounded bg-gradient-to-r from-white to-[#4FD2B5] my-2">
          <p className="text-black text-[12px] bg-transparent">Completed</p>
          <p className="font-normal text-black text-[12px] whitespace-nowrap bg-transparent">
            50
          </p>
        </div>
      </div>
    </>
  );
}
