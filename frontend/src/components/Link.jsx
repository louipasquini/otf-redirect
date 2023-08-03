import React from "react";
import { useState } from "react";
import { QRCodeCanvas } from 'qrcode.react';
import "./Link.css"

const Link = ({ link }) => {
    const [closeTab,setCloseTab] = useState("complexItens")

    const clickTab = (e) => {
        if (closeTab === "complexItens") {
            setCloseTab("complexItens close")
        } else {
            setCloseTab("complexItens")
        }
    }

    const linkTela = `otfshort.com/${link.short}`

    const qrcode = (
        <QRCodeCanvas
        value={linkTela}
        size={190}
        bgColor={"#f0f0f0"}
        level={"H"}
        />
    )
    
    return (
    <div className="linkContainer">
        <div className="itens" onClick={clickTab}>
            <div className="item">
                <p>Link</p><h2>{linkTela}</h2>
            </div>
            <hr />
            <div className="item">
                <p>Cliente</p><h2>{link.cliente}</h2>
            </div>
            <hr />
            <div className="item">
                <p>Projeto</p><h2>{link.projeto}</h2>
            </div>
            <hr />
            <div className="item">
                <p>Acessos</p><h2>{link.acessos}</h2>
            </div>
        </div>
        <div className={closeTab}>
                <div className="cILeft">{qrcode}</div>
                <div className="cIMiddle">
                    <p>Últimos acessos</p>
                    <p>2023-08-02T06:32:28.000Z</p>
                    <p>2023-08-02T06:32:28.000Z</p>
                    <p>2023-08-02T06:32:28.000Z</p>
                    <p>2023-08-02T06:32:28.000Z</p>
                    <p>2023-08-02T06:32:28.000Z</p>
                    <p>2023-08-02T06:32:28.000Z</p>
                    <p>2023-08-02T06:32:28.000Z</p>
                </div>
                <div className="cIRight">
                    <div className="horario">
                        <p>Horário de maior acesso:</p>
                        <h1>6:32</h1>
                    </div>
                    <div className="outrosLinks">
                        <p>Links do mesmo projeto</p>
                        <p>otfshort.com/teste-link2</p>
                        <p>otfshort.com/teste-link3</p>
                        <p>otfshort.com/teste-link4</p>
                    </div>
                </div>
        </div>
    </div>
    )

}

export default Link;