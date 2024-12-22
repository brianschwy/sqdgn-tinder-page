import { Flame, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  onHot: () => void;
  onNot: () => void;
}

export const ActionButtons = ({ onHot, onNot }: ActionButtonsProps) => {
  return (
    <div className="swipe-buttons">
      <Button
        variant="outline"
        size="lg"
        className="rounded-full w-16 h-16 bg-destructive/10 border-destructive/20 hover:bg-destructive/20"
        onClick={onNot}
      >
        <X className="w-8 h-8 text-destructive" />
      </Button>
      
      <Button
        variant="outline"
        size="lg"
        className="rounded-full w-16 h-16 bg-primary/10 border-primary/20 hover:bg-primary/20"
        onClick={onHot}
      >
        <Flame className="w-8 h-8 text-primary" />
      </Button>
    </div>
  );
};