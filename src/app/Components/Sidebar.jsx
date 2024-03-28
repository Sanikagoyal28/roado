import Image from "next/image";

export default function Sidebar() {
  return (
    <>
      <div className="w-[64px] h-full top-0 left-0 absolute bg-white shadow-[0px_2px_8px_#1a38750d] flex flex-col px-2 items-center gap-y-5 pt-6">
      <div className="w-[32px] h-[29px] bg-transparent">
            <div className="relative h-[29px] bg-transparent">
              <div className="absolute w-[20px] h-[20px] top-[9px] left-0 rounded-[10px] border-2 border-solid border-[#19e921] bg-transparent" />
              <div className="absolute w-[20px] h-[20px] top-[9px] left-[12px] rounded-[10px] border-2 border-solid border-[#ea1313] bg-transparent" />
              <div className="absolute w-[20px] h-[20px] top-0 left-[6px] rounded-[10px] border-2 border-solid border-[#2329a8] bg-transparent" />
            </div>
          </div>
        <Image
          className="w-6 h-6 bg-transparent"
          alt="Dashboard"
          src="/icons/dashboard.svg"
          width={16}
          height={16}
        />
        <Image
          className="w-6 h-6 bg-transparent"
          alt="Dashboard"
          src="/icons/add.svg"
          width={16}
          height={16}
        />
        <Image
          className="w-6 h-6 bg-transparent"
          alt="Dashboard"
          src="/icons/arrow.svg"
          width={16}
          height={16}
        />
        <Image
          className="w-6 h-6 bg-transparent"
          alt="Dashboard"
          src="/icons/assignment.svg"
          width={16}
          height={16}
        />
        <Image
          className="w-6 h-6 bg-transparent"
          alt="Dashboard"
          src="/icons/clock.svg"
          width={16}
          height={16}
        />
        <Image
          className="w-6 h-6 bg-transparent"
          alt="Dashboard"
          src="/icons/shipment.svg"
          width={16}
          height={16}
        />
        <Image
          className="w-6 h-6 bg-transparent"
          alt="Dashboard"
          src="/icons/cart.svg"
          width={16}
          height={16}
        />
        <Image
          className="w-6 h-6 bg-transparent"
          alt="Dashboard"
          src="/icons/bag.svg"
          width={16}
          height={16}
        />
        <Image
          className="w-6 h-6 bg-transparent"
          alt="Dashboard"
          src="/icons/account.svg"
          width={16}
          height={16}
        />
        <Image
          className="w-6 h-6 bg-transparent"
          alt="Dashboard"
          src="/icons/feed.svg"
          width={16}
          height={16}
        />
        <Image
          className="w-6 h-6 bg-transparent"
          alt="Dashboard"
          src="/icons/settings.svg"
          width={16}
          height={16}
        />
      </div>
    </>
  );
}
