import { motion } from "framer-motion";
import { formatDistanceToNow, format } from "date-fns";
import { ArrowRightLeft, User, Clock } from "lucide-react";

interface TradeCardProps {
  trade: {
    time: Date;
    fromToken: string;
    toToken: string;
    fromAmount: number;
    toAmount: number;
    fromValue: number;
    toValue: number;
    context: string;
    userName: string;
  };
}

export const TradeCard = ({ trade }: TradeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="trade-card"
    >
      <div className="trade-card-content">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <User className="text-muted-foreground w-4 h-4" />
            <span className="text-sm text-muted-foreground">{trade.userName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="text-muted-foreground w-4 h-4" />
            <span className="text-xs text-muted-foreground">
              {format(trade.time, "MMM d, yyyy HH:mm")}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center mb-4">
          <ArrowRightLeft className="text-primary w-8 h-8" />
        </div>
        
        <div className="mb-6">
          <div className="text-sm text-muted-foreground mb-2">
            {formatDistanceToNow(trade.time)} ago
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-primary glow">{trade.fromAmount} {trade.fromToken}</span>
              <span className="text-muted-foreground">(≈${trade.fromValue})</span>
            </div>
            
            <div className="text-center text-muted-foreground">for</div>
            
            <div className="flex justify-between items-center">
              <span className="text-primary glow">{trade.toAmount} {trade.toToken}</span>
              <span className="text-muted-foreground">(≈${trade.toValue})</span>
            </div>
          </div>
        </div>

        <div className="text-sm text-center text-muted-foreground">
          {trade.context}
        </div>
      </div>
    </motion.div>
  );
};