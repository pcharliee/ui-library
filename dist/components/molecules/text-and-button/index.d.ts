interface TextAndButtonProps {
    label: string;
    onClick: () => void;
    text: string;
    variant?: 'contained' | 'outlined';
    color?: 'primary' | 'warning' | 'error';
}
export declare const TextAndButton: ({ label, onClick, text, variant, color }: TextAndButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
