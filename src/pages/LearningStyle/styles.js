import { theme } from '../../styles/theme'

export const learningStyles = {
  instructionsContainer: {
    px: '2rem',
    pt: '1rem'
  },
  paragraph: {
    textAlign: 'justify'
  },
  select: {
    '& .MuiInputLabel-root': {
      color: 'black'
    },
    '& .MuiFormHelperText-root': {
      color: 'black'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.main
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black'
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main
      }
    }
  }
}