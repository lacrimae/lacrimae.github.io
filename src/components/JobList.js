import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    if (isHorizontal) {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    } else {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    if (isHorizontal) {
        return {
            id: `full-width-tab-${index}`,
            "aria-controls": `full-width-tabpanel-${index}`
        };
    } else {
        return {
            id: `vertical-tab-${index}`
        };
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "theme.palette.background.paper",
        display: "flex",
        height: 300
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`
    }
}));

const JobList = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const experienceItems = {
        "Wells Fargo": {
            jobTitle: "Software Development Engineer @",
            duration: "APR 2023 - PRESENT",
            desc: [
                "Architected and developed a scalable, high-availability web application proficient in managing over 10,000 concurrent applicants daily, ensuring uninterrupted service delivery across both in-branch and online channels with minimal downtime.",
                "Fulfilled two roles, serving as both a software engineer and a quality assurance engineer, while simultaneously designing, implementing, authoring behavior-driven test case automation.",
                "Performed regression testing and conducted in-depth analysis of Splunk production logs to identify and rectify various critical bugs."
            ]
        },
        "Epam Systems": {
            jobTitle: "Software Engineer @",
            duration: "OCT 2021 - APR 2023",
            desc: [
                "As a fullstack software engineer, I've developed business logic, written unit and integration tests, and resolved bugs for both frontend and backend.",
                "Managed maintenance for up to 20 internal Google applications, increasing test coverage, implementing feature requests, and troubleshooting bugs.",
                "Participated in diverse projects using various technologies, including life-science and fin-tech.",
                "Worked for a Google account as a vendor for six months, gaining valuable experience with Google's infrastructure, including Critique, Piper/Fig, Buganizer, Blaze, and Spanner."
            ]
        },
        "Alfa Lab": {
            jobTitle: "Biotech Engineer @",
            duration: "FEB 2020 - APR 2020",
            desc: [
                "In my role as a Biotech Engineer, I managed the entire life cycle of PCR test creation, which included preparing raw materials, developing PCR tests, and maintaining meticulous laboratory records.",
                "My responsibilities involved closely monitoring every aspect of the PCR test creation process to guarantee that results were of the highest quality and accuracy.",
                "I also played a critical role in addressing and resolving any issues that arose during the development and testing stages, utilizing my problem-solving skills to enhance the efficiency and precision of PCR testing."
            ]
        },
        "A.N.Nesmeyanov Institute of Organoelement Compounds": {
            jobTitle: "Research Assistant @",
            duration: "JAN 2018 - AUG 2019",
            desc: [
                "I was responsible for conducting chemical synthesis and further purifying compounds using chromatography columns, preparing and analyzing samples for NMR and MASS spectrometry.",
                "Our team successfully secured an international grant aimed at funding the development of an organic compound with significant potential for cancer treatment."
            ]
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation={!isHorizontal ? "vertical" : null}
                variant={isHorizontal ? "fullWidth" : "scrollable"}
                value={value}
                onChange={handleChange}
                className={classes.tabs}
            >
                {Object.keys(experienceItems).map((key, i) => (
                    <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
                ))}
            </Tabs>
            {Object.keys(experienceItems).map((key, i) => (
                <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
                    <span className="joblist-job-company">{key}</span>
                    <div className="joblist-duration">
                        {experienceItems[key]["duration"]}
                    </div>
                    <ul className="job-description">
                        {experienceItems[key]["desc"].map(function (descItem, i) {
                            return (
                                <FadeInSection delay={`${i + 1}00ms`}>
                                    <li key={i}>{descItem}</li>
                                </FadeInSection>
                            );
                        })}
                    </ul>
                </TabPanel>
            ))}
        </div>
    );
};

export default JobList;
