import axios from 'axios';

const BACKEND_URL = 'https://my-project-6665-4491d.firebaseio.com';

export async function storeExpense(expenseData) {
  const response = await axios.post(`${BACKEND_URL}/expenses.json`, expenseData);

  return response.data.name;
}

export async function getExpenses() {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const item = response.data[key];

    expenses.push({
      id: key,
      amount: item.amount,
      date: new Date(item.date),
      description: item.description,
    });
  }

  return expenses;
}

export async function updateExpense(id, expenseData) {
  return axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id) {
  await axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
}