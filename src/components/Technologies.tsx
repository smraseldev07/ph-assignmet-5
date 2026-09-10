import { use } from "react";
import type { itechnology } from "./Types";

interface techprops {
    techpromise : Promise<itechnology[]>
}

const Technologies = ({techpromise} :techprops) => {

    const technologies = use(techpromise)
   
    
    return (
        <div className="container mx-auto mt-28">
            <h1 className="text-5xl font-bold">Explore the <span>Technologies</span></h1>
            <p className="mt-2">Pick one technology per category to build your ideal stack.</p>
        </div>
    );
};

export default Technologies;