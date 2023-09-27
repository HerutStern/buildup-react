import { Stack, Typography } from "@mui/material"
import './Home.css'
import HomeParagraph from "../../Text/HomeParagraph/HomeParagraph"


const Home = () => {
  return(
    <Stack 
      direction={{lg: "row", md: "row", xs: "column"}} 
      spacing={"2%"} 
      justifyContent={"space-evenly"}
    >
      <Stack 
        direction={'column'} 
        alignItems={{lg: 'flex-start', xs:'center'}}
      >
        {/* Title */}
        <Typography 
          color={'primary'} 
          paragraph={true} 
          variant={"h3"} 
          className="welcome"
        >
        Welcome!
        </Typography> <br/>

        {/* Introductory paragraph */}
        <HomeParagraph/>
      </Stack>
      
      {/* Logo */}
      <img 
        className="logo-home"
        src="https://storage.googleapis.com/buildup/buildupS.jpg" 
        alt="buildup" 
        border="0"
      />
    </Stack>
  )
}

export default Home