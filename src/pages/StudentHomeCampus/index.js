import React, { useState } from 'react'
import { Box, Grid, MenuItem, Button, TextField } from '@mui/material'

import { learningStyles } from './styles'

import { words, defaultValues } from './consts'

import { getSumOfColumns } from '../../utils/getSumOfColumns'
import { createInputs } from '../../services/LearningStyle1/Post'
import ModalResponse from '../../components/ModalResponse'

const LearningStyle = () => {
  const [inputs, setInputs] = useState(defaultValues)
  const [result, setResult] = useState({ result: '' })
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    await createInputs(getSumOfColumns(inputs)).then((response) => {
      setResult(response)
      setOpen(true)
    })
  }

  return (
    <>
      <Box sx={learningStyles.instructionsContainer}>
        <h1>Instrucciones</h1>
        <Box component="p" sx={learningStyles.paragraph}>
          Para utilizar el instrumento usted debe conceder una calificación alta
          a aquellas palabras que mejor caracterizan la forma en que usted
          aprende, y una calificación baja a las palabras que menos caracterizan
          su  <a href='https://9brains.es/cuatro-estilos-de-aprendizaje/' target='_blank' rel="noreferrer">estilo de aprendizaje</a>.
        </Box>
        <Box component="p" sx={learningStyles.paragraph}>
          Le puede ser difícil seleccionar las palabras que mejor describen su
          estilo de aprendizaje, ya que no hay respuestas correctas o
          incorrectas.
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
          correspondencia con su estilo; a la siguiente un 2, y un 1 a la
          palabra que menos caracteriza su estilo. Tenga cuidado de ubicar un
          número distinto al lado de cada palabra en la misma línea.
        </Box>
        <Box
          component="form"
          my="3rem"
          sx={{
            '& .MuiTextField-root': {
              my: 1,
              width: { xs: '25ch', sm: '30ch' }
            }
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

      <ModalResponse
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        title="Estilo de aprendizaje"
        description={`Su tipo de aprendizaje es: ${result.result}`}
      />
    </>
  )
}

export default LearningStyle
