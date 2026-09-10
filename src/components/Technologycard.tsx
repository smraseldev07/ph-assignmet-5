
import type { itechnology } from './Types';
import Techcarddesign from './Techcarddesign';
interface cardprop {
    technologies : itechnology[]
}
const Technologycard = ({technologies} :cardprop ) => {
   
    
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                technologies.map((technology) =>
                   
                      <Techcarddesign key={technology.id} technology  = {technology}></Techcarddesign>
                   
                )
            }
        </div>
    );
};

export default Technologycard;