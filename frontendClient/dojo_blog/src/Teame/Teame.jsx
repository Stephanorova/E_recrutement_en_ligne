import './apropos.css'



const Teame = () => {
  





  return (
    <div className='apropos'>
       <div className="teame">
          <div className="heade">
          <div className="deve">
            <span>12</span>
          <span>Développeur</span>
          </div>
          <div className="comerce">
          <span>18</span>
          <span>Commercial</span>
          </div>
          <div className="gestion">
          <span>11</span>
          <span>Gestionaire</span>
          </div>
          <div className="securisation">
          <span>6</span>
          <span>Sécurité</span>
          </div>
        </div>

  <table class="table" style={{marginTop:"50px", marginLeft:"20px"}}>
  <caption>List des employés</caption>
  <thead>
    <tr>
      <th scope="col">Identité</th>
      <th scope="col">Profil</th>
      <th scope="col">Nom</th>
      <th scope="col">Prénom</th>
      <th scope="col">Activité</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td><img src="/image/sise.PNG" className='images'/></td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td><img src="/image/sise.PNG" className='images'/></td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>Larry</td>
      <td><img src="/image/sise.PNG" className='images'/></td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td>Larry</td>
      <td><img src="/image/sise.PNG" className='images'/></td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td>Larry</td>
      <td><img src="/image/sise.PNG" className='images'/></td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
       </div>     
      </div>
  )
}

export default Teame