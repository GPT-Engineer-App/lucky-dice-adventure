import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dice } from './Dice';

const Index = () => {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(10);
  const [result, setResult] = useState(null);

  const rollDice = () => {
    if (bet > balance) {
      alert("Insufficient balance!");
      return;
    }
    const roll = Math.floor(Math.random() * 6) + 1;
    setResult(roll);
    if (roll > 3) {
      setBalance(balance + bet);
    } else {
      setBalance(balance - bet);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Dice Gambler</h1>
        <div className="mb-4 text-center">
          <p className="text-xl font-semibold">Balance: ${balance}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="bet" className="block text-sm font-medium text-gray-700 mb-1">
            Your Bet
          </label>
          <Input
            type="number"
            id="bet"
            value={bet}
            onChange={(e) => setBet(Math.max(1, parseInt(e.target.value)))}
            min="1"
            className="w-full"
          />
        </div>
        <Button onClick={rollDice} className="w-full mb-4">
          Roll Dice
        </Button>
        {result && (
          <div className="text-center">
            <Dice value={result} />
            <p className="mt-2 text-lg font-semibold">
              {result > 3 ? "You won!" : "You lost!"}
            </p>
          </div>
        )}
        <p className="mt-4 text-sm text-gray-600 text-center">
          Roll 4 or higher to win. Good luck!
        </p>
      </div>
    </div>
  );
};

export default Index;
