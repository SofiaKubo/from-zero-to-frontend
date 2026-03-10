import { Counter, CounterService } from '../services/CounterService';
import { useRef, useState, useCallback } from 'react';

export function useCounter() {
  const counterService = useRef(new CounterService());

  const [count, setCount] = useState(() => counterService.current.getCounter());

  const increment = useCallback(() => {
    counterService.current.increment();
    setCount(counterService.current.getCounter());
  }, []);

  const decrement = useCallback(() => {
    counterService.current.decrement();
    setCount(counterService.current.getCounter());
  }, []);

  const double = useCallback(() => {
    counterService.current.double();
    setCount(counterService.current.getCounter());
  }, []);

  const divide = useCallback(() => {
    counterService.current.divide();
    setCount(counterService.current.getCounter());
  }, []);

  return { count, increment, decrement, double, divide };
}
