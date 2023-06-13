import React from 'react'
import { Box,Typography,Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box
      mt="80px"
      color="#fff3f4"
    >
      <Stack
        gap="40px"
        alignItems="center"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" width="50px" height="40px"/>
        <Typography variant='h5' pb="40px" mt="10px" color="#000">
          Made with ❤️ by Satwik
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer