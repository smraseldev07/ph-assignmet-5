import { type Dispatch, type SetStateAction } from "react";
import type { itechnology } from "./Types";
import { RxCross1 } from "react-icons/rx";

interface stackprop {
   yourstack : itechnology[]
       setyourstack:Dispatch<SetStateAction<itechnology[]> >
}

const Yourstackcard = ({yourstack , setyourstack} :stackprop) => {

  const removetech = (stackToRemove: itechnology) => {
    const resttech = yourstack.filter((stack) => stack.name !== stackToRemove.name)
    
    setyourstack(resttech)
  }

    return (
        <div className='ml-7'>
           <div className="w-92.5 rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_2px_6px_rgba(15,23,42,0.08)]">
 
  <h2 className="text-[20px] font-bold leading-6 text-slate-900">
    Your Stack
  </h2>


  <p className="mt-2 text-[16px] leading-5 text-[#91A4C1] mb-3">
   {yourstack.length === 0  ? ' No technologies selected yet.' : `${yourstack.length} Technology Selected`}
  </p>
  <div 
  className={yourstack.length === 0 ? `className="mt-5 flex h-22.25 items-center justify-center rounded-2xl border border-dashed border-[#D7E1F0]` : ``}
  >
    <p className= {yourstack.length ===0 ? `text-[16px] text-[#91A4C1]` : ``}>
    {yourstack.length === 0 ? `  Your stack is empty.` : ``}
    </p>
  
  </div>


<div className="grid grid-cols-1">
  {
    yourstack.map((stack) => {
      return <div className="flex justify-between gap-3.5 items-center border border-[#E2E8F0] px-8 py-5 rounded-3xl mt-3">
        <div className="flex items-center gap-3">
         <img src={stack.icon} alt="" className="h-10 w-9" />
        <div>
           <h2>{stack.name}</h2> 
          <p>{stack.category}</p>
        </div>
        </div>
        
        
        
        <span onClick={() => removetech(stack)}>
         

          <RxCross1 />
        </span>
      </div>
      
    })
  }
  <button  onClick={() => setyourstack([])}
  className= {yourstack.length === 0 ? `` : `mt-5 w-full rounded-xl border border-red-300 bg-white py-3 text-2xl font-bold text-red-600 transition hover:bg-red-50`}
>
{yourstack.length === 0 ? `` : `Remove All`}
</button>
</div>

  
</div>  
        </div>
    );
};

export default Yourstackcard;