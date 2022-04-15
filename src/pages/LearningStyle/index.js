/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {
  Box,
  Container,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Button,
  FormLabel,
  TextField
} from '@mui/material'
import { learningStyles } from './styles'

const defaultValues = {}

const words = [
  {
    word: 'Discerniendo'
  },
  {
    word: 'Receptivamente'
  },
  {
    word: 'Sintiendo'
  },
  {
    word: 'Aceptando'
  },
  {
    word: 'Intuitivamente'
  },
  {
    word: 'Abstracto'
  },
  {
    word: 'Orientado al presente'
  },
  {
    word: 'Aprendo más de la experiencia'
  },
  {
    word: 'Emotivo'
  },
  {
    word: 'Ensayado'
  },
  {
    word: 'Relacionando'
  },
  {
    word: 'Arriesgado'
  },
  {
    word: 'Productivamente'
  },
  {
    word: 'Observando'
  },
  {
    word: 'Reflexivamente'
  },
  {
    word: 'Aprendo más de la observación'
  },
  {
    word: 'Reservado'
  },
  {
    word: 'Involucrándome'
  },
  {
    word: 'Analíticamente'
  },
  {
    word: 'Pensando'
  },
  {
    word: 'Evaluando'
  },
  {
    word: 'Lógicamente'
  },
  {
    word: 'Concreto'
  },
  {
    word: 'Orientado hacia el futuro'
  },
  {
    word: 'Aprendo más de la conceptualización'
  },
  {
    word: 'Racional'
  },
  {
    word: 'Practicando'
  },
  {
    word: 'Impaciarlmente'
  },
  {
    word: 'Haciendo'
  },
  {
    word: 'Con Cautela'
  },
  {
    word: 'Cuestionando'
  },
  {
    word: 'Activo'
  },
  {
    word: 'Pragmático'
  },
  {
    word: 'Aprndo más de la experimentación'
  },
  {
    word: 'Abierto'
  }
]

const options = [
  {
    value: 1,
    label: '1'
  },
  {
    value: 2,
    label: '2'
  },
  {
    value: 3,
    label: '3'
  },
  {
    value: 4,
    label: 4
  }
]
const LearningStyle = () => {
  const [inputs, setInputs] = useState(defaultValues)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
  }

  return (
    <Box sx={learningStyles.instructionsContainer}>
      <h1>Instrucciones</h1>
      <Box component="p" sx={learningStyles.paragraph}>
        Para utilizar el instrumento usted debe conceder una calificación alta a
        aquellas palabras que mejor caracterizan la forma en que usted aprende,
        y una calificación baja a las palabras que menos caracterizan su estilo
        de aprendizaje.
      </Box>
      <Box component="p" sx={learningStyles.paragraph}>
        Le puede ser difícil seleccionar las palabras que mejor describen su
        estilo de aprendizaje, ya que no hay respuestas correctas o incorrectas.
      </Box>
      <Box component="p">
        Todas las respuestas son buenas, ya que el fin del instrumento es
        describir cómo y no juzgar su habilidad para aprender.
      </Box>
      <Box component="p" sx={learningStyles.paragraph}>
        De inmediato encontrará nueve series o líneas de cuatro palabras cada
        una. Ordene de mayor a menor cada serie o juego de cuatro palabras que
        hay en cada línea, ubicando 4 en la palabra que mejor caracteriza su
        estilo de aprendizaje, un 3 en la palabra siguiente en cuanto a la
        correspondencia con su estilo; a la siguiente un 2, y un 1 a la palabra
        que menos caracteriza su estilo. Tenga cuidado de ubicar un número
        distinto al lado de cada palabra en la misma línea.
      </Box>
        <Box
          component="form"
          my='3rem'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '20ch' }
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid
            container
            justifyContent='center'
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {words.map((item) => (
              <Grid item key={item.word}>
                <TextField
                  sx={learningStyles.select}
                  id={item.word}
                  name={item.word}
                  select
                  label={item.word}
                  value={inputs[item.word] || '1'}
                  onChange={handleChange}
                >
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
    </Box>
  )
}

export default LearningStyle