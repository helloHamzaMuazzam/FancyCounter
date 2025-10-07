import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";


export default function CountBUtton({ onDecrement, onIncrement, isDecrementDisabled }) {
 return( 
    <div className="button-container">
        <button className="count-btn" onClick={onDecrement} disabled={isDecrementDisabled}>
          <MinusIcon className="count-btn-icon"/>
        </button>
        <button className="count-btn" onClick={onIncrement}>
          <PlusIcon className="count-btn-icon"/>
        </button>
    </div>
 
  
  );
}