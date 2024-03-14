/// <reference types="react" />
interface PrimaryButtonProps {
    onClick: () => void;
    text: string;
    variant: 'contained' | 'outlined';
    color: 'primary' | 'warning' | 'error';
}
export declare const PrimaryButton: ({ onClick, text, variant, color }: PrimaryButtonProps) => import("react").JSX.Element;
export {};
