import React from "react";
import "../styles/header.scss";

// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-inner">
        <div className="title">
          <h1 className="header-Title">
            <a href="#" className="title-link">
              T-Bugg
            </a>
          </h1>
        </div>
        <div className="icons">
          <a
            href="https://github.com/HaktanAlbayrak"
            className="github-link"
            target="_blank"
          >
            <GitHubIcon className="github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/haktan-albayrak-55539422b/"
            className="linkedin-link"
            target="_blank"
          >
            <LinkedInIcon className="linkedin-icon" />
          </a>
          <a
            href="https://twitter.com/Haktan_Albyrk"
            className="twitter-link"
            target="_blank"
          >
            <TwitterIcon className="twitter-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
