import React from "react";
import Link from "./Link";
import { useState } from "react";

const Links = ({ links }) => {

    return (
    <>
        {links.map((link) => (<Link link={link}/>))}
    </>
    )
}

export default Links;