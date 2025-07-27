import type { Transaction } from "@/types/transaction";
import "@/styles/transaction/TransactionItem.css";

type Props = {
  transaction: Transaction;
  onClick: () => void;
};

const TransactionItem = ({transaction, onClick}: Props) =>{
    const {type, category, amount, memo, date} = transaction;

    return(
        <div
            className={`transaction-item ${type.toLowerCase()}`}
            onClick={onClick}
        >
            <div className="item-top">
                <span className="category">[{category}]</span>
                <span className="amount">
                    {type === "EXPENSE" ? "-" : "+"}
                    {amount.toLocaleString()}원
                </span>
            </div>
            <div className="item-bottom">
                <span className="memo">{memo}</span>
                <span className="date">{date}</span>
            </div>
        </div>
    );
};

export default TransactionItem;