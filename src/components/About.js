import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }

    render() {
        const one = (
            <p>
                I am currently a <b>Software Development Engineer</b> at
                <a href="https://www.wellsfargo.com/"> Wells Fargo</a>, working in the Consumer Deposit
                Account team. At the same time, I am constantly learning, and especially interested in Machine Learning.
            </p>
        );
        const two = (
            <p>
                I've worked in 3 countries and fluently speak 2 languages: English and Russian. I also play a lot of
                video games.
            </p>
        );

        const tech_stack = [
            "Typescript",
            "Java",
            "Angular",
            "Kafka",
            "Python",
            "Spring"
        ];

        return (
            <div id="about">
                <FadeInSection>
                    <div className="section-header ">
                        <span className="section-title">/ about me</span>
                    </div>
                    <div className="about-content">
                        <div className="about-description">
                            {[one]}
                            {"Here are some technologies I have been working with:"}
                            <ul className="tech-stack">
                                {tech_stack.map(function (tech_item, i) {
                                    return (
                                        <FadeInSection delay={`${i + 1}00ms`}>
                                            <li>{tech_item}</li>
                                        </FadeInSection>
                                    );
                                })}
                            </ul>
                            {[two]}
                        </div>
                        <div className="about-image">
                            <img alt="Xenia L" src={"/assets/me2.jpg"}/>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        );
    }
}

export default About;
