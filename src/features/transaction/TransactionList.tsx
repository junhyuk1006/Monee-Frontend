import TransactionItem from "./TransactionItem";
import type { Transaction } from "@/types/transaction";

type Props = {
    transactions: Transaction[];
    onItemClick: (transaction: Transaction) => void;
}

const TransactionList = ({transactions, onItemClick} : Props ) =>{
    return(
        <div className="transaction-list">
            {transactions.map((item) =>(
                <TransactionItem 
                key={item.id}
                transaction={item}
                onClick={()=>onItemClick(item)}
                />
            ))}
        </div>
    );
};

export default TransactionList;