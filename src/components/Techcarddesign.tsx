
import { useState, type Dispatch, type SetStateAction } from 'react';
import type { itechnology } from './Types';
import { Bounce, toast } from 'react-toastify';

interface techprops {
    technology : itechnology
     yourstack : itechnology[]
         setyourstack:Dispatch<SetStateAction<itechnology[]> >
}

const Techcarddesign = ({technology , yourstack , setyourstack} : techprops) => {

  const [isselected , setisselected] = useState(false)

 const handlestack = () => {
      if(isselected){
       return toast.error('invalid request', {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
      }
      setisselected(true)
      
      toast(`${technology.name} Added`  , {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  
setyourstack([...yourstack , technology])
  
 }
    
    return (
        <div>
           <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      
      {/* Top: Icon + Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-7 text-2xl font-bold text-slate-900">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-3 min-h-21 text-[16px] leading-7 text-slate-500">
        {technology.description}
      </p>

      {/* Divider */}
      <div className="my-5 border-t border-slate-100"></div>

      {/* Bottom Information */}
      <div className="flex items-center justify-between gap-3">
        
        {/* Category */}
        <span className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-600">
          {technology.category}
        </span>

        {/* Difficulty */}
        <span className="text-sm text-slate-500">
          {technology.difficulty}
        </span>

        {/* Rating */}
        <span className="flex items-center gap-1 text-sm font-medium text-slate-700">
          <span className="text-yellow-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button  onClick={() => handlestack()}
        className={isselected === false ? ` mt-5 w-full rounded-xl bg-slate-950 py-3 text-base font-medium text-white
                   transition hover:bg-slate-800` : `text-[#D91B7E] mt-5 w-full rounded-xl border py-3` }
      >
        
        {isselected === true ? "✓ Added to Stack" : "Add to Stack"}
        
      </button>
    </div>
        </div>
    );
};

export default Techcarddesign;