import { Status } from "../../../const";

const BetSlip = ({ status }) => {
  return (
    <div className=" w-full max-w-xl translate-y-2 flex flex-col perspective transition-all ease-in-out duration-1000 items-center justify-center ">
      <div
        className={`grid grid-cols-12 gap-0.5 h-fit w-full mx-auto max-w-3xl px-2 transition-all ease-in-out duration-1000 backdrop-blur-sm ${
          status === Status.SUSPENDED ? "applyPerspective" : ""
        }`}
      >
        <div
          className="relative rounded flex flex-col items-center justify-center cursor-pointer opacity-100 cursor-pointer border-white/10 col-span-4 bg-gradient-to-r from-indigo to-blue rounded-b-none h-12"
          id="amar-back"
        >
          <span className="absolute flex items-center h-4 gap-1 px-1 w-full text-xs font-normal tracking-wider rounded-t bg-black/40 text-white/90 top-0">
            Amar{" "}
          </span>
          <span className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl  text-white/60 top-1/2 left-1/2">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0 text-[10px] text-white left-0.5">
            2.12
          </span>
          <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
        </div>
        <div
          className="relative rounded flex flex-col items-center justify-center cursor-pointer opacity-100 cursor-pointer border-white/10 col-span-4 bg-gradient-to-r from-indigo to-blue rounded-b-none h-12"
          id="akbar-back"
        >
          <span className="absolute flex items-center h-4 gap-1 px-1 w-full text-xs font-normal tracking-wider rounded-t bg-black/40 text-white/90 top-0">
            Akbar
          </span>
          <span className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl  text-white/60 top-1/2 left-1/2">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0 text-[10px] text-white left-0.5">
            3.15
          </span>
          <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
        </div>
        <div
          className="relative rounded flex flex-col items-center justify-center cursor-pointer opacity-100 cursor-pointer border-white/10 col-span-4 bg-gradient-to-r from-indigo to-blue rounded-b-none h-12"
          id="anthony-back"
        >
          <span className="absolute flex items-center h-4 gap-1 px-1 w-full text-xs font-normal tracking-wider rounded-t bg-black/40 text-white/90 top-0">
            Anthony
          </span>
          <span className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl  text-white/60 top-1/2 left-1/2">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0 text-[10px] text-white left-0.5">
            4.15
          </span>
          <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
        </div>
        <div
          className="relative rounded flex flex-col items-center justify-center cursor-pointer opacity-100 cursor-pointer border-white/10 col-span-4 bg-gradient-to-r from-red to-red/60 rounded-t-none h-12"
          id="amar-lay"
        >
          <span className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl  text-white/60 top-1/2 left-1/2">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0 text-[10px] text-white left-0.5">
            2.22
          </span>
          <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
        </div>
        <div
          className="relative rounded flex flex-col items-center justify-center cursor-pointer opacity-100 cursor-pointer border-white/10 col-span-4 bg-gradient-to-r from-red to-red/60 rounded-t-none h-12"
          id="akbar-lay"
        >
          <span className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl  text-white/60 top-1/2 left-1/2">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0 text-[10px] text-white left-0.5">
            3.35
          </span>
          <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
        </div>
        <div
          className="relative rounded flex flex-col items-center justify-center cursor-pointer opacity-100 cursor-pointer border-white/10 col-span-4 bg-gradient-to-r from-red to-red/60 rounded-t-none h-12"
          id="anthony-lay"
        >
          <span className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl  text-white/60 top-1/2 left-1/2">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0 text-[10px] text-white left-0.5">
            4.45
          </span>
          <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
        </div>
        <div
          className="relative rounded flex flex-col items-center justify-center cursor-pointer opacity-100 cursor-pointer border-white/10 rounded-t-md col-span-3 bg-gradient-to-t from-gray/20 to-gray/50 h-12"
          id="odd"
        >
          <span className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl  text-white/60 top-1/2 left-1/2">
            Odd
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0 text-[10px] text-white left-0.5">
            1.8
          </span>
          <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
        </div>
        <div
          className="relative rounded flex flex-col items-center justify-center cursor-pointer opacity-100 cursor-pointer border-white/10 rounded-t-md col-span-3 bg-gradient-to-t from-gray/20 to-gray/50 h-12"
          id="even"
        >
          <span className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl  text-white/60 top-1/2 left-1/2">
            Even
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0 text-[10px] text-white left-0.5">
            2.1
          </span>
          <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
        </div>
        <div
          className="relative rounded flex flex-col items-center justify-center cursor-pointer opacity-100 cursor-pointer border-white/10 rounded-t-md col-span-3 bg-gradient-to-t from-gray/20 to-gray/50 h-12"
          id="black"
        >
          <span className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl  text-white/60 top-1/2 left-1/2">
            Black
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0 text-[10px] text-white left-0.5">
            1.97
          </span>
          <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1">
            <svg
              width={209}
              height={211}
              viewBox="0 0 209 211"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                id="Vector"
                d="M159.999 78.8C151.699 78.8 143.999 80.9 137.199 84.5C146.899 75.6 152.999 62.9 152.999 48.7C152.999 21.9 131.299 0.100098 104.399 0.100098C77.5992 0.100098 55.7993 21.8 55.7993 48.7C55.7993 63 61.9992 75.7999 71.8992 84.7C64.9992 80.8999 57.0994 78.7 48.5994 78.7C21.8994 78.7 0.199219 100.4 0.199219 127.1C0.199219 153.8 21.8994 175.5 48.5994 175.5C72.7994 175.5 92.7992 157.7 96.3992 134.5C99.3992 157.8 92.2994 185.2 76.5994 210.9C85.7994 210.9 95.0993 210.9 104.299 210.9C113.499 210.9 122.799 210.9 131.999 210.9C116.299 185.2 109.199 157.9 112.199 134.5C115.799 157.7 135.799 175.5 159.999 175.5C186.699 175.5 208.399 153.8 208.399 127.1C208.399 100.4 186.699 78.8 159.999 78.8Z"
                fill="black"
              />
            </svg>
            <svg
              width={209}
              height={235}
              viewBox="0 0 209 235"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                id="Vector"
                d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
        <div
          className="relative rounded flex flex-col items-center justify-center cursor-pointer opacity-100 cursor-pointer border-white/10 rounded-t-md col-span-3 bg-gradient-to-t from-gray/20 to-gray/50 h-12"
          id="red"
        >
          <span className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl  text-white/60 top-1/2 left-1/2">
            Red
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0 text-[10px] text-white left-0.5">
            1.97
          </span>
          <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1">
            <svg
              width={198}
              height={260}
              viewBox="0 0 198 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                fill="#DD181F"
              />
            </svg>
            <svg
              width={220}
              height={194}
              viewBox="0 0 220 194"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                id="Vector"
                d="M220 55.3C220 24.9 195.4 0.299988 165 0.299988C134.6 0.299988 110 24.9 110 55.3C110 24.9 85.4 0.299988 55 0.299988C24.6 0.299988 0 24.9 0 55.3C0 57.3 0.100049 59.2 0.300049 61.1C0.300049 61.5 0.4 62 0.5 62.4C0.7 63.8 0.900098 65.1 1.1001 66.5C12.7001 126.1 109.9 193.1 109.9 193.1C109.9 193.1 213.7 125.3 219.6 60.9C219.9 59.1 220 57.2 220 55.3Z"
                fill="#DD181F"
              />
            </svg>
          </span>
        </div>
        <div
          className="relative rounded flex flex-col items-center justify-center cursor-pointer opacity-100 cursor-pointer border-white/10 col-span-6 h-12 bg-gradient-to-t from-gray/20 to-gray/50 h-12"
          id="under7"
        >
          <span className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl  text-white/60 top-1/2 left-1/2">
            Under7
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0 text-[10px] text-white left-0.5">
            2
          </span>
          <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
        </div>
        <div
          className="relative rounded flex flex-col items-center justify-center cursor-pointer opacity-100 cursor-pointer border-white/10 col-span-6 h-12 bg-gradient-to-t from-gray/20 to-gray/50 h-12"
          id="over7"
        >
          <span className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl  text-white/60 top-1/2 left-1/2">
            Over7
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0 text-[10px] text-white left-0.5">
            2
          </span>
          <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
