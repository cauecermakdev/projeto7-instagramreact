import React from "react";

export default function Usuario() {
    const [linkFoto, setLinkFoto] = React.useState("assets/img/catanacomics.svg")

    function mudaFoto(){
        const linkNovaFoto = prompt("digite novo link da foto");
        linkNovaFoto === null? setLinkFoto(linkNovaFoto):setLinkFoto(linkFoto);
    }

    return (    
        <div className="usuario">
            <img onClick = {mudaFoto} src={linkFoto} />
            <div className="texto">
                <strong>catanacomics</strong>
                Catana
            </div>
        </div>
    )
}