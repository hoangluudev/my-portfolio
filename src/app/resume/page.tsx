"use client";

import React, { ReactNode } from "react";
import { Box, Container, Stack, Tab, Tabs } from "@mui/material";
import ComponentFadeIn from "@/components/ComponentEffect/ComponentFadeIn";
import About from "@/components/ResumeTabs/About";
import Education from "@/components/ResumeTabs/Education";
import Experience from "@/components/ResumeTabs/Experience";
import Skills from "@/components/ResumeTabs/Skills";

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

const tabList: TabListProps[] = [
  {
    title: "My experience",
    component: <Experience />,
  },
  {
    title: "My education",
    component: <Education />,
  },
  { title: "My skills", component: <Skills /> },
  { title: "About me", component: <About /> },
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
