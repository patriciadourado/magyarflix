import React from "react";
import FooterMagyar from "./styles";
import LogoFlix from "../Logo";
import LinkMagyar from "../LinkMagyar";

function FooterOpen() {
  return (
    <FooterMagyar>
      <LogoFlix />
      <p>
        About Hungary by &nbsp;
        <LinkMagyar
          href="https://patriciadourado.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Patricia Dourado
        </LinkMagyar>
      </p>
    </FooterMagyar>
  );
}

export default FooterOpen;
