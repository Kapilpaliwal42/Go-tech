"use client";
import * as React from 'react';
import { 
  AppBar, Box, Toolbar, IconButton, Typography, Drawer, List, 
  ListItem, ListItemButton, ListItemText, Container, Button, 
  Collapse 
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Menu as MenuIcon, ChevronDown, ChevronUp } from 'lucide-react';
import Dropdown from "@/components/dropdown/Dropdown";

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileExpanded, setMobileExpanded] = React.useState(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleOpenNavMenu = () => setDrawerOpen(true);
  const handleCloseNavMenu = () => {
    setDrawerOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileCategory = (title) => {
    setMobileExpanded(mobileExpanded === title ? null : title);
  };

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navConfig = [
    {
      title: 'SERVICES',
      description: 'Explore our comprehensive range of development services designed to bring your digital products to life.',
      href: "/services",
      data: [
        {
          category: "Custom Software Development",
          links: [
            { label: "Startup MVP Development", href: "/services/startup-mvp-development" },
            { label: "Web Development", href: "/services/web-development" },
            { label: "Mobile App Development", href: "/services/mobile-app-development" },
            { label: "Android App Development", href: "/services/android-app-development" },
            { label: "Cross Platform App Development", href: "/services/cross-platform-app-development" },
            { label: "Search Engine Optimization", href: "/services/search-engine-optimization-in-udaipur" },
          ],
        },
        {
          category: "Intelligent Automation",
          links: [
            { label: "AI & ML Development", href: "/services/ai-ml" },
            { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
            { label: "Machine Learning Consulting", href: "/services/machine-learning-consulting" },
            { label: "Digital Marketing Services", href: "/services/digital-marketing-services" },
          ],
        },
        {
          category: "Managed IT",
          links: [
            { label: "Cloud And DevOps Services", href: "/services/cloud-and-devops-services" },
          ]
        }
      ]
    },
    {
      title: 'PROJECTS',
      description: 'Check out our latest work and successful case studies across various industries.',
      href: "/projects",
      data: [
        {
          category: "Case Studies",
          links: [
            { label: "E-Commerce", href: "/projects/ecommerce" },
            { label: "Healthcare", href: "/projects/healthcare" }
          ]
        }
      ]
    },
    { 
      title: 'INDUSTRIES',
      description: 'Discover industry-specific solutions tailored to meet the unique challenges of your sector.',
      href: "/industries",
      data: [
        { 
          category: "Industries We Serve", 
          links: [
            { label: "Fintech", href: "/industries/fintech" },
            { label: "Healthcare", href: "/industries/healthcare" },
            { label: "Media & Entertainment", href: "/industries/media-entertainment" },
            { label: "Automotive", href: "/industries/automotive" },
            { label: "E-Commerce", href: "/industries/e-commerce" },
          ]
        }
      ] 
    },
    { 
      title: 'TECH STACK',
      href: "/tech-stack",
      description: 'Dive into our arsenal of modern technologies to build scalable, robust, and innovative applications.',
      data: [
        {
          category: "Front-End",
          links: [
            { label: "Angular", href: "/tech-stack/angular" },
            { label: "React", href: "/tech-stack/react" },            
          ],
        },
        {
          category: "Back-End",
          links: [
            { label: "Node", href: "/tech-stack/node" },
            { label: "PHP", href: "/tech-stack/php" },            
          ],
        },
      ] 
    },
    { title: 'COMPANY', href: "/company", description: 'Learn more about our mission and the team behind GoTech.', data: [] },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'white',
        color: 'black',
        boxShadow: isScrolled ? 'none' : '0 2px 10px rgba(0,0,0,0.05)',
        transition: 'all 200ms ease',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          
          <Link href="/" passHref style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/GoTechLogo.png" alt="GoTech Logo" width={65} height={40} className='m-1' />
          </Link>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 2 }}>
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

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              variant="contained"
              sx={{ display: { xs: 'none', md: 'inline-flex' }, bgcolor: '#2b428c', fontWeight: 700, px: 3, textTransform: 'none' }}
            >
              BOOK A CALL
            </Button>
            <IconButton onClick={handleOpenNavMenu} sx={{ display: { xs: 'flex', md: 'none' }, color: '#2b428c' }}>
              <MenuIcon size={28} />
            </IconButton>
          </Box>

          <Drawer anchor="left" open={drawerOpen} onClose={handleCloseNavMenu}>
            <Box sx={{ width: 300, pt: 2 }}>
              <Box sx={{ px: 3, pb: 2, mb: 2, borderBottom: '1px solid #eee' }}>
                <Image src="/GoTechLogo.png" alt="GoTech Logo" width={65} height={40} />
              </Box>
              <List sx={{ px: 1 }}>
                {navConfig.map((item) => (
                  <React.Fragment key={item.title}>
                    <ListItem disablePadding>
                      <ListItemButton 
                        onClick={() => item.data.length > 0 ? toggleMobileCategory(item.title) : handleCloseNavMenu()}
                        sx={{ borderRadius: '8px', py: 1.5 }}
                      >
                        <ListItemText 
                          primary={item.title} 
                          sx={{ '& span': { fontWeight: 'bold', color: '#2b428c' } }} 
                        />
                        {item.data.length > 0 && (mobileExpanded === item.title ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
                      </ListItemButton>
                    </ListItem>

                    {item.data.length > 0 && (
                      <Collapse in={mobileExpanded === item.title} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 3, bgcolor: '#f8faff' }}>
                          {item.data.map((cat) => (
                            <Box key={cat.category} sx={{ py: 1 }}>
                              <Typography variant="caption" sx={{ fontWeight: 800, color: '#94a3b8', px: 2, textTransform: 'uppercase' }}>
                                {cat.category}
                              </Typography>
                              {cat.links.map((link) => (
                                <Link key={link.label} href={link.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                                  <ListItemButton sx={{ py: 0.5 }}>
                                    <ListItemText primary={link.label} sx={{ '& span': { fontSize: '0.9rem', color: '#1e293b' } }} />
                                  </ListItemButton>
                                </Link>
                              ))}
                            </Box>
                          ))}
                        </List>
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