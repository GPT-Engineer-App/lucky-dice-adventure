import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

export const Dice = ({ value }) => {
  const DiceIcon = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6][value - 1];
  return <DiceIcon size={48} className="mx-auto" />;
};
