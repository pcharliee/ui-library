import { PrimaryButton } from '../../atoms/primary-button';
import { Typography, ThemeProvider } from "@mui/material";
import { theme } from '../../../theme';
import styles from './styles.module.css';
export var TextAndButton = function (_a) {
    var label = _a.label, onClick = _a.onClick, text = _a.text, _b = _a.variant, variant = _b === void 0 ? 'outlined' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c;
    var handleClick = function () {
        console.log("Se hizo click en la molecula");
        onClick === null || onClick === void 0 ? void 0 : onClick();
    };
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement("div", { className: styles.container },
            React.createElement(Typography, { className: styles.title, variant: 'h5' }, label),
            React.createElement(PrimaryButton, { onClick: handleClick, text: text, variant: variant, color: color }))));
};
