import { PrimaryButton } from '../../atoms/primary-button';
import { Typography, ThemeProvider } from "@mui/material";
import { theme } from '../../../../theme';
import styles from './styles.module.css';

interface TextAndButtonProps {
  label: string
  onClick: () => void
  text: string
  variant?: 'contained' | 'outlined'
  color?: 'primary' | 'warning' | 'error'
}

export const TextAndButton = ({
  label,
  onClick,
  text,
  variant = 'outlined',
  color = 'primary'
}: TextAndButtonProps) => {

  const handleClick = () => {
    console.log("Se hizo click en la molecula");
    onClick?.();
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Typography className={styles.title} variant='h5'>{label}</Typography>
        <PrimaryButton 
          onClick={handleClick}
          text={text}
          variant={variant}
          color={color} />
      </div>
    </ThemeProvider>
  );
};
