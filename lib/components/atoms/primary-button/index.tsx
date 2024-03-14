import React from 'react';
import { Button, ThemeProvider } from '@mui/material';
import { theme } from '../../../theme';
import styles from './styles.module.css';

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
    <ThemeProvider theme={theme}>
      <Button className={styles.btn_color} variant={variant} color={color} onClick={handleClick}>
        {text}
      </Button>
    </ThemeProvider>
  );
};
