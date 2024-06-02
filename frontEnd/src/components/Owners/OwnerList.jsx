import { owners } from '../../assets/data/owners';
import OwnerCard from './OwnerCard';

const OwnerList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] drop-shadow-2xl'>
        {owners.map(owner => (
            <OwnerCard key={owner.id} owner={owner} />
        ))}
    </div>
  )
}

export default OwnerList