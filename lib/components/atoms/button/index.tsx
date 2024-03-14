import { CustomProvider } from '../../../themeProvider';
import { Button } from '@chakra-ui/react'
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
    console.log('Hizo click', text, variant, color);
    onClick?.()
  };

  // return (
  //   <div className={styles.btn_color} onClick={handleClick}>
  //     {/* <Button variant={variant} color={color} onClick={handleClick}>
  //       {text}
  //     </Button> */}
  //     hola fito
  //   </div>
  // )
  return (
    <CustomProvider>
      <Button
        onClick={handleClick}
        className={styles.btn_color}
        colorScheme='blue'>FITO</Button>
    </CustomProvider>
  );
};
