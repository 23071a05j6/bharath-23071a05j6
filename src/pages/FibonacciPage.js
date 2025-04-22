import React, { useState } from 'react';

const FibonacciPage = () => {
  const [num, setNum] = useState('');
  const [result, setResult] = useState([]);

  const generateFibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fibonacciResult = generateFibonacci(parseInt(num));
    setResult(fibonacciResult);
  };

  return (
    <div className="page">
      <h2>Generate Fibonacci Sequence</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter number of terms"
        />
        <button type="submit">Generate</button>
      </form>

      {result.length > 0 && (
        <div>
          <h3>Fibonacci Sequence:</h3>
          <p>{result.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default FibonacciPage;
