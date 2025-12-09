import React from "react";
import React, { Suspense } from "react";
const AdvancedCard = React.lazy(() => import("../AdvancedCard"));
import { FiUser } from "react-icons/fi";

export default function AdvancedCardExample() {
  return (
    <Suspense fallback={<div>Carregando card...</div>}>
      <AdvancedCard
        title="Usuário Premium"
        icon={<FiUser />}
        actions={<button className="btn">Ação</button>}
        highlight
      >
        <p>Este é um exemplo de componente reutilizável com props flexíveis.</p>
      </AdvancedCard>
    </Suspense>
  );
}
