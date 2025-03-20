import './CustomButton.css';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { createTheme, ThemeProvider } from "@mui/material/styles";



const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    "&.MuiButton-containedPrimary": {
                        backgroundColor: "#FB8C00", // Cor do botão "contained"
                        color: "#000", // Cor do texto (opcional)
                        zIndex: '10',
                        "&:hover": {
                            backgroundColor: "#EF6C00", // Cor ao passar o mouse (opcional)
                        },

                    },

                    "&.MuiButton-containedSecondary": {
                        backgroundColor: "#4CAF50", // Cor do botão "contained"
                        color: "#000", // Cor do texto (opcional)
                        zIndex: '10',
                        "&:hover": {
                            backgroundColor: "#2E7D32", // Cor ao passar o mouse (opcional)
                        },

                    },
                },
            },
        },
    },
});
// eslint-disable-next-line react/prop-types
function CustomButton({ ButtonText, showWhatsAppIcon, ButtonColor, link }) {
    return (
        <a href={link} target="_blank">
            <ThemeProvider theme={theme}>
                <Button
                    variant='contained'
                    color={ButtonColor === 'primary' ? 'primary' : 'secondary'}
                    startIcon={showWhatsAppIcon ? <WhatsAppIcon /> : null}
                >
                    {ButtonText}

                </Button>
            </ThemeProvider>
        </a>
    );
};

export default CustomButton;
