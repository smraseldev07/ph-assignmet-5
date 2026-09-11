
import type { itechnology } from "./Types";
import Technologycard from "./Technologycard";
import Yourstackcard from "./Yourstackcard";
import { use, useState } from "react";

interface techprops {
    techpromise : Promise<itechnology[]>
   
}

const Technologies = ({techpromise} :techprops) => {

    const technologies = use(techpromise)

    const [yourstack, setyourstack] = useState<itechnology[]>([])
   
    
    return (
        <div className="container mx-auto mt-28">
            <h1 className="text-5xl font-bold">Explore the <span>Technologies</span></h1>
            <p className="mt-2">Pick one technology per category to build your ideal stack.</p>

        <div className="flex">
                <Technologycard technologies = {technologies} yourstack ={yourstack} setyourstack = {setyourstack } ></Technologycard>
         
        
          <Yourstackcard yourstack ={yourstack} setyourstack = {setyourstack} ></Yourstackcard>
        </div>
  
        </div>
    );
};

export default Technologies;