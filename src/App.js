import React from 'react'
import { Outlet } from 'react-router-dom'

import Box from '@mui/material/Box'

function App () {
  return (
    <>
      <Box component="main">
        <Outlet />
      </Box>
    </>
  )
}

export default App
