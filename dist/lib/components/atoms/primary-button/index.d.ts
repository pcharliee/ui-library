interface PrimaryButtonProps {
    onClick: () => void;
    text: string;
    variant: 'contained' | 'outlined';
    color: 'primary' | 'warning' | 'error';
}
export declare const PrimaryButton: ({ onClick, text, variant, color }: PrimaryButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
