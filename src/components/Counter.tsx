import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Minus, RotateCcw } from 'lucide-react';

interface CounterProps {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-6xl font-bold">{count}</div>
      <div className="flex gap-4">
        <Button onClick={decrement} variant="outline" size="lg">
          <Minus className="mr-2 h-4 w-4" />
          Decrease
        </Button>
        <Button onClick={increment} variant="default" size="lg">
          <Plus className="mr-2 h-4 w-4" />
          Increase
        </Button>
        <Button onClick={reset} variant="secondary" size="lg">
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;