import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import { FaEnvelope, FaOrcid, FaGoogleScholar } from 'react-icons/fa';
const linkStyle = {
  color: 'blue',
  textDecoration: 'none' // Optional: removes underline
};
const Navigation = () => (

  <nav className="p-4 fixed w-full top-0 z-50 bg-indigo-700 shadow-md transition duration-300 ease-in-out">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <NavLink to="/" className="text-3xl font-serif text-gray-200 hover:text-gray-300 transition duration-200">Dr. Malu Sudha</NavLink>
      <div className="flex space-x-8">
        {['Research', 'CV', 'Mentoring'].map((item) => (
          <NavLink key={item} to={`/${item.toLowerCase()}`} className="text-lg font-serif text-gray-200 hover:text-gray-300 transition duration-200">
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
);

const Home = () => (
  <motion.section className="text-center pt-20 pb-16">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl max-h-2xl mx-auto transform transition-transform hover:scale-105">
      <img src="assets/images/me.jpg" alt="Malu Sudha" className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-200 object-cover shadow-md" />
      <h1 className="text-4xl mt-4 font-serif text-indigo-800">Dr. Malu Sudha</h1>
      <p className="text-lg text-gray-600 mt-2 font-serif">Postdoctoral Researcher | Wayne State University</p>
      
      <div className="bg-indigo-50 p-3 mt-4 rounded-lg shadow-md font-serif text-base">
        <p className="text-gray-700 leading-relaxed">
          My research focuses on understanding accretion processes in neutron star low-mass X-ray binaries through broadband X-ray spectro-temporal studies.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          I am also interested in contact binaries, studied through optical photometric and spectroscopic methods to understand their mass transfer mechanisms.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mt-6 font-serif">
        {['Research', 'CV', 'Mentoring'].map((item) => (
          <a key={item} href={`/${item.toLowerCase()}`} className="bg-indigo-600 py-1 px-3 rounded-lg shadow-md text-white text-base transition duration-300 ease-in-out hover:bg-indigo-500">
            {item}
          </a>
        ))}
      </div>

      <div className="p-3 mt-4 rounded-lg max-w-sm mx-auto flex justify-center space-x-4">
        <a href="mailto:malu.sudha@wayne.edu" className="text-indigo-800 text-2xl hover:text-indigo-500 transition duration-200">
          <FaEnvelope />
        </a>
        <a href="https://orcid.org/0000-0003-0440-7978" className="text-indigo-800 text-2xl hover:text-indigo-500 transition duration-200">
          <FaOrcid />
        </a>
        <a href="https://scholar.google.com/citations?user=0AZeR5gAAAAJ&hl=en" className="text-indigo-800 text-2xl hover:text-indigo-500 transition duration-200">
          <img width="30" height="30" src="https://img.icons8.com/color/100/google-scholar--v3.png" alt="Google Scholar" />
        </a>
      </div>
    </div>
  </motion.section>
);

const Research = () => (
  <div className="font-serif relative">
    {/* Background Overlay */}
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-0"></div>

    <motion.section 
      initial={{ x: -100 }} 
      animate={{ x: 0 }} 
      className="max-w-5xl mx-auto py-20 px-4 relative z-10"
    >
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
        My Research
      </h2>
      
     <div className="space-y-12">
        <h3 className="text-3xl font-semibold text-center text-indigo-300 mb-8 drop-shadow-md">
          Spectro-temporal studies of neutron star low-mass X-ray binaries
        </h3>
        <div className="bg-white shadow-lg p-6 rounded-2xl max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          <p className="text-center">
            Neutron star low-mass X-ray binaries (NS LMXBs) serve as ideal laboratories for
            investigating accretion flow dynamics because these systems are particularly rich in spectro-temporal
            phenomenology in an extreme gravitational setting.
          </p>
        </div>

        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 bg-white shadow-lg p-6 rounded-2xl border-l-4 border-indigo-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                Quasi Periodic Oscillations or QPOs offer a unique window into the behavior of matter in these settings, revealing critical insights into the structure and dynamics of the inner accretion disk region.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="assets/images/softqpo.png"
                className="rounded-2xl shadow-xl w-full object-cover"
                alt="Research visualization"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 bg-white shadow-lg p-6 rounded-2xl border-l-4 border-indigo-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                By analyzing spectro-temporal variability in soft (0.5–3 keV) and hard X-ray bands
                (> 3 keV) using NICER and NuSTAR data respectively, my research aims to
                investigate the origins of QPOs to understand accretion dynamics and emission regions.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="assets/images/ironl.png"
                className="rounded-2xl shadow-xl w-full object-cover"
                alt="Research data"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 bg-white shadow-lg p-6 rounded-2xl border-l-4 border-indigo-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                A Fourier frequency resolved lag-energy spectral study can help us study the causal relationship of different spectral components and allow for the association of timing features with spectral features.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="assets/images/lag.jpg"
                className="rounded-2xl shadow-xl w-full object-cover"
                alt="Spectral analysis"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 bg-white shadow-lg p-6 rounded-2xl border-l-4 border-indigo-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Fourier frequency resolved spectrum is a powerful tool to identify and understand the spectral component associated with the temporal variability.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="assets/images/cov.jpg"
                className="rounded-2xl shadow-xl w-full object-cover"
                alt="Spectral analysis"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 bg-white shadow-lg p-6 rounded-2xl border-l-4 border-indigo-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                CCF studies of NS LMXBs indicate a similar inner disk configuration for both atoll and Z sources, supporting the idea of them being different states of the same class of NS LMXBs.
              </p>
            </div>
            <div className="md:w-2/3">
              <img 
                src="assets/images/corona.jpeg"
                className="rounded-2xl shadow-xl w-full h-[600px] md:h-[600px] lg:h-[600px] object-cover"
                alt="Spectral analysis"
              />
            </div>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-2xl border-l-4 border-indigo-500 text-lg text-gray-700 leading-relaxed">
            <p>
              The varied behavior of sources in soft and hard energy bands and their complex behavior in the Fourier domain warrants a systematic spectro-temporal study in a broad energy band for the entire NS LMXB population. Such a study of NS LMXBs can help us create a unified framework for the different sub-classes of these systems.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  </div>
);

const CV = () => (
  <div className="py-20 min-h-screen flex items-center justify-center">
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex flex-col max-w-5xl w-full mx-auto p-10 rounded-xl bg-white shadow-2xl"
    >
      <h2 className="text-4xl font-bold text-indigo-800 text-center mb-6">
        Curriculum Vitae
      </h2>

      <div className="flex flex-col space-y-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-indigo-700">Dr. Malu Sudha</h3>
          <p>Email: <a href="mailto:malu.sudha@wayne.edu" className="text-indigo-600">malu.sudha@wayne.edu</a></p>
          <p>Location: Detroit, Michigan, U.S</p>
        </div>

        <h4 className="text-xl font-semibold text-indigo-600">Professional Experience & Education</h4>
        
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <p><strong>2023 – present:</strong> Postdoctoral Fellow, Department of Physics and Astronomy, Wayne State University</p>
          <p>Research Area: Broadband X-ray spectro-temporal studies of neutron star low mass X-ray binaries.</p>
          <p>Research Advisor: <a href="https://sites.google.com/umich.edu/reneeludlam/home" style={linkStyle}>Dr. Renee Ludlam</a></p>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg">
          <p><strong>2024:</strong> Guest Lectured the Astronomical Techniques (AST 4100) course at Wayne State University (5 lectures).</p>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg">
          <p><strong>2017 – 2022:</strong> Ph.D., Department of Astronomy, Osmania University, Hyderabad, India.</p>
          <p>Research Topic: X-Ray and optical studies of mass accreting binary systems.</p>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg">
          <p><strong>2014 – 2016:</strong> Research Assistant, DST-SERB Project, Department of Astronomy, Osmania University.</p>
          <p>Project: Understanding the physical and radiative structure of accretion disks in neutron star and black hole sources.</p>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg">
          <p><strong>2012 – 2014:</strong> M.Sc. in Astronomy, Osmania University, Hyderabad, India.</p>
          <p>First Rank with Distinction.</p>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg">
          <p><strong>2009 – 2012:</strong> B.Sc. in Physics, St. Teresa's College, Mahatma Gandhi University, Kerala, India.</p>
          
        </div>

        <h4 className="text-xl font-semibold text-indigo-600">Research Areas of Interest</h4>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Spectro-temporal studies of X-ray binaries and optical contact binary systems</li>
          <li>Exploring the inner disk region of neutron star and black hole X-ray binaries</li>
          <li>Constrain coronal heights based on CCF and cross-spectral studies</li>
        </ul>

        <h4 className="text-xl font-semibold text-indigo-600">List of Publications</h4>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Malu, S, Ludlam, R. et al. (2024). <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ad9588/meta" className="text-indigo-600 hover:underline">A spectro-temporal view of normal branch oscillations in Cygnus X-2 as seen by NICER and NuSTAR.</a> ApJ </li>
          <li>Kaddouh, M. A., Sudha, Malu, & Ludlam, R. M. (2024). <a href="https://doi.org/10.3847/2515-5172/ad7e22" className="text-indigo-600 hover:underline">NICER Observes the Full Z-track in GX 13+1.</a> Research Notes of the American Astronomical Society, 8(9), 243.</li>
          <li>Moutard, D. L., et al. (2024). <a href="https://doi.org/10.3847/1538-4357/ad4a78" className="text-indigo-600 hover:underline">Investigating the Ultracompact X-Ray Binary Candidate SLX 1735-269.</a> 968(2), 51.</li>
          <li>Chiranjeevi, P., et al. (2023). <a href="https://doi.org/10.1007/s10509-023-04233-y" className="text-indigo-600 hover:underline">Detection of lags in an atoll source 4U 1728-34 using AstroSat.</a> 368(9), 77.</li>
          <li>Sriram, K., et al. (2021). <a href="https://doi.org/10.1007/s12036-021-09760-0" className="text-indigo-600 hover:underline">Understanding the inner structure of accretion disk in GX 17+2: AstroSat’s outlook.</a> Journal of Astrophysics and Astronomy, 42(2), 96.</li>
          <li>Malu, S., et al. (2021). <a href="https://doi.org/10.1093/mnras/stab1892" className="text-indigo-600 hover:underline">Exploring the inner-disc region of the atoll source 4U 1705-44 using AstroSat’s SXT and LAXPC observations.</a> MNRAS, 506(4), 6203–6211.</li>
          <li>Malu, S., et al. (2021). <a href="https://doi.org/10.1007/s10509-021-03992-w" className="text-indigo-600 hover:underline">Investigating the coronal structure by studying time lags in the Atoll source 4U 1705-44 using AstroSat.</a> Ap&SS, 366(9), 87.</li>
          <li>Malu, S., et al. (2020). <a href="https://doi.org/10.1093/mnras/staa2939" className="text-indigo-600 hover:underline">Coronal vertical structure variations in normal branch of GX 17+2: AstroSat’s SXT and LAXPC perspective.</a> MNRAS, 499(2), 2214–2228.</li>
          <li>Sriram, K., et al. (2019). <a href="https://doi.org/10.3847/1538-4365/ab30e1" className="text-indigo-600 hover:underline">Constraining the Coronal Heights and Readjustment Velocities Based on the Detection of a Few Hundred Seconds Delays in the Z Source GX 17+2.</a> ApJS, 244(1), 5.</li>
          <li>Sriram, K., et al. (2018). <a href="https://doi.org/10.3847/1538-3881/aab355" className="text-indigo-600 hover:underline">Possible Presence of a Third Body in the Kepler K2 Variable EPIC 202073314.</a> AJ, 155(4), 172.</li>
          <li>Sriram, K., et al. (2017). <a href="https://doi.org/10.3847/1538-3881/aa6893" className="text-indigo-600 hover:underline">A Study of the Kepler K2 Variable EPIC 211957146 Exhibiting a Variable O’Connell Effect.</a> AJ, 153(5), 231.</li>
          <li>Sriram, K., et al. (2016). <a href="https://doi.org/10.3847/0004-6256/151/3/69" className="text-indigo-600 hover:underline">ASAS J083241+2332.4: A New Extreme Low Mass Ratio Overcontact Binary System.</a> AJ, 151(3), 69.</li>
        </ul>

        <h4 className="text-xl font-semibold text-indigo-600">Awards and Achievements</h4>
        <ul className="list-disc pl-6 text-gray-700">
          <li>2019 - Awarded the DST AWSAR award for popular science story under the PhD Category.</li>
          <li>2017 - Awarded the DST INSPIRE Ph.D fellowship.</li>
          <li>2014 - Secuindigo first rank in the post-graduate degree program in Astronomy.</li>
        </ul>

        <h4 className="text-xl font-semibold text-indigo-600">Workshops/Conferences</h4>
        <ul className="list-disc pl-6 text-gray-700">
<li>2025 - Delivered a talk at the AAS Winter 2025 meeting.</li>
<li>2024 - Delivered an oral poster presentation at the Joint NICER/IXPE Workshop 2024.</li>
          <li>2024 - Delivered a talk at the Compact Objects in Michigan and Ontario conference, 2024. Title: A broadband spectro-temporal view of the NS LMXB Cygnus X-2.</li>
    <li>2024 - Attended the XRISM Community Workshop, 2024 (virtual meeting).</li>
    <li>2024 - Delivered a Wayne State Particle-Astro-Nuclear (PAN) Seminar talk at the Department of Physics and Astronomy, Wayne State University.</li>
    <li>2024 - Delivered an online colloquium talk at the Thüringer Landessternwarte (TLS) Institute, Germany.</li>
    <li>2023 - Attended the joint I-HOW & COSPAR capacity building workshop in X-ray Astronomy, X-Vision 2023, at the North-West University, Potchefstroom, South Africa.</li>
    <li>2021 - Delivered a talk on the Inner region of the accretion disk and jet in the Z source GX 17+2 and atoll source 4U 1705-44 for the workshop on Astrophysical jets and observational facilities: National perspective, 05-09 April 2021, ARIES Nainital, India.</li>
    <li>2021 - Presented a poster on Understanding the coronal structure variations by studying time lags in the Atoll source 4U 1705-44 for the 3-day International Seminar on January 19-21, 2021, to commemorate the completion of five years of AstroSat, organized by the Indian Space Research Organisation (ISRO), India.</li>
    <li>2021 - Presented a poster on Spectro-temporal studies of the Atoll source 4U 1705-44: Investigating the inner region of the accretion disk at the Astronomical Society of India (ASI) meeting, 2021, jointly hosted by ICTS-TIFR Bengaluru (India), IISER Mohali (India), IIT Indore (India), and IUCAA Pune (India).</li>
    <li>2020 - Presented a poster on AstroSat observations of a neutron star Z source GX 17+2 at the Astronomical Society of India (ASI) meeting, 2020, held at the Indian Institute of Science Education & Research (IISER), Tirupati, India.</li>
    <li>2018 - Participated in the GROWTH Winter School on Transient Astronomy at IIT Bombay (Mumbai, India) from 3-5 December 2018.</li>
    <li>2018 - Delivered a talk on Evidence of a tertiary component in Kepler contact binary K2 EPIC 202073314 at the Astronomical Society of India (ASI) meeting, 2018, held at Osmania University, Hyderabad, India.</li>
    <li>2017 - Participated in the AstroSat data analysis workshop held at IUCAA, India, from 13-26 November 2017.</li>
    <li>2017 - Participated in the one-day workshop on "Reduction of Ultra Violet Imaging Telescope data onboard ASTROSAT" organized by the Indian Institute of Astrophysics (IIA) on 30 March 2017, at IIA, Bangalore, India.</li>
    <li>2017 - Co-authored a work on the Anti-correlated lags in a Z source GX 17+2 at the Astronomical Society of India (ASI) meeting, 2017, held at Birla Institute of Scientific Research (BISR), Jaipur, India.</li>
    <li>2016 - Participated in the workshop on DATA ANALYSIS & LAXPC SCIENCE held at Tata Institute of Fundamental Research, Mumbai, India, during 18-21 January 2016.</li>
    <li>2016 - Paper on KP103285: A low mass ratio overcontact binary system was presented at the Astronomical Society of India (ASI) meeting, 2016, held at the University of Kashmir, Srinagar, India.</li>
    <li>2016 - Participated in the "School on Best Practices in Astro-Statistics" organized by the Inter-University Center for Astronomy and Astrophysics (IUCAA), held during 28-30 January 2016, at IUCAA, Pune, India.</li>
    <li>2015 - Paper on Study of period variation in a contact binary system KP103285 was presented at the International Conference on Celestial Mechanics and Dynamical Astronomy held during 15-17 December 2015, at the Maulana Azad National Urdu University, Hyderabad, India.</li>
    <li>2014 - Participated in the workshop on Variability of Astronomical Sources, organized by IUCAA, Pune, India, during 22-24 January 2014.</li>
        </ul>

        <h4 className="text-xl font-semibold text-indigo-600">Research Mentoring</h4>
        <ul className="list-disc pl-6 text-gray-700">
<li> Ella Stamatakis - 2025-present</li>
<li> Jenna Kakos - 2025-present</li>
          <li> Jacqueline Rossbach - Directed Study (2025)</li>
<li> Henry Ford College undergraduate students (2024-present)</li>
<li> Mohamad Ali Kaddouh - Summer Research Program (2024)</li>
</ul>

        <h4 className="text-xl font-semibold text-indigo-600">Proposals and Panels</h4>
        <ul className="list-disc pl-6 text-gray-700">
<li><b></b>  PI - NuSTAR GO cycle 11</li>
<li><b></b>  PI - NICER GO cycle 7</li>
<li><b></b> Served in the IXPE Guest Observer Program review panel.</li>
          <li><b></b> Served in the NICER Guest Observer Program (Cycle 6) review panel.</li>
  <li><b></b> PI - numerous successful proposals for optical photometric and spectroscopic observations using the:
    <ul>
      <li>2.3 m VBT telescope (Indian Institute of Astrophysics: IIA)</li>
      <li>1.3 m JCBT telescope (IIA)</li>
      <li>2 m HCT telescope (IAO, IIA)</li>
    </ul>
  </li>
  <li><b></b> Co-PI - four successful proposals for observations using the AstroSat satellite:
    <ul>
      <li>SXT instrument</li>
      <li>LAXPC instrument</li>
    </ul>
  </li>
        </ul>


        <h4 className="text-xl font-semibold text-indigo-600">Skills</h4>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Coding: C++, Fortran, Python, R, SQL, XML, HTML, CSS, JavaScript, LaTeX.</li>
          <li>Data Analysis Packages: IRAF, HEAsoft, NICERDAS, NUSTARDAS, AstroSat data analysis software.</li>
        </ul>
      </div>
    </motion.section>
  </div>
);
const Mentoring = () => (
  <div className=" min-h-screen">
    <motion.section initial={{ x: 100 }} animate={{ x: 0 }} className="max-w-4xl mx-auto py-20 px-6">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto transform transition-transform hover:scale-105">

      <h2 className="text-3xl font-bold text-indigo-900 mb-0">Mentoring</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
<li>Ella Stamatakis - Directed Study (2025-present) "A search for soft QPOs in Cyg-like sources – GX 340+0 and GX 5-1" </li>
<li>Jenna Kakos - Directed Study (2025-present) "Timing Analysis of the Neutron Star Low Mass X-ray Binary – 4U 1323-619" </li>
        <li>Jacqueline Rossbach - Directed Study (2024-2025 Winter) "Spectro-temporal studies of XTE J1701-462 using NICER" </li>
        <li>Henry Ford College undergraduate students (2024-present) "Creating a spectro-temporal database of NS LMXBs</li>
        <li>Mohamad Ali Kaddouh - Summer Research Program (2024) "NICER observes the full Z-track in GX 13+1"</li>
      </ul>
</div>
    </motion.section>

<motion.section initial={{ x: 100 }} animate={{ x: 0 }} className="max-w-4xl mx-auto px-6">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto transform transition-transform hover:scale-105">

<h2 className="text-3xl font-bold text-indigo-900 mb-2">The Dead Stars Society </h2>
The Dead Stars Society  was started by <a href="https://kcdage.github.io/" style={linkStyle}>Dr. Kristen Dage</a>. It is a research group focused on supporting undergraduate students from under-resourced institutions. Dr. Dage founded this research group with a mission of empowering the next generation of scientists by providing data-intensive astronomy research opportunities. I am an active member of the DSS and I mentor students in performing temporal analysis of neutron star low-mass X-ray binaries using NICER data by employing NICER software, and Stingray. DSS is supported by the Legacy Survey of Space and Time Discovery Alliance and the Michigan Space Grant Consortium. For more details, please visit <a href="https://sites.google.com/view/deadstarssociety/home?authuser=3" style={linkStyle}>please visit our website.</a>
</div>
    </motion.section>
  </div>
);


export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Image */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('assets/images/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: -2,
        }}
      ></div>

      {/* Background Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
      <Router>
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            minHeight: '100vh',
          }}
        >
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/mentoring" element={<Mentoring />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
