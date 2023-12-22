import { IconButton } from "@mui/material";
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
    return(
        <div className="footer">
            <div className="links">
                <p>Help center</p>
                <p>Careers</p>
                <p>About</p>
            </div>

            <div className="social">
                <IconButton 
                    color="primary" 
                    size="medium" 
                    href="https://www.instagram.com"
                    sx={{mr: 3}}
                >
                    <InstagramIcon/>
                </IconButton>

                <IconButton 
                    color="primary" 
                    size="medium" 
                    href="https://www.facebook.com/login/" 
                    sx={{mr: 3}}
                >
                    <FacebookIcon/>
                </IconButton>

                <IconButton 
                    color="primary" 
                    size="medium" 
                    href="https://twitter.com/i/flow/login" 
                    sx={{mr: 3}}
                >
                    <TwitterIcon/>
                </IconButton>

                <IconButton 
                    color="primary" 
                    size="medium" 
                    href="https://mail.google.com/" 
                    sx={{mr: 3}}
                >
                    <MailOutlineIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Footer;