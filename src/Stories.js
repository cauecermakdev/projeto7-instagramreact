function Story(props) {
  return (
    <div class="story">
      <div className = "imagem">
        <img src={props.link}/>
      </div>
      <div className="usuario">
        {props.txt}
      </div>
    </div>
  );

}


export default function Stories() {
  const arrow_story = [
    {
      nome_img: "assets/img/9gag.svg",
      txt_img: "9gag"
    },

    {
      nome_img: "assets/img/meowed.svg",
      txt_img: "meowed"
    },

    {
      nome_img: "assets/img/barked.svg",
      txt_img: "barked"
    },

    {
      nome_img: "assets/img/nathanwpylestrangeplanet.svg",
      txt_img: "nathanwpylestrangeplanet"
    },

    {
      nome_img: "assets/img/wawawicomics.svg",
      txt_img: "wawawicomics"
    },

    {
      nome_img: "assets/img/respondeai.svg",
      txt_img: "respondeai"
    },

    {
      nome_img: "assets/img/filomoderna.svg",
      txt_img: "filomoderna"
    },

    {
      nome_img: "assets/img/memeriagourmet.svg",
      txt_img: "memeriagourmet"
    },

  ];


  return (
    <div className="stories">
      {arrow_story.map((story) => <Story link={story.nome_img} txt={story.txt_img} />)};

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>

    </div>
  );
}

