import { Stack, Typography } from "@mui/material"

const Home = () => {
  return(
    <>
      <Stack direction={{lg: "row", md: "row", xs: "column"}} spacing={"2%"} justifyContent={"space-evenly"}>
      <Stack direction={'column'} alignItems={{lg: 'flex-start', xs:'center'}}>
        <Typography color={'primary'} paragraph={true} variant={"h3"} style={{'fontWeight': 800}}>
        Welcome!
      </Typography> <br/>
      <Typography color={'primary'} variant="caption"  >
      Meet the world of building permits management.<br/>
      After years of using building permits sites, I was finally given the opportunity to optimize the systems and create a website that meets the needs of the world of construction.<br/>
      It is a very dynamic world that advances, changes and improves at a very fast pace.<br/>
      The site allows the company to change the requirements of building permit requests at any given time. Which files must be attached to the permit, and the sections that need to be filled. You can simply click, update, and the building permit requirements will be changed.<br/>
      Sounds good?!<br/>
      Join us at BuildUp, click SignUp and all of this can come true today.
      </Typography>
      </Stack>
      
      <img style={{paddingTop: "7%",height: "18em", "object-fit": "contain"}}
               src="https://storage.googleapis.com/buildup/buildupS.jpg" alt="buildup" border="0"/>

      </Stack>
    </>
  )
}

export default Home