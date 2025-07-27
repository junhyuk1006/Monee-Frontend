import { useEffect, useState } from "react";
import type { Transaction } from "@/types/transaction";
import "@/styles/transaction/TransactionForm.css";

type Props = {
    transaction: Transaction | null;
    onClose: () => void;
}

const TransactionForm = ({transaction, onClose}: Props) =>{
    const [type,setType] = useState<"INCOME"|"EXPENSE">("EXPENSE");
    const [category,setCategory] = useState("");
    const [amount,setAmount] = useState(0);
    const [memo,setMemo] = useState("");
    const [date,setDate] = useState("");

    useEffect(() => {
        if(transaction) {
            setType(transaction.type);
            setCategory(transaction.category);
            setAmount(transaction.amount);
            setMemo(transaction.memo);
            setDate(transaction.date);
        }
    }, [transaction]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newTransaction: Transaction = {
            id: transaction ? transaction.id : Date.now(),
            type,
            category,
            amount,
            memo,
            date,
        };

        console.log("저장할 데이터: ", newTransaction);
        onClose();
    };

    return (
        <form className="transaction-form" onSubmit={handleSubmit}>
            <h2>{transaction ? "거래 수정" : "새 거래 등록"}</h2>
            <label>
                타입:
                <select value={type} onChange={(e) => setType(e.target.value as "INCOME" | "EXPENSE")}>
                <option value="INCOME">수입</option>
                <option value="EXPENSE">지출</option>
                </select>
            </label>

            <label>
                카테고리:
                <input value={category} onChange={(e) => setCategory(e.target.value)} />
            </label>

            <label>
                금액:
                <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
            </label>

            <label>
                메모:
                <input value={memo} onChange={(e) => setMemo(e.target.value)} />
            </label>

            <label>
                날짜:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>

            <div className="form-buttons">
                <button type="submit">저장</button>
                <button type="button" onClick={onClose}>취소</button>
            </div>
        </form>
    );
};

export default TransactionForm;