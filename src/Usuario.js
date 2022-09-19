import React from "react";

export default function Usuario() {

    const [linkFoto, setLinkFoto] = React.useState("assets/img/catanacomics.svg");
    const [nomeUsuario, setNomeUsuario] = React.useState("catanacomics");
    const [nomeRealUsuario, setNomeRealUsuario] = React.useState("Catana");

    const obj_usuario = [
        {
            nomeUsuario: nomeUsuario,
            nomeRealUsuario: nomeRealUsuario,
            linkFoto:linkFoto
        }
    ]


    function User(props) {
        return (
            <div>
                <div>
                    <img onClick={mudaFoto} src={props.linkFoto} />
                    <div className="texto">
                        <strong>{props.nomeUsuario}</strong>
                        {props.nomeRealUsuario}
                    </div>
                </div>

                <div onClick={mudaNomeUsuario}>
                    <ion-icon name="create-outline"></ion-icon>
                </div>
            </div>
        );
    }


    function mudaFoto() {
        let linkNovaFoto = prompt("digite novo link da foto");
        linkNovaFoto !== "" ? setLinkFoto(linkNovaFoto) : setLinkFoto(linkFoto)
        /* setLinkFoto(linkNovaFoto); */
    }


    function mudaNomeUsuario() {
        const new_nomeUsuario = prompt("Digite um novo userName:");
        const new_nomeRealUsuario = prompt("Digite o novo nome(real) do usuário:");
        
        new_nomeUsuario !== "" ? setNomeUsuario(new_nomeUsuario): setNomeUsuario(nomeUsuario);
        new_nomeRealUsuario !== "" ? setNomeRealUsuario(new_nomeRealUsuario): setNomeRealUsuario(nomeRealUsuario);
/*         setNomeRealUsuario(new_nomeRealUsuario);
        setNomeUsuario(new_nomeUsuario); */
    }

    return (
        <div className="usuario">
            {obj_usuario.map((usuario) => <User linkFoto={usuario.linkFoto} nomeUsuario={usuario.nomeUsuario} nomeRealUsuario={usuario.nomeRealUsuario} />)}
        </div>
    )
}