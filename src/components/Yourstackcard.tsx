import React from 'react';

const Yourstackcard = () => {
    return (
        <div className='ml-7'>
           <div className="w-[370px] rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_2px_6px_rgba(15,23,42,0.08)]">
 
  <h2 className="text-[20px] font-bold leading-6 text-slate-900">
    Your Stack
  </h2>


  <p className="mt-2 text-[16px] leading-5 text-[#91A4C1]">
    No technologies selected yet.
  </p>


  <div
    className="mt-5 flex h-[89px] items-center justify-center rounded-2xl border border-dashed border-[#D7E1F0]"
  >
    <p className="text-[16px] text-[#91A4C1]">
      Your stack is empty.
    </p>
  </div>
</div>
        </div>
    );
};

export default Yourstackcard;