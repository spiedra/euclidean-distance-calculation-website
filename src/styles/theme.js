import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          fontSize: '0.875rem'
        }
      }
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5'
    },
    secondary: {
      main: '#f50057'
    }
  }
})
