import React, { useEffect, useState } from 'react'
import { Progress } from './progress';



const CustomProgressBar = ({cost}) => {
    const [progress, setProgress] = useState(0);
    // useEffect(() => {
    //   if(cost >= 100){
    //     setProgress(100);

    //   }else{

    //     setProgress(cost);
    //   }
    //   }, [cost])

      return ( 
        <div className='py-4 px-7 pb-10 flex justify-center'>
            <Progress value={cost >= 100 ? 100 : cost} className="w-[90%] min-h-3 border border-[#000]" />
        </div>
      )

}

export default CustomProgressBar