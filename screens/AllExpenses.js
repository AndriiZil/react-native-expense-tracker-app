import { useContext } from 'react';

import { ExpensesContext } from '../store/expenses-context';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod='Total'
      fallbackText='No expenses registered for the last 7 days'
    />
  );
}

export default AllExpenses;
