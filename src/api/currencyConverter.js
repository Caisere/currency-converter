// `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`

export async function getCurrency(
  curCurrency = 1,
  convertingCurrency = 'USD',
  convertedCurrency = 'EUR'
) {
  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${curCurrency}&from=${convertingCurrency}&to=${convertedCurrency}`
    );
    if (!res.ok) {
      throw new Error('Error converting currency. Please, try again');
    }
    const result = await res.json();
    const data = result?.rates[convertedCurrency];
    console.log(data);
    return data;
  } catch (err) {
    throw new Error('Error', err);
  }
}
