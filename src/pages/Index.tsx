import { useState } from "react";
import { TradeCard } from "@/components/TradeCard";
import { ActionButtons } from "@/components/ActionButtons";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

// Mock data - in a real app this would come from an API
const mockTrade = {
  time: new Date(),
  fromToken: "ETH",
  toToken: "SHAKE",
  fromAmount: 0.002,
  toAmount: 4092,
  fromValue: 7.36,
  toValue: 7.38,
  context: "The user, who claims 'trying to buy early and selling before they moon :(', may be experimenting with new or lesser-known tokens.",
  userName: "0xSquid.eth"
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

  const handleConnectWallet = () => {
    toast({
      title: "Connecting Wallet",
      description: "Wallet connection feature coming soon!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background p-4 pt-12">
      <div className="w-full max-w-5xl mx-auto">
        <div className="relative mb-8">
          <Button 
            onClick={handleConnectWallet}
            className="absolute right-0 -top-8"
            variant="outline"
          >
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
        
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-8 text-primary glow text-center">$SQDGN</h1>
          <TradeCard trade={currentTrade} />
          <ActionButtons onHot={handleHot} onNot={handleNot} />
        </div>
      </div>
    </div>
  );
};

export default Index;