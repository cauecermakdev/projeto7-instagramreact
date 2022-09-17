function Sugestao(props) {

  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.user_img} />
        <div className="texto">
          <div className="nome">{props.user_name}</div>
          <div className="razao">{props.reason}</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );

}

export default function Sugestoes() {
  const array_sugestao = [
    {
      key:1,
      user_img:"assets/img/bad.vibes.memes.svg",
      user_name:"bad.vibes.memes",
      reason:"Segue você"
    },

    {
      key:2,
      user_img:"assets/img/chibirdart.svg",
      user_name:"chibirdart",
      reason:"Segue você"
    },

    {
      key:3,
      user_img:"assets/img/razoesparaacreditar.svg",
      user_name:"razoesparaacreditar",
      reason:"Novo no Instagram"
    },
    {
      key:4,
      user_img:"assets/img/smallcutecats.svg",
      user_name:"smallcutecats",
      reason:"Segue você"
    }

  ]

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
        {array_sugestao.map((sugestao) =>  <Sugestao user_img = {sugestao.user_img} user_name = {sugestao.user_name} reason = {sugestao.reason} />)}
    </div>
    
  );
}