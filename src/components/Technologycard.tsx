
import type { itechnology } from './Types';
import Techcarddesign from './Techcarddesign';
import type { Dispatch, SetStateAction } from 'react';
interface cardprop {
    technologies : itechnology[]
    yourstack : itechnology[]
     setyourstack:Dispatch<SetStateAction<itechnology[]> >
}
const Technologycard = ({technologies, yourstack , setyourstack} :cardprop ) => {
   
    
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                technologies.map((technology) =>
                   
                      <Techcarddesign key={technology.id} technology  = {technology} yourstack ={yourstack} setyourstack = {setyourstack} ></Techcarddesign>
                   
                )
            }
        </div>
    );
};

export default Technologycard;