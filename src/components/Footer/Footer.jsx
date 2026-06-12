import { Link } from 'react-router-dom';
import './Footer.css';

const footerSections = [
  {
    title: 'About Us',
    links: [
      { label: 'Management Team', path: '/about/management-team' },
      { label: 'Legal Documents', path: '/about/legal-documents' },
      { label: 'Gallery', path: '/gallery' },
    ],
  },
  {
    title: 'Our Projects',
    links: [
      { label: 'Vidhyalaya', path: '/programs/education' },
      { label: 'Nari Tarang', path: '/programs/women-empowerment' },
      { label: 'Zero Hunger Drive', path: '/programs/zero-hunger-drive' },
      { label: 'Project JAL', path: '/programs/jal-project' },
      { label: 'Ashray Ka Aashra', path: '/programs/orphanage' },
      { label: 'Sahara', path: '/programs/medical' },
      { label: 'Ashray Ka Aashram', path: '/programs/old-age-home' },
      { label: 'Pashu Premi', path: '/programs/pashu-premi' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'Volunteer', path: '/volunteer' },
      { label: 'Donate', path: '/donate' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      { label: 'Get in Touch', path: '/ContactUs' },
    ],
  },
];

const socialLinks = ['Instagram', 'Twitter / X', 'Facebook', 'YouTube', 'LinkedIn'];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {footerSections.map((section) => (
          <div key={section.title} className="footer-col">
            <h5>{section.title}</h5>
            <ul>
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-social">
        {socialLinks.map((platform) => (
          <Link key={platform} to="#">{platform}</Link>
        ))}
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Plan International Canada Inc. Because I am a Girl, and Spread the Net names and associated logos are trademarks of Plan International Canada Inc.</p>
        <p>CRA Charity Registration Number: 11892 8993 RR0001</p>
        <div className="footer-links">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms &amp; Conditions</Link>
          <Link to="#">Safeguarding policy</Link>
          <Link to="#">Donor rights</Link>
          <Link to="#">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
