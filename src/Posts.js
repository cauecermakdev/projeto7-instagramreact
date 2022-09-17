import React from "react";

function Topo_post(props) {
  return(
    <div className="topo">
      <div className="usuario">
        <img src={props.img_user} />
        {props.user_name}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Post(props) {
  const [clicked, setClicked] = React.useState(false);

  function save(){
    //alert(!clicked);
    setClicked(!clicked);
  }

  return (

    <div className="post">
      <Topo_post img_user = {props.img_user} user_name = {props.user_name}/>

      <div className="conteudo">
        <img src={props.img_conteudo} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div onClick = {save} >
            <ion-icon  class = {clicked?"display-none":"md hydrated"} name ="bookmark-outline"></ion-icon>
            <ion-icon  class = {clicked?"md hydrated":"display-none"} name="bookmark"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.img_curtidas} />
          <div className="texto">
            Curtido por <strong>{props.txt_curtidas}</strong> e <strong>outras {props.n_curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>

  );

}

export default function Posts() {

  const array_posts = [
    {
      key:1,
      //topo
      img_user: "assets/img/meowed.svg",
      user_name: "meowed",

      //conteudo
      img_conteudo: "assets/img/gato-telefone.svg",

      //curtidas
      img_curtidas: "assets/img/respondeai.svg",
      txt_curtidas: "respondeai",
      n_curtidas: "101.523"

    },

    {
      key:2,
      //topo
      img_user: "assets/img/barked.svg",
      user_name: "barked",

      //conteudo
      img_conteudo: "assets/img/dog.svg",

      //curtidas
      img_curtidas: "assets/img/adorable_animals.svg",
      txt_curtidas: "adorable_animals",
      n_curtidas: "99.159"

    },


  ]

  return (
    <div className="posts" >
      {array_posts.map((post) => <Post img_user={post.img_user} user_name={post.user_name} img_conteudo={post.img_conteudo} img_curtidas={post.img_curtidas} txt_curtidas={post.txt_curtidas} n_curtidas={post.n_curtidas} />)}
    </div>

  );
}