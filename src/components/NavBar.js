import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  // const RenderLinks = links.map((name) => {
  //   return <a href={name}>{name}</a>;
  // })
  return <nav>{
    links.map(name => {
      // console.log(name)
      return <a key={name} href={"#" + name}>{name}</a>;
    })
    }</nav>;
}

export default NavBar;
