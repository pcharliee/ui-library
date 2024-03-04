import { Button } from '@mui/material'

interface PrimaryButtonProps {
  onClick: () => void
  text: string,
  variant: 'contained' | 'outlined'
  color: 'primary' | 'warning' | 'error'
}
export const PrimaryButton = ({
  onClick,
  text,
  variant = 'outlined',
  color = 'primary'
}: PrimaryButtonProps) => {
  const handleClick = () => {
    console.log('Hizo click');
    onClick?.()
  };
  return ( 
    <Button
      variant={variant}
      color={color}
      onClick={handleClick}>
      {text}
    </Button>
         );
};

