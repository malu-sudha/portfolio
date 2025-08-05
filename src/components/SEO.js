import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website' 
}) => {
  const siteTitle = "Dr. Malu Sudha - Astrophysicist";
  const siteDescription = "Postdoctoral Researcher specializing in neutron star low-mass X-ray binaries and accretion processes at Wayne State University";
  const siteUrl = "https://malu-sudha.github.io/portfolio"; // Replace with your actual GitHub Pages URL
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={keywords || "astrophysics, neutron stars, X-ray binaries, astronomy, research, Wayne State University"} />
      <meta name="author" content="Dr. Malu Sudha" />
      <link rel="canonical" href={url || siteUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:site_name" content={siteTitle} />
      {image && <meta property="og:image" content={image} />}
            
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dr. Malu Sudha",
          "jobTitle": "Postdoctoral Researcher",
          "worksFor": {
            "@type": "Organization",
            "name": "Wayne State University"
          },
          "url": siteUrl,
          "email": "malu.sudha@wayne.edu",
          "sameAs": [
            "https://orcid.org/0000-0003-0440-7978",
            "https://scholar.google.com/citations?user=0AZeR5gAAAAJ&hl=en"
          ],
          "knowsAbout": ["Astrophysics", "Neutron Stars", "X-ray Astronomy", "Accretion Processes","QPO","Neutron Star Low-Mass X-ray Binaries", "Spectro-temporal analysis", "Broadband X-ray spectral analysis", "X-ray Timing analysis"],
          "alumniOf": "Osmania University"
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
