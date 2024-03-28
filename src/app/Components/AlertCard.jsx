const AlertCard = () => {
  return (
    <>
      <div className="flex flex-col w-[384px] bg-white px-4 py-3 rounded-2xl shadow font-[Roboto]">
        <div className="flex flex-row justify-between bg-transparent">
          <div className="flex flex-col bg-transparent mb-4">
            <p className="font-semibold bg-transparent font-[Roboto]">
              Driver Raised Concern
            </p>
            <p className="text-[12px] bg-transparent">
              Load No : 12454, Bill To : RoaDo demo Bangalore
            </p>
          </div>
          <p className="bg-transparent text-sm">13 Feb 24</p>
        </div>
        <p className="bg-transparent text-[#111111] text-[12px] tracking-[0] leading-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          mod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-row my-3 gap-x-9 w-full justify-end bg-transparent">
          <button className="w-15 h-8 text-[#1A3875] underline">Ignore</button>
          <button className="h-8 px-5 text-white bg-[#1A3875] rounded">
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default AlertCard;
