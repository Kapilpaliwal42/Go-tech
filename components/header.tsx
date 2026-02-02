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
import Link from 'next/link';
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
  // Merged configuration: Using specialized objects for Projects/Tech Stack 
  // and Arrays for Services/Industries/Company.

  const navConfig = [
    {
      title: 'SERVICES',
      href: "/services",
      description: 'Explore our comprehensive range of development services designed to bring your digital products to life.',
      data: [
        {
          category: "Custom Software Development",
          links: [
            { label: "Startup MVP Development", href: "/services/startup-mvp-development" },
            { label: "Web Development", href: "/services/web-development" },
            { label: "Mobile App Development", href: "/services/mobile-app-development" },
          ],
        },
        {
          category: "Intelligent Automation",
          links: [
            { label: "AI & ML Development", href: "/services/ai-ml" },
            { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
          ],
        },
      ]
    },
    {
      title: "PROJECTS",
      href: "/projects",
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
      href: "/industries",
      description: "Discover industry-specific solutions tailored to meet your sector needs.",
      data: [
        {
          category: "Industries We Serve",
          links: [
            { label: "Fintech", href: "/industries/fintech" },
            { label: "Healthcare", href: "/industries/healthcare" },
            { label: "E-Commerce", href: "/industries/ecommerce" },
            { label: "Automotive", href: "/industries/automotive" },
          ]
        }
      ],
    },
    {
      title: "TECH STACK",
      href: "/tech-stack",
      description: "Dive into our arsenal of modern technologies to build scalable, robust applications.",
      data: {
        frontend: ["Angular", "React", "Next.js"],
        backend: ["Node", "PHP", ".NET", "Python"],
        mobile: ["iOS", "Android", "React Native", "Flutter"],
      },
    },
    { 
      title: "COMPANY", 
      href: "/company",
      description: "Learn more about our mission, values, and the talented team behind our success.", 
      data: [
        {
          category: "About",
          links: [
            { label: "Our Story", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Contact Us", href: "/contact" },
          ]
        }
      ] 
    },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.85)" : "white",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
        color: "slate.900"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", height: 80 }}>
          
          <Link href="/">
            <Image src="/GoTechLogo.png" alt="logo" width={65} height={40} priority />
          </Link>

          {/* DESKTOP NAV */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navConfig.map((page) => (
              <Dropdown
                key={page.title}
                menuTitle={page.title}
                description={page.description}
                href={page.href}
                data={page.data}
              />
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              variant="contained"
              sx={{ display: { xs: "none", md: "block" }, bgcolor: "#2b428c", fontWeight: 'bold', borderRadius: '8px' }}
            >
              BOOK A CALL
            </Button>

            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, color: "#2b428c" }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* MOBILE DRAWER */}
          <Drawer 
            anchor="right" 
            open={drawerOpen} 
            onClose={handleCloseNavMenu}
            PaperProps={{ sx: { width: '100%', maxWidth: 320 } }}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#2b428c' }}>Menu</Typography>
              <List>
                {navConfig.map((item) => {
                  const hasData = Array.isArray(item.data) ? item.data.length > 0 : Object.keys(item.data).length > 0;
                  
                  return (
                    <React.Fragment key={item.title}>
                      <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemButton 
                          onClick={() => hasData ? toggleMobileCategory(item.title) : handleCloseNavMenu()}
                          sx={{ borderRadius: '8px' }}
                        >
                          <ListItemText primary={item.title} primaryTypographyProps={{ fontWeight: '600' }} />
                          {hasData && (mobileExpanded === item.title ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
                        </ListItemButton>
                      </ListItem>

                      <Collapse in={mobileExpanded === item.title} timeout="auto" unmountOnExit>
                        <Box sx={{ pl: 2, pb: 2, bgcolor: '#f8faff', borderRadius: '8px' }}>
                          {/* Render logic for Tech Stack specifically in Mobile */}
                          {item.title === "TECH STACK" && !Array.isArray(item.data) ? (
                            <Box sx={{ p: 2 }}>
                              {Object.entries(item.data).map(([key, techs]) => (
                                <Box key={key} sx={{ mb: 1 }}>
                                  <Typography variant="caption" sx={{ fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase' }}>{key}</Typography>
                                  {(techs as string[]).map(t => <Typography key={t} sx={{ fontSize: '0.9rem', py: 0.5 }}>{t}</Typography>)}
                                </Box>
                              ))}
                            </Box>
                          ) : Array.isArray(item.data) ? (
                            item.data.map((cat) => (
                              <Box key={cat.category} sx={{ py: 1, pl: 2 }}>
                                <Typography variant="caption" sx={{ fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase' }}>{cat.category}</Typography>
                                {cat.links.map((link: any) => (
                                  <Link key={link.label} href={link.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Typography sx={{ py: 1, fontSize: '0.9rem' }}>{link.label}</Typography>
                                  </Link>
                                ))}
                              </Box>
                            ))
                          ) : null}
                        </Box>
                      </Collapse>
                    </React.Fragment>
                  );
                })}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;