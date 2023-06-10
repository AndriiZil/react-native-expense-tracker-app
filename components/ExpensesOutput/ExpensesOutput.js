import { View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-06-05'),
  },
  {
    id: 'e4',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2023-06-07'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2023-06-08'),
  },
  {
    id: 'e4',
    description: 'A Book',
    amount: 14.99,
    date: new Date('2023-06-09'),
  },
  {
    id: 'e5',
    description: 'Another Book',
    amount: 18.59,
    date: new Date('2023-06-10'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
