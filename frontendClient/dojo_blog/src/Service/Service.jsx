import  './service.css'
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import {Typography} from "@mui/material"
import ExpandMoreIcons from "@mui/icons-material/ExpandMore"

const Service = () => {

  return (
    <div className='serv'>
      <div className="calandar">
      <div className="operateur">
         <div className="cadre1">
             <span>Réalisation des application</span>
         </div>
         <div className="cadre2">
         <span>Livraison</span>
          </div>
          <div className="cadre3">
          <span>Charger vos Client en ligne</span>
          </div>
          <div className="cadre4">
          <span>Vente de produit</span>
          </div>
      </div>
      <div className="calendrier">
      <Accordion className='expa' defaultExpanded>
        <AccordionSummary   expandIcon={<ExpandMoreIcons style={{color:"black"}}/> }>
          <Typography style={{color:"green" ,fontWeight:"bold"}} >
            Réalisation des application
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <span>Nous pouvons créer des application web ou mobile pour facilte votre travaille dans votre entreprise ou bien de site web pour presenté 
              votre activité, parcequ'on ont de membre  experimenté qui a le patient de réaliser ce que vous voulez. Alors concater nous vite si avez de service.
               </span>
        </AccordionDetails>
      </Accordion>
      <Accordion className='expa' defaultExpanded>
        <AccordionSummary   expandIcon={<ExpandMoreIcons style={{color:"black"}}/> }>
          <Typography  style={{color:"red",fontWeight:"bold"}}>
             Livrason
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <span> Notre livraison est très rapide et ponctuelle dans le contrat de notre dideline.
               </span>
        </AccordionDetails>
      </Accordion>
      <Accordion className='expa' defaultExpanded>
        <AccordionSummary   expandIcon={<ExpandMoreIcons style={{color:"black"}}/> }>
          <Typography  style={{color:"blue",fontWeight:"bold"}}>
            Charger client
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <span>Nous pouvons charger votre client en ligne, il y a de team experimenté qui peut vous aindez pour charger votre client 
               </span>
        </AccordionDetails>
      </Accordion>
      <Accordion className='expa' defaultExpanded>
        <AccordionSummary   expandIcon={<ExpandMoreIcons style={{color:"black"}}/> }>
          <Typography   style={{color:"sienna",fontWeight:"bold"}}>
            Vendeur
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <span>Nous pouvons vendre votre produit, on est des client fidel a nous, et aussi des magasins partous dans le monde pour lancé votre produit dans le marché mondiale, alors 
             vous pouvez nous contacter si vous avez besoin de satisfaction. 
               </span>
        </AccordionDetails>
      </Accordion>
      </div>
      </div>
    </div>
  )
}

export default Service