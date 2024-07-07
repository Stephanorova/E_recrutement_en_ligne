import'./NaveTop.css'
import GithubIcons from "@mui/icons-material/GitHub"
import LinkedInIcons from "@mui/icons-material/LinkedIn"
import FacebookIcons from "@mui/icons-material/Facebook"
import EmailIcons from "@mui/icons-material/Email"

function NaveTop() {
  return (
    <div className='navetop'>
       <h1><span style={{
       fontFamily:"-moz-initial",
       fontWeight:"bold"}}>ST</span>
       <span style={{color:"tomato",
       fontSize:"20px",
       fontWeight:"bold",
       fontFamily:"-moz-initial"}}>EP</span>
       <span style={{fontFamily:"-moz-initial",
        fontWeight:"bold"}}>HA</span>
        <span style={{color:"tomato",
         fontSize:"20px",
         fontFamily:"-moz-initial",
         fontWeight:"bold"}}>NO</span></h1>
       <div  className="contact">
        <span style={{color:"white",display:"flex",
         justifyContent: "space-between",
          gap:"0.5rem"
          }}>
           <a href="https://mail.google.com"><EmailIcons style={{fontSize:"20px", color:"white"}}/></a>
           <a href="https://github.com/stephanorakotozandry"><GithubIcons  style={{fontSize:"20px",color:"white"}}/></a>
           <a href="https://www.linkedin.com/in/rovaniana-rakotozandry-5336612a1/"><LinkedInIcons style={{fontSize:"20px",color:"white"}}/></a>
           <a href="https://www.facebook.com/Niaina_Stephano"><FacebookIcons style={{fontSize:"20px",color:"white"}}/></a>
        </span>
       </div>
    </div>
  )
}

export default NaveTop