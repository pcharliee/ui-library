import { Button, ThemeProvider } from '@mui/material';
import { theme } from '../../../theme';
import styles from './styles.module.css';
export var PrimaryButton = function (_a) {
    var onClick = _a.onClick, text = _a.text, _b = _a.variant, variant = _b === void 0 ? 'outlined' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c;
    var handleClick = function () {
        console.log('Hizo click');
        onClick === null || onClick === void 0 ? void 0 : onClick();
    };
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(Button, { className: styles.btn_color, variant: variant, color: color, onClick: handleClick }, text)));
};
