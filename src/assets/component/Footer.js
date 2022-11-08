import '../component/Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer(){
    return(
        <div>
        <footer className="footer">
            <p> Oui alors c'est un Footer </p>
            <a href='https://github.com/VersluysTheo' target={'_blank'}><GitHubIcon/></a>
            <a href='https://www.linkedin.com/in/theo-versluys-a17791243/' target={'_blank'}><LinkedInIcon/></a>
        </footer>
        </div>
    )
}