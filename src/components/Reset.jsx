import { ResetIcon } from "@radix-ui/react-icons";

export default function Reset({ onReset }) {
 return( 
    <>
        <button className="reset-btn" onClick={onReset}>
             <ResetIcon className='reset-btn-icon'/>
        </button>
     
    </>
  );
}