import React, { ReactNode } from "react";

interface AdvancedCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
  highlight?: boolean;
}

const AdvancedCardComponent: React.FC<AdvancedCardProps> = ({
  title,
  children,
  icon,
  actions,
  highlight = false,
}) => (
  <div
    className={`rounded-lg shadow-md p-4 mb-4 bg-white border transition-all ${
      highlight ? "border-blue-500" : "border-gray-200"
    }`}
  >
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        {icon && <span>{icon}</span>}
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      {actions && <div>{actions}</div>}
    </div>
    <div>{children}</div>
  </div>
);

export const AdvancedCard = React.memo(AdvancedCardComponent);
export default AdvancedCard;
