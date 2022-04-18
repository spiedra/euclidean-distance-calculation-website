import React, { useState } from 'react'
import { Box, Grid, MenuItem, Button, TextField } from '@mui/material'

import { learningStyles } from './styles'

import { words, defaultValues } from './consts'

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
    const ec =
      inputs.Receptivamente +
      inputs.Sintiendo +
      inputs.Aceptando +
      inputs.Intuitivamente +
      inputs.Orientado_al_presente +
      inputs.Aprendo_mas_de_la_experiencia

    const or =
      inputs.Ensayando +
      inputs.Observando +
      inputs.Observando_ +
      inputs.Reflexivamente +
      inputs.Aprendo_mas_de_la_observacion +
      inputs.Reservado

    const ca =
      inputs.Analiticamente +
      inputs.Pensando +
      inputs.Evaluando +
      inputs.Logicamente +
      inputs.Aprendo_mas_de_la_conceptualizacion +
      inputs.Racional

    const ea =
      inputs.Practicando +
      inputs.Haciendo +
      inputs.Activo +
      inputs.Pragmatico +
      inputs.Aprendo_mas_de_la_experimentacion +
      inputs.Abierto

    console.log(ec + ' ' + or + ' ' + ca + ' ' + ea)
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
        my="3rem"
        sx={{
          '& .MuiTextField-root': { width: '30ch' }
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid
          container
          justifyContent="center"
          spacing={{ xs: 0.5, sm: 0.5, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {words.map((item) => (
            <Grid item key={item.value}>
              <TextField
                sx={learningStyles.select}
                name={item.value}
                select
                label={item.label}
                value={inputs[item.value]}
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </TextField>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={learningStyles.button}
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  )
}

export default LearningStyle
