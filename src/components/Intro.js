import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1",
            visible: true,
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey,
        });
    }

    render() {
        return (
            <div id="intro">
                <FractalTree></FractalTree>
                <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
              <span className="intro-name">{"xenia"}</span>
              {" here."}
          </span>
                </Typist>
                <FadeInSection>
                    <div className="intro-subtitle">I create stuff sometimes.</div>
                    <div className="intro-desc">
                        I'm a software engineer from San Francisco Bay Area, California. I'm passionate about
                        large-scale, high-impact products and have contributed to major feature launches for
                        industry-leading services, as well as applications.
                    </div>
                    <a
                        href="mailto:lacrimae@gmail.com"
                        className="intro-contact"
                    >
                        <EmailRoundedIcon></EmailRoundedIcon>
                        {" Say hi!"}
                    </a>
                </FadeInSection>
            </div>
        );
    }
}

export default Intro;
