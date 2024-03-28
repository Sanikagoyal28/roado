export default function Highlights() {
  return (
    <>
      <div className="max-w-[350px] top-0 right-0 absolute font-[Roboto] py-6 bg-white shadow-[0px_2px_8px_#1a38750d] px-4 border-2">
        <p className="bg-transparent font-semibold font-[Roboto]">
          Todays Highlights (14)
        </p>
        <p className=" text-[#676666] font-normal text-[12px] bg-transparent font-[Roboto]">
          19 Mar 2024
        </p>
        <div className="flex flex-row gap-x-4 py-4 bg-transparent">
          <div className="w-[155px] bg-white rounded-[4px] border border-solid border-[#cacaca] bg-transparent p-3">
            <p className="font-medium text-[#676666] text-[12px] bg-transparent">
              Income
            </p>

            <p className="text-[#148714] font-medium text-[16px] whitespace-nowrap bg-transparent">
              100000 CAD
            </p>
            <p className=" text-[#676666] font-normal text-[12px] bg-transparent">
              2 payments received
            </p>
          </div>
          <div className="w-[155px] bg-white rounded-[4px] border border-solid border-[#cacaca] bg-transparent p-3">
            <p className="font-medium text-[#676666] text-[12px] bg-transparent">
              Expenses
            </p>

            <p className="text-[#d04141] font-medium text-[16px] whitespace-nowrap bg-transparent">
              50000 CAD
            </p>
            <p className=" text-[#676666] font-normal text-[12px] bg-transparent">
              5 payments paid
            </p>
          </div>
        </div>

        {/* completed activities */}
        <div className="bg-transparent my-2">
          <div className="flex flex-row justify-between bg-transparent">
            <p className="font-medium text-black text-[14px] bg-transparent font-[Roboto]">
              Completed Activities (14)
            </p>
            <p className="font-medium text-[#111111] text-[14px] underline bg-transparent font-[Roboto]">
              View all
            </p>
          </div>

          <div className="bg-transparent border border-[#CBCBCB] rounded mt-[12px]">
            <p className=" font-normal text-transparent text-[12px] bg-transparent border-b border-[#CBCBCB] p-3">
              <span className="text-[#1A3875] bg-transparent">
                Gurpreet Singh
              </span>
              <span className="text-black bg-transparent">&nbsp;</span>
              <span className="text-[#676666] bg-transparent">
                {" "}
                (Dispatch team) has created{" "}
              </span>
              <span className="text-black bg-transparent">
                Load No. I-I-AAA-1325
              </span>
            </p>
            <p className=" font-normal text-transparent text-[12px] bg-transparent border-b border-[#CBCBCB] p-3">
              {" "}
              <span className="text-[#1a3875] bg-transparent">Aman</span>
              <span className="text-[#676666] bg-transparent"> (Driver) </span>
              <span className="text-[#111111] bg-transparent">Picked Up</span>
              <span className="text-[#676666] bg-transparent"> goods at </span>
              <span className="text-[#111111] bg-transparent">
                Location_Name
              </span>
              <span className="text-[#676666] bg-transparent"> for </span>
              <span className="text-black bg-transparent">
                Load No. I-I-AAA-1325
              </span>
            </p>
            <p className=" font-normal text-transparent text-[12px] bg-transparent border-b border-[#CBCBCB] p-3">
              <span className="text-[#1A3875] bg-transparent">
                Gurpreet Singh
              </span>
              <span className="text-black bg-transparent">&nbsp;</span>
              <span className="text-[#676666] bg-transparent">
                {" "}
                (Dispatch team) has created{" "}
              </span>
              <span className="text-black bg-transparent">
                Load No. I-I-AAA-1325
              </span>
            </p>
            <p className=" font-normal text-transparent text-[12px] bg-transparent border-b border-[#CBCBCB] p-3">
              {" "}
              <span className="text-black bg-transparent">
                Load No. I-I-AAA-1325{" "}
              </span>
              <span className="text-[#676666] bg-transparent">will be</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#111111] bg-transparent">delivered</span>
              <span className="text-[#1a3875] bg-transparent"> by</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#1a3875] bg-transparent">Aman</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#1a3875] bg-transparent">(Driver)</span>
            </p>
          </div>
        </div>

        {/* sheduled activities */}
        <div className="bg-transparent my-2">
          <div className="flex flex-row justify-between bg-transparent">
            <p className="font-medium text-black text-[14px] bg-transparent font-[Roboto]">
              Scheduled Activities (14)
            </p>
            <p className="font-medium text-[#111111] text-[14px] underline bg-transparent font-[Roboto]">
              View all
            </p>
          </div>

          <div className="bg-transparent border border-[#CBCBCB] rounded mt-[12px]">
            <p className=" font-normal text-transparent text-[12px] bg-transparent border-b border-[#CBCBCB] p-3">
              {" "}
              <span className="text-black bg-transparent">
                Load No. I-I-AAA-1325{" "}
              </span>
              <span className="text-[#676666] bg-transparent">will be</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#111111] bg-transparent">delivered</span>
              <span className="text-[#1a3875] bg-transparent"> by</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#1a3875] bg-transparent">Aman</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#1a3875] bg-transparent">(Driver)</span>
            </p>
            <p className=" font-normal text-transparent text-[12px] bg-transparent border-b border-[#CBCBCB] p-3">
              {" "}
              <span className="text-[#1a3875] bg-transparent">Aman</span>
              <span className="text-[#676666] bg-transparent"> (Driver) </span>
              <span className="text-[#111111] bg-transparent">Picked Up</span>
              <span className="text-[#676666] bg-transparent"> goods at </span>
              <span className="text-[#111111] bg-transparent">
                Location_Name
              </span>
              <span className="text-[#676666] bg-transparent"> for </span>
              <span className="text-black bg-transparent">
                Load No. I-I-AAA-1325
              </span>
            </p>
            <p className=" font-normal text-transparent text-[12px] bg-transparent border-b border-[#CBCBCB] p-3">
              {" "}
              <span className="text-black bg-transparent">
                Load No. I-I-AAA-1325{" "}
              </span>
              <span className="text-[#676666] bg-transparent">will be</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#111111] bg-transparent">delivered</span>
              <span className="text-[#1a3875] bg-transparent"> by</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#1a3875] bg-transparent">Aman</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#1a3875] bg-transparent">(Driver)</span>
            </p>
            <p className=" font-normal text-transparent text-[12px] bg-transparent border-b border-[#CBCBCB] p-3">
              {" "}
              <span className="text-black bg-transparent">
                Load No. I-I-AAA-1325{" "}
              </span>
              <span className="text-[#676666] bg-transparent">will be</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#111111] bg-transparent">delivered</span>
              <span className="text-[#1a3875] bg-transparent"> by</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#1a3875] bg-transparent">Aman</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#1a3875] bg-transparent">(Driver)</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
