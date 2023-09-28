import { Link, Typography } from "@mui/material"


// &nbsp; => space

const HomeParagraph = () => {
  return (
    <Typography 
      paragraph={true} 
      align="justify" 
      color={'primary'} 
      variant="caption" 
    >
      Meet BuildUp! Your building permit manager, 
      that meets the needs of the construction world.
      <br/>
      <br/>
      It is a very dynamic world that advances, 
      changes and improves at a very fast pace.
      The site allows you to change your company's building permit requirements, 
      at any given time.
      <br/>
      With the "building permit template" - 
      you can update as many times as you need 
      which files to attach, 
      and which sections should be filled in, 
      according to the needs of the company.
      <br/>
      <br/>
      Sounds good?!
      <br/>
      Click &nbsp;

      <Link href="/signup" variant="caption" color="primary">
        <b>
          SignUp
        </b>
      </Link>

      &nbsp; and Join us for free.
    </Typography>
  )
}

export default HomeParagraph