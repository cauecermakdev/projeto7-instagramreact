import React from "react";

export default function Usuario() {

    const [linkFoto, setLinkFoto] = React.useState("assets/img/catanacomics.svg");
    const [nomeUsuario, setNomeUsuario] = React.useState("catanacomics");
    const [nomeRealUsuario, setNomeRealUsuario] = React.useState("Catana");

    function mudaFoto(){
        let linkNovaFoto = prompt("digite novo link da foto");
        /* linkNovaFoto != null? setLinkFoto(linkNovaFoto):setLinkFoto(linkFoto); */
         setLinkFoto(linkNovaFoto);   
    }


    function mudaNomeUsuario(){
        const new_nomeUsuario = prompt("Digite um novo userName:");
        const new_nomeRealUsuario = prompt("Digite o novo nome(real) do usuário:");
        setNomeRealUsuario(new_nomeRealUsuario);
        setNomeUsuario(new_nomeUsuario);
    }

    return (    
        <div className="usuario">
            <div>
                <img onClick = {mudaFoto} src={linkFoto} />
                <div className="texto">
                    <strong>{nomeUsuario}</strong>
                    {nomeRealUsuario}
                </div>
            </div>

            <div onClick={mudaNomeUsuario}>
                <ion-icon name="create-outline"></ion-icon>
            </div>
        </div>
    )
}