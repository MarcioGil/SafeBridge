import { ButtonHTMLAttributes } from 'react';

export default function AccessibleButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`focus-visible:outline-2 focus-visible:outline-blue-600 ${props.className || ''}`}
      aria-label={props['aria-label'] || 'Botão'}
    >
      {props.children}
    </button>
  );
}
