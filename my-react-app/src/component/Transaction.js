
import Item from "./Item";
import DataContext from "../data/DataContext";
import { useContext } from 'react';


const Transaction =(props)=>{
 const {items}  = props
 

   return (
     <div>
      <ul>
            {items.map((element)=>{
                    return (
                      <Item title={element.title} amount={element.amount} key={element.id}/>  //space operator
                    );    
            })}
      </ul>
     </div>

   );
}


export default Transaction