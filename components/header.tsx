"use client";
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Button,
  Collapse,
} from "@mui/material";
import Image from "next/image";
import { Menu as MenuIcon, ChevronDown, ChevronUp } from "lucide-react";
import Dropdown from "@/components/dropdown/Dropdown";

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleOpenNavMenu = () => setDrawerOpen(true);
  const handleCloseNavMenu = () => {
    setDrawerOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileCategory = (title: string) => {
    setMobileExpanded(mobileExpanded === title ? null : title);
  };

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ================= NAV CONFIG =================

  const navConfig = [
    
 {
      title: 'SERVICES',
      description: 'Explore our comprehensive range of development services designed to bring your digital products to life.',
      data: [
        {
          category: "Custom Software Development",
          links: [
            { label: "Startup MVP Development", href: "/services/startup-mvp-development" },
            { label: "Web Development", href: "/services/web-development" },
            { label: "Mobile App Development", href: "/services/mobile-app-development" },
            { label: "Android App Development", href: "/services/android-app-development" },
            { label: "Cross Platform App Development", href: "/services/cross-platform-app-development" },
            { label: "Search Engine Optimization in Udaipur", href: "/services/search-engine-optimization-in-udaipur" },
          ],
        },
        {
          category: "Intelligent Automation",
          links: [
            { label: "AI & ML Development", href: "/services/ai-ml" },
            {label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
            {label: "Machine Learning Consulting", href: "/services/machine-learning-consulting" },
            {label:"Digital Marketing Services", href:"/services/digital-marketing-services" },
          ],
        },
        {
          category: "Managed IT Services",
          links: [
            { label:"Cloud And DevOps Services", href:"/services/cloud-and-devops-services" },
          ]
        },
        {
          category: "Staff Augmentation",
          links: [
            { label:"Staff Augmentation", href:"/services/staff-augmentation" },
          ]
        },
        {
          category: "IT Consulting",
          links: [
            { label:"Discovery Phase", href:"/services/discovery-phase" },
          ]
        },
      ]
    },

    {
      title: "PROJECTS",
      description: "Check out our latest work and successful case studies.",
      data: {
        featured: {
          title: "Customer Service",
          subtitle: "The complete AI-powered solution",
          image: "/images/blogs/projectcard1.jpeg",
        },
        industries: [
          { label: "Doinsights", icon: "👥" },
          { label: "Theconnectmore", icon: "📩" },
          { label: "Thefluent", icon: "🎧" },
          { label: "Customgptaiq", icon: "🤖" },
        ],
        previewImage: "/images/blogs/projectcard2.jpeg",
      },
    },

    {
      title: "INDUSTRIES",
      description:
        "Discover industry-specific solutions tailored to meet your sector needs.",
      data: {
        industries: [
          { label: "Fintech", href: "/industries/fintech" },
          { label: "Healthcare", href: "/industries/healthcare" },
          { label: "E-Commerce", href: "/industries/ecommerce" },
        ],
      },
    },

    // ⭐ TECH STACK ADDED
    {
      title: "TECH STACK",
      description:
        "Dive into our arsenal of modern technologies, where we combine cutting-edge tools and proven frameworks to build scalable, robust, and innovative applications.",
      data: {
        frontend: ["Angular", "React"],
        backend: ["Node", "PHP", ".NET", "Java", "Python"],
        mobile: ["iOS", "Android", "React Native", "Flutter"],
      },
    },

    { title: "COMPANY", description: "Learn more about our mission, values, and the talented team behind our success. See how our commitment to excellence shapes every project we undertake", data: [] },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.7)" : "white",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>

          {/* LOGO */}
          <Image src="/GoTechLogo.png" alt="logo" width={65} height={40} />

          {/* DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navConfig.map((page) => (
              <Dropdown
                key={page.title}
                menuTitle={page.title}
                description={page.description}
                data={page.data}
              />
            ))}
          </Box>

          {/* CTA */}
          <Button
            variant="contained"
            sx={{ display: { xs: "none", md: "block" }, bgcolor: "#2b428c" }}
          >
            BOOK A CALL
          </Button>

          {/* MOBILE ICON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>

          {/* MOBILE DRAWER */}
          <Drawer open={drawerOpen} onClose={handleCloseNavMenu}>
            <Box sx={{ width: 280 }}>
              <List>
                {navConfig.map((item) => (
                  <React.Fragment key={item.title}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() =>
                          item.data && Object.keys(item.data).length > 0
                            ? toggleMobileCategory(item.title)
                            : handleCloseNavMenu()
                        }
                      >
                        <ListItemText primary={item.title} />
                        {item.data &&
                          Object.keys(item.data).length > 0 &&
                          (mobileExpanded === item.title ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          ))}
                      </ListItemButton>
                    </ListItem>

                    {/* TECH STACK MOBILE */}
                    {item.title === "TECH STACK" && (
                      <Collapse in={mobileExpanded === item.title}>
                        <Box sx={{ pl: 3 }}>
                          <Typography fontWeight="bold">Front-End</Typography>
                          {item.data.frontend.map((t: string) => (
                            <Typography key={t}>{t}</Typography>
                          ))}

                          <Typography mt={2} fontWeight="bold">Back-End</Typography>
                          {item.data.backend.map((t: string) => (
                            <Typography key={t}>{t}</Typography>
                          ))}

                          <Typography mt={2} fontWeight="bold">Mobile</Typography>
                          {item.data.mobile.map((t: string) => (
                            <Typography key={t}>{t}</Typography>
                          ))}
                        </Box>
                      </Collapse>
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
