import { Typography } from "@mui/joy"
import { Stack } from "@mui/material"

const Home = () => {
  return(
    <>
      <Stack direction={{lg: "row",md: "row", xs: "column"}} spacing={"2em"} justifyContent={"space-evenly"}>
      
      <p style={{width: "100%", "white-space": "normal"}}>
      <Typography level="display2" variant="plain" >
        Welcome!
      </Typography > <br/>
      Meet the world of building permits management.<br/>
      After years of using building permits sites, I was finally given the opportunity to optimize the systems and create a website that meets the needs of the world of construction.<br/>
      It is a very dynamic world that advances, changes and improves at a very fast pace.<br/>
      The site allows the company to change the requirements of building permit requests at any given time. Which files must be attached to the permit, and the sections that need to be filled. You can simply click, update, and the building permit requirements will be changed.<br/>
      Sounds good?!<br/>
      Join us at BuildUp, click SignUp and all of this can come true today.
      </p>
      <img style={{paddingTop: "3em",height: "15em", "object-fit": "contain"}}
               src="https://storage.googleapis.com/buildup/buildupS.jpg" alt="buildup" border="0"/>

      </Stack>
    </>
  )
}

export default Home