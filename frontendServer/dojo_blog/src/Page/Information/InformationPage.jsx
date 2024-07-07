import Information from "../../Container/Info/Information"
import NaveBar from "../../NaveBare/NaveBar"


const InformationPage = () => {
  return (
    <div style={{display:"flex"}}>
            <NaveBar/>
        <div className="pag">
            <Information/>
        </div>
    </div>
  )
}

export default InformationPage