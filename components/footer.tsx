import Image from 'next/image';
import { Box, Container, Grid, Typography, Link, Divider, IconButton, colors } from '@mui/material';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight} from 'lucide-react';
import { YouTube } from '@mui/icons-material';

function Footer() {
  return (
<div> 
   {/* 6. FORM SECTION */} 

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className='text-3xl md:text-4xl font-bold uppercase mb-10 text-[#0f2447]'>Tell Us About Your Needs</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* LEFT: social icons + map */}
              <div className="space-y-6">
                <div className='flex items-center gap-4'>
                  <Facebook size={35} className='p-2 rounded-full border border-[#cbd7ff] text-[#2b428c] hover:text-[#1877F2] transition-colors cursor-pointer hover:bg-gray-50' />
                  <Instagram size={30} className='p-2 rounded-full border border-[#f6d7f0] text-[#2b428c] hover:text-[#E1306C] transition-colors cursor-pointer hover:bg-gray-50' />
                  <Linkedin size={35} className='p-2 rounded-full border border-[#cfe0ff] text-[#2b428c] hover:text-[#0A66C2] transition-colors cursor-pointer hover:bg-gray-50' />
                  <Youtube size={35} className='p-2 rounded-full border border-[#ffd6d6] text-[#2b428c] hover:text-[#FF0000] transition-colors cursor-pointer hover:bg-gray-50' />
                </div>

                <div className="w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.0956302459563!2d73.70158387514277!3d24.585895678109562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56328ea7ae9%3A0x96c8ebe38f579743!2sGo-Tech%20Solution%7C%20Web%20Development%20Company%20in%20Udaipur%2C%20IT%20Company%20in%20Udaipur!5e0!3m2!1sen!2sin!4v1769596852679!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[420px] rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>

              {/* RIGHT: contact details */}
              <div className="pt-2">
                <p className="text-lg text-[#56627a] mb-6">Just fill out the form or contact us via email or phone:</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail size={20} className='text-[#2b428c]' />
                    <div>
                      <div  className="text-base font-semibold text-[#0f2447]">projects@go-techsolution.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail size={20} className='text-[#2b428c]' />
                    <div className="text-base font-semibold text-[#0f2447]">career@go-techsolution.com</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone size={20} className='text-[#2b428c]' />
                    <div className="text-base font-semibold text-[#0f2447]">+91-8769365375</div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin size={20} className='text-[#2b428c] mt-1' />
                    <div>
                      <div className="inline-block  text-black   rounded-md font-semibold">515-517, 5th floor, Amrit Shree, University Road, Udaipur, Rajasthan 313001</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

              <Container sx={{
                bgcolor:'#2b428c',
                mt:8,
                py:4,
                borderRadius:'8px',
                textAlign:'center',
                color:'white',
              }}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <input type="text" placeholder='Full Name*' className="min-w-1/2 border-gray-500 border outline-0 p-2 rounded-md text-white bg-[#3f559f] mt-4" />
                  <input type="email" placeholder='Email Address*' className="min-w-1/2 border-gray-500 border outline-0 p-2 rounded-md text-white bg-[#3f559f] mt-4" />
                  <input type="text" placeholder='Phone Number(Optional)' className="min-w-1/2 border-gray-500 border outline-0 p-2 rounded-md text-white bg-[#3f559f] mt-4" />
                  <input type="text" placeholder='Company Name*' className="min-w-1/2 border-gray-500 border outline-0 p-2 rounded-md text-white bg-[#3f559f] mt-4" />
                </div>
                <div className='mt-4'>
                  <h3>We will contact you ASAP or you can <a href="" className='text-semibold hover:underline text-orange-500'>Book a Call</a></h3>
                  <textarea placeholder='Your Message*' className="w-full border-gray-500 border outline-0 p-2 rounded-md text-white bg-[#3f559f]" rows={6}></textarea>
                </div>
                <button className='bg-orange-500 hover:bg-orange-600 transition-all py-3 px-8 rounded text-white mt-6 shadow-xl font-bold inline-flex items-center gap-3'>SUBMIT <ArrowRight size={20} /></button>

              </Container>

        </section>
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2b428c', // Matches the navy blue in the image
        color: 'white',
        pt: 8,
        pb: 4,
        width: '100%',
        position:'relative',
        bottom:0,
      
      }}
    >
      
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="space-between" alignItems="flex-start" ml={5} mb={2}>
  
  {/* 1. Logo Section (Width: 2/12) */}
  <Grid item xs={12} md={2}>
    <Box>
      <Image src="/GoTechFooter.png" alt="GoTech Logo" width={80} height={50} />
      <Typography variant="caption" sx={{ display: 'block', mt: 2, opacity: 0.8 }}>
        © 2026 Go-tech Solution Inc.<br />
        All Rights Reserved.
      </Typography>
    </Box>
  </Grid>

  {/* 2. Services Section (Width: 2.5/12) */}
  <Grid item xs={12} sm={6} md={2.5} >
    <Typography variant="subtitle2" fontWeight={700} fontSize={18}  sx={{ mb: 2 }}>SERVICES</Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 ,fontSize: "18px"}} className='font-[23px]'>
      <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px" , transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }}>Cloud & DevOps Services</Link>
      <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px", transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }} >AI & ML Development</Link>
      <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px", transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }}>UI/UX Design</Link>
      <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px", transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }}>E-Commerce App Development</Link>
      <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px" , transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    }, }}>Cross-Platform App Development</Link>
    </Box>
  </Grid>

  {/* 3. Tech Stack Section (Width: 3/12) */}
  <Grid item xs={12} sm={6} md={3}>
    <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2 }}>TECH &nbsp; &nbsp;  STACK</Typography>
    <Grid container spacing={1} >
      <Grid item xs={6} >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 ,}} className='font-[23px]'>
          <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px" , transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }}>Angular</Link>
          <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px" , transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    }, }}>Node</Link>
          <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px", transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }}>.NET</Link>
          <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px", transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }}>Python</Link>
          <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px", transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }}>iOS</Link>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, ml:2 }}>
          <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px", transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }}>React</Link>
          <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px", transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }}>PHP</Link>
          <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px", transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }}>Java</Link>
          <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px" , transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    }, }}>Andriod</Link>
          <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px", transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }}>Flutter</Link>
        </Box>
      </Grid>
    </Grid>
  </Grid>

  {/* 4. Company Section (Width: 1.5/12) */}
  <Grid item xs={12} sm={6} md={1.5}>
    <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2 }}>COMPANY</Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px" , transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    }, }}>Home</Link>
      <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px" , transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    }, }}>Services</Link>
      <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px" , transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    }, }}>Contact</Link>
      <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px" , transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    }, }}>About Us</Link>
        <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px", transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    },  }}>Technologies</Link>
      <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px" , transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    }, }}>Blogs</Link>
      <Link href="#" color="inherit" underline="none" variant="caption"  sx={{ fontSize: "15px" , transition: "color 0.3s ease",
    "&:hover": {
      color: "orange",   // any color you want
    }, }}>Privacy Policy</Link>
    </Box>
  </Grid>

  {/* 5. Contacts Section (Width: 3/12) */}
  <Grid item xs={12} sm={6} md={3}>
    <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2 }}>CONTACTS</Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Mail size={14} />
        <Typography variant="caption"  sx={{ fontSize: "15px" }}>career@go-techsolution.com</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Phone size={14} />
        <Typography variant="caption"  sx={{ fontSize: "15px" }}>+91-8769365375</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
        <MapPin size={14} style={{ marginTop: '2px' }} />
        <Typography variant="caption"  sx={{ fontSize: "15px" }}>
          515-517, 5th floor, Amrit Shree, <br></br>University Road, Udaipur, <br></br>Rajasthan 313001
        </Typography>
      </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt:2}}>
  <Link href="https://www.facebook.com/GoTechSolution05">
    <Facebook  color="white"  />
  </Link>

  <Link href="https://www.instagram.com/gotech_solution/">
    <Instagram  color="white"  />
  </Link>

  <Link href="https://www.linkedin.com/company/go-techsolution5/">
    <Linkedin  color="white" />
  </Link>

  <Link href="https://www.youtube.com/@Gotechsolution">
    <YouTube sx={{ color: "#fff" }} />
  </Link>
</Box>

    </Box>
  </Grid>
   
    

    
</Grid>
        {/* Bottom Bar */}
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 4 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2">© 2026 Go-tech Solution Inc.</Typography>
          <Typography variant="body2">All Rights Reserved.</Typography>
        </Box>
      </Container>
    </Box>
    </div>
  );
}

export default Footer;