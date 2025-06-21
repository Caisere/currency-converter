import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { getCurrency } from './api/currencyConverter';
import './App.css';

function App() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      curCurrency: 1,
      convertingCurrency: 'USD',
      convertedCurrency: 'EUR',
    },
  });

  const formValues = watch();

  const { curCurrency, convertingCurrency, convertedCurrency } = formValues;

  const x = convertedCurrency === convertingCurrency;

  // const [count, setCount] = useState(0);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['currency', curCurrency, convertingCurrency, convertedCurrency],
    queryFn: async () => {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${curCurrency}&from=${convertingCurrency}&to=${convertedCurrency}`
      );
      if (!res.ok) {
        throw new Error('Error converting currency. Please, try again');
      }
      const result = await res.json();
      const data = result?.rates[convertedCurrency];
      return data;
    },
    enabled: false,
  });

  function handleOnSubmit(data) {
    console.log('Form Submitted Succesfully', data);
    let fromCur = data?.convertingCurrency;
    let toCur = data?.convertedCurrency;
    if (fromCur === toCur) return;
    refetch();
  }

  // let computedResult = `${data} ${convertedCurrency}`;
  // console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="form">
        <div>
          <label htmlFor="currencyInput">Currency</label>
          <input
            type="text"
            placeholder="currency"
            name="curCurrency"
            id="currencyInput"
            {...register('curCurrency')}
          />
        </div>
        <div>
          <label htmlFor="convertingCurrency">From</label>
          <select
            name="convertingCurrency"
            id="convertingCurrency"
            {...register('convertingCurrency')}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">British Pound</option>
          </select>
        </div>
        <div>
          <label htmlFor="convertedCurrency">To</label>
          <select
            name="convertedCurrency"
            id="convertedCurrency"
            {...register('convertedCurrency')}
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">British Pound</option>
          </select>
        </div>

        {x && <p>): Oops! Can't convert same currency</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Converting...' : 'Convert'}
        </button>

        {<input className="result" value={x ? 'Error' : data} readOnly />}
      </form>
    </>
  );
}

export default App;
