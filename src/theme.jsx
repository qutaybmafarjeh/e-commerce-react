import { createTheme } from "@mui/material";


  
const getTheme =(mode)=>{
  return createTheme({
   
   palette:{
    mode:mode,
    primary:{
        main:'#212121'
    },
    components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  },

   }
})
 
}

export default getTheme;