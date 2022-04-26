/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
          Para utilizar el instrumento usted debe indicar su estilo de
          aprendizaje (Asimilador, Acomodador, Divergente, Convergente), su
          último promedio para matrícula y su sexo.
        </Box>
        <Box component="p">
          Todas las respuestas son buenas, ya que el fin del instrumento es
          describir cómo y no juzgar su habilidad para aprender.
        </Box>
        <Box component="p">
          Si aún no sabe su estilo de aprendizaje puede descubrirlo en el
          siguiente test:{' '}
          <Link to="/learning-style">Estilo de aprendizaje #1</Link>
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
            <Grid item >
                <TextField
                  sx={learningStyles.select}
                  name='learning-style'
                  select
                  label='Estilo de aprendizaje'
                  value={inputs[0]}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Asimilador</MenuItem>
                  <MenuItem value={2}>Acomodador</MenuItem>
                  <MenuItem value={3}>Divergente</MenuItem>
                  <MenuItem value={4}>Convergente</MenuItem>
                </TextField>
              </Grid>
              <Grid item >
                <TextField
                  sx={learningStyles.select}
                  name='learning-style'
                  label='Último promedio de matrícula'
                  value={inputs[0]}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item >
                <TextField
                  sx={learningStyles.select}
                  name='learning-style'
                  label='Último promedio de matrícula'
                  value={inputs[0]}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </TextField>
              </Grid>
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
