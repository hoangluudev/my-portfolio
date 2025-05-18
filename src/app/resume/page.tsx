"use client";
import ComponentFadeIn from "@/components/ComponentEffect/ComponentFadeIn";
import About from "@/components/ResumeTabs/About";
import Education from "@/components/ResumeTabs/Education";
import Experience from "@/components/ResumeTabs/Experience";
import Skills from "@/components/ResumeTabs/Skills";
import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql, SiTypescript, SiVite } from "react-icons/si";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
type TabListProps = {
  title: string;
  component: ReactNode;
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...otherProps } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: "100%" }}
      {...otherProps}
    >
      {value === index && <Box sx={{ width: "100%" }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const experienceInfo = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
        exercitationem! Animi asperiores ratione aperiam rem, excepturi quod
        perspiciatis delectus eligendi! Quo iste porro inventore corporis
        veritatis officia impedit omnis eveniet!`,
  items: [
    {
      name: "MaskCodex",
      position: "Front-End Developer Intern",
      duration: "2020 - Present",
    },
    {
      name: "MaskCodex",
      position: "Front-End Developer Intern",
      duration: "2022 - Present",
    },
  ],
};
const educationInfo = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
        exercitationem! Animi asperiores ratione aperiam rem, excepturi quod
        perspiciatis delectus eligendi! Quo iste porro inventore corporis
        veritatis officia impedit omnis eveniet!`,
  items: [
    {
      name: "Information Technology College HCM",
      degree: "Associate Degree in Information Technology",
      duration: "09/2020 - 09/2023",
    },
    {
      name: "Onschool Bootcamp",
      degree: "Full Stack Javascript Web Development",
      duration: "11/2023 - Present",
    },
  ],
};
const skillInfo = {
  title: "My skills",
  description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
        exercitationem! Animi asperiores ratione aperiam rem, excepturi quod
        perspiciatis delectus eligendi! Quo iste porro inventore corporis
        veritatis officia impedit omnis eveniet!`,
  items: [
    {
      icon: FaHtml5,
      name: "HTML5",
    },
    {
      icon: FaCss3,
      name: "CSS3",
    },
    {
      icon: FaJs,
      name: "Javascript",
    },
    {
      icon: SiTypescript,
      name: "Typescript",
    },
    {
      icon: FaReact,
      name: "React JS",
    },
    {
      icon: SiVite,
      name: "Vite",
    },
    {
      icon: RiNextjsFill,
      name: "Next.JS",
    },
    {
      icon: RiTailwindCssFill,
      name: "TailwindCss",
    },
    {
      icon: FaNode,
      name: "Node.JS",
    },
    {
      icon: FaFigma,
      name: "Figma",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
    },
    {
      icon: SiMysql,
      name: "MySQL",
    },
  ],
};
const aboutInfo = {
  title: "About me",
  description: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
        exercitationem! Animi asperiores ratione aperiam rem, excepturi quod
        perspiciatis delectus eligendi! Quo iste porro inventore corporis
        veritatis officia impedit omnis eveniet!`,
  items: [
    {
      fieldName: "Name",
      fieldValue: "Luu Nguyen",
    },
    {
      fieldName: "Phone",
      fieldValue: "03123456",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Telegram",
      fieldValue: "@hoangluu2607",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnamese",
    },
    {
      fieldName: "Email",
      fieldValue: "hoangluu.devx@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English (Basic), Vietnamese (Native)",
    },
  ],
};

const tabList: TabListProps[] = [
  {
    title: experienceInfo.title,
    component: <Experience data={experienceInfo} />,
  },
  {
    title: educationInfo.title,
    component: <Education data={educationInfo} />,
  },
  { title: skillInfo.title, component: <Skills data={skillInfo} /> },
  { title: aboutInfo.title, component: <About data={aboutInfo} /> },
];

const ResumePage: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section>
      <Container>
        <ComponentFadeIn>
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              height: "100%",
              gap: 3,
            }}
          >
            <Tabs
              orientation="vertical"
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              scrollButtons={false}
              allowScrollButtonsMobile={false}
              slotProps={{
                indicator: {
                  style: {
                    display: "none",
                  },
                },
              }}
              sx={{
                "& .MuiTabs-flexContainer": {
                  rowGap: 2,
                },
                width: "100%",
                maxWidth: { xs: "100%", md: "250px" },
              }}
            >
              {tabList.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    label={item.title}
                    {...a11yProps(index)}
                    sx={{
                      width: "100%",
                      color: "#fff",
                      background: "#27272c",
                      borderRadius: "5px",
                      textTransform: "capitalize",
                      "&:hover": {
                        color: "#000",
                        background: "#02FC99",
                      },
                      "&.Mui-selected": {
                        color: "#000",
                        background: "#02FC99",
                        borderRight: "none",
                      },
                    }}
                  />
                );
              })}
            </Tabs>
            {tabList.map((item, index) => {
              return (
                <TabPanel key={index} value={value} index={index}>
                  {item.component}
                </TabPanel>
              );
            })}
          </Stack>
        </ComponentFadeIn>
      </Container>
    </section>
  );
};

export default ResumePage;
