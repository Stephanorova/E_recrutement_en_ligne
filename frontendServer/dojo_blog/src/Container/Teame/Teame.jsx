import'./teame.css'

const Teame = () => {
  return (
    <div className='teame'>
      <h1>Employés</h1>
      <div className="ajouetr">
        <label>Ajouter</label>
      </div>
  <table class="table" style={{marginTop:"50px", marginLeft:"70px", width:"70vw"}}>
  <caption>List des employés</caption>
  <thead>
    <tr>
      <th scope="col">Identité</th>
      <th scope="col">Profil</th>
      <th scope="col">Nom</th>
      <th scope="col">Prénom</th>
      <th scope="col">Activité</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td><img src="/image/sise.PNG" className='images'/></td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td style={{display:"flex", gap:"1rem"}}>
        <button >Modifier</button>
        <button>Supprimer</button>
      </td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td><img src="/image/sise.PNG" className='images'/></td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td style={{display:"flex", gap:"1rem"}}>
        <button >Modifier</button>
        <button>Supprimer</button>
      </td>
    </tr>
    <tr>
      <td>Larry</td>
      <td><img src="/image/sise.PNG" className='images'/></td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td style={{display:"flex", gap:"1rem"}}>
        <button >Modifier</button>
        <button>Supprimer</button>
      </td>
    </tr>
    <tr>
      <td>Larry</td>
      <td><img src="/image/sise.PNG" className='images'/></td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td style={{display:"flex", gap:"1rem"}}>
        <button >Modifier</button>
        <button>Supprimer</button>
      </td>
    </tr>
    <tr>
      <td>Larry</td>
      <td><img src="/image/sise.PNG" className='images'/></td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td style={{display:"flex", gap:"1rem"}}>
        <button >Modifier</button>
        <button>Supprimer</button>
      </td>
    </tr>
  </tbody>
</table>
      </div>
  )
}

export default Teame