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
      key:1,
      nome_img: "assets/img/9gag.svg",
      txt_img: "9gag"
    },

    {
      key:2,
      nome_img: "assets/img/meowed.svg",
      txt_img: "meowed"
    },

    {
      key:3,
      nome_img: "assets/img/barked.svg",
      txt_img: "barked"
    },

    {
      key:4,
      nome_img: "assets/img/nathanwpylestrangeplanet.svg",
      txt_img: "nathanwpylestrangeplanet"
    },

    {
      key:5,
      nome_img: "assets/img/wawawicomics.svg",
      txt_img: "wawawicomics"
    },

    {
      key:6,
      nome_img: "assets/img/respondeai.svg",
      txt_img: "respondeai"
    },

    {
      key:7,
      nome_img: "assets/img/filomoderna.svg",
      txt_img: "filomoderna"
    },

    {
      key:8,
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

