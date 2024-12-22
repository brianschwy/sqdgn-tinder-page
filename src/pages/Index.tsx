import { useState } from "react";
import { TradeCard } from "@/components/TradeCard";
import { ActionButtons } from "@/components/ActionButtons";
import { useToast } from "@/components/ui/use-toast";

// Mock data - in a real app this would come from an API
const mockTrade = {
  time: new Date(),
  fromToken: "ETH",
  toToken: "SHAKE",
  fromAmount: 0.002,
  toAmount: 4092,
  fromValue: 7.36,
  toValue: 7.38,
  context: "The user, who claims 'trying to buy early and selling before they moon :(', may be experimenting with new or lesser-known tokens."
};

const Index = () => {
  const [currentTrade] = useState(mockTrade);
  const { toast } = useToast();

  const handleHot = () => {
    toast({
      title: "Marked as Hot! 🔥",
      description: "This trade has been added to your hot list.",
    });
  };

  const handleNot = () => {
    toast({
      title: "Marked as Not! ❌",
      description: "This trade has been skipped.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background p-4">
      <h1 className="text-2xl font-bold mb-8 text-primary glow">Terminal App</h1>
      
      <div className="w-full max-w-md mx-auto">
        <TradeCard trade={currentTrade} />
        <ActionButtons onHot={handleHot} onNot={handleNot} />
      </div>
    </div>
  );
};

export default Index;