import React from 'react'
import {Box,Typography,Card,Stack} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { DescriptionRounded,FormatAlignLeftOutlined,ChatRounded} from '@mui/icons-material'
const Homepage = () => {
  const navigate=useNavigate();
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'row'}}>
    <Box p={2}>
       <Typography variant='h4' mb={2} fontWeight="bold">
       Text Generation</Typography>
       <Card onClick={()=>navigate('/summary')}
        sx={{boxShadow:2,borderRadius:5,height:190,width:200,
        '&:hover':{border:2,boxShadow:0,borderColor:"primary.dark",
        curser:"pointer"}}}
       >
        <DescriptionRounded sx={{fontSize:80,color:'primary.main',
        mt:2,ml:2}}/>
      <Stack p={3} pt={0}>
        <Typography fontWeight="bold" variant='h5'>TEXT SUMMARY</Typography>
        <Typography variant='h6'>Summarize long text info into short sentence</Typography>
      </Stack>
       </Card>
    </Box>
    <Box p={2}>
       <Typography variant='h4' mb={2} fontWeight="bold">
       Paragraph</Typography>
       <Card onClick={()=>navigate('/paragraph')}
        sx={{boxShadow:2,borderRadius:5,height:190,width:200,
        '&:hover':{border:2,boxShadow:0,borderColor:"primary.dark",
        curser:"pointer"}}}
       >
        <FormatAlignLeftOutlined sx={{fontSize:80,color:'primary.main',mt:2,ml:2}}/>
      <Stack p={3} pt={0}>
        <Typography fontWeight="bold" variant='h5'>Paragraph</Typography>
        <Typography variant='h6'>Generate Paragraph</Typography>
      </Stack>
       </Card>
    </Box>
    <Box p={2}>
       <Typography variant='h4' mb={2} fontWeight="bold">
    AI ChatBOT</Typography>
       <Card onClick={()=>navigate('/chatbot')}
        sx={{boxShadow:2,borderRadius:5,height:190,width:200,
        '&:hover':{border:2,boxShadow:0,borderColor:"primary.dark",
        curser:"pointer"}}}
       >
        <ChatRounded sx={{fontSize:80,color:'primary.main',mt:2,ml:2}}/>
      <Stack p={3} pt={0}>
        <Typography fontWeight="bold" variant='h5'>Chat Bot</Typography>
        <Typography variant='h6'>Ask with Bot</Typography>
      </Stack>
       </Card>
    </Box>
    <Box p={2}>
       <Typography variant='h4' mb={2} fontWeight="bold">
     Javascript</Typography>
       <Card onClick={()=>navigate('/jsConverter')}
        sx={{boxShadow:2,borderRadius:5,height:190,width:200,
        '&:hover':{border:2,boxShadow:0,borderColor:"primary.dark",
        curser:"pointer"}}}
       >
        <ChatRounded sx={{fontSize:80,color:'primary.main',mt:2,ml:2}}/>
      <Stack p={3} pt={0}>
        <Typography fontWeight="bold" variant='h5'>JS Converter</Typography>
        <Typography variant='h6'>Translate INTO javascript</Typography>
      </Stack>
       </Card>
    </Box>
    <Box p={2}>
       <Typography variant='h4' mb={2} fontWeight="bold">
    AI Scifi Image</Typography>
       <Card onClick={()=>navigate('/scifiImage')}
        sx={{boxShadow:2,borderRadius:5,height:190,width:200,
        '&:hover':{border:2,boxShadow:0,borderColor:"primary.dark",
        curser:"pointer"}}}
       >
        <ChatRounded sx={{fontSize:80,color:'primary.main',mt:2,ml:2}}/>
      <Stack p={3} pt={0}>
        <Typography fontWeight="bold" variant='h5'>Scifi Image</Typography>
        <Typography variant='h6'>Generate Scifi Image</Typography>
      </Stack>
       </Card>
    </Box>
    </Box>
    </>
  )
}
export default Homepage;