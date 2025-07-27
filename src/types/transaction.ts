export type Transaction = {
    id: number;
    type: "INCOME" | "EXPENSE";
    category: string;
    amount: number;
    memo: string;
    date: string;
};