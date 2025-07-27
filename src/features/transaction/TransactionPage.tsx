import Navbar from "@/components/Navbar";
import { useState } from "react";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";
import type { Transaction } from "@/types/transaction";
import "@/styles/transaction/transactionPage.css";
const TransactionPage = () => {
    const [showForm, setShowForm]  = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
    const dummyTransactions: Transaction[] = [
    {
      id: 1,
      type: "EXPENSE",
      category: "식비",
      amount: 12000,
      memo: "점심",
      date: "2025-07-27",
    },
    {
      id: 2,
      type: "INCOME",
      category: "용돈",
      amount: 50000,
      memo: "부모님",
      date: "2025-07-26",
    },
  ];
    return (
        <div className="main-container">
            <Navbar/>
            <h2>가계부</h2>
            {/* showForm 이 false 일때 등록버튼 + 리스트 화면 출력 */}
            {!showForm &&(
                <>
                    <div className="transaction-page-button-container">
                        <button onClick={() => setShowForm(true)}>+ 등록</button>
                    </div>
                    <TransactionList
                        transactions={dummyTransactions} 
                        onItemClick={(item)=>{
                        setSelectedTransaction(item);
                        setShowForm(true);
                    }}
                    />
                </>
            )}

            {/* showForm 이 true 일때 Form양식 화면 출력 */}
            {showForm &&(
                <TransactionForm
                    transaction={selectedTransaction}
                    onClose={() => {
                        setSelectedTransaction(null);
                        setShowForm(false);
                    }}
                />
            )}
        </div>
    );
};

export default TransactionPage;

