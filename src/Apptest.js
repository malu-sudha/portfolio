import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const Navigation = () => (
  <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <NavLink to="/" className="text-2xl font-bold">Malu Sudha</NavLink>
      <div className="flex space-x-6">
        <NavLink to="/research" className="hover:text-blue-400">Research</NavLink>
        <NavLink to="/cv" className="hover:text-blue-400">CV</NavLink>
        <NavLink to="/mentoring" className="hover:text-blue-400">Mentoring</NavLink>
        <NavLink to="/news" className="hover:text-blue-400">News</NavLink>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
    <img src="assets/images/me.jpg" alt="Malu Sudha" className="w-48 h-48 mx-auto rounded-full shadow-lg" />
    <h1 className="text-4xl mt-4 font-bold">Malu Sudha</h1>
    <p className="text-lg text-gray-700">Postdoctoral Researcher | Department of Physics and Astronomy, Wayne State University</p>
<p className="text-lg text-gray-700">My research focuses on understanding accretion processes in neutron star low-mass X-ray binaries through broadband X-ray spectro-temporal studies. I investigate the origin of quasi-periodic oscillations or QPOs and the associated spectral behavior to find a unified spectro-temporal framework for the different subclasses of X-ray binaries. My research is aimed at developing a more comprehensive geometrical picture of such binaries.</p>
<p>

I use NICER, NuSTAR and AstroSat observatories for this research and I have previously also worked on RXTE data. </p>
<p>I am also interested in another class of binaries called contact binaries. I study these systems using optical photometric and spectroscopic methods to understand their mass transfer mechanism.
</p>
  </motion.section>
);

const Research = () => (
  <motion.section initial={{ x: -100 }} animate={{ x: 0 }} className="max-w-4xl mx-auto py-20">
    <h2 className="text-3xl font-bold mb-6">My Research</h2>
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold">Spectro-temporal studies of neutron star low-mass X-ray binaries</h3>
        <img src="assets/images/softqpo.png" className="w-full mt-4 rounded-lg" alt="Research" />
        <p className="mt-2">Mass accretion is a ubiquitous, yet highly elusive phenomenon. Refining our frameworkof accretion dynamics is vital for understanding the intense gravitational fields involved inthe process of mass accretion. A critical aspect of this understanding lies in examiningthe diverse and complex spectro-temporal variability observed in environments with intensegravity. Neutron star low-mass X-ray binaries (NS LMXBs) serve as ideal laboratories forinvestigating accretion flow dynamics because these systems are particularly rich in spectrotemporalphenomenology in an extreme gravitational setting with the presence of a solidsurface. Quasi Periodic Oscillations (QPOs) offer a unique window into the behavior ofmatter in the intense gravitational fields near neutron stars, revealing critical insights intothe structure and dynamics of their inner accretion disks. These oscillations shed light onkey processes such as relativistic effects and disk instabilities, which are not only relevant forunderstanding accretion onto neutron stars but also have broader implications for accretiondynamics around stellar to supermassive black holes. By focusing on QPOs, we can refineour models of how compact objects interact with their environments, providing a deeperunderstanding of high-energy astrophysical phenomena across the universe. Additionally, theadvanced techniques used to study QPOs can be applied to a variety of time-variable sources,enhancing our ability to interpret X-ray observations in diverse astrophysical contexts.By analyzing spectro-temporal variability in soft (0.5–3 keV) and hard X-ray bands(> 3 keV) using NICER and NuSTAR data respectively, my research aims toinvestigate the origins of QPOs to indirectly map accretion dynamics and emission regions,leading to a unified model for QPOs and NS LMXB classification.</p>
      </div>
 <div>
        <h3 className="text-xl font-semibold">Mass transfer mechanism in contact binaries</h3>
        <img src="assets/images/softqpo.png" className="w-full mt-4 rounded-lg" alt="Research" />
        <p className="mt-2">Another class of binaries where mass accretion plays a crucialrole in its evolution and period variation are contact binary stars where the primaryemission is in the optical wavelength regime. These systems act as perfect laboratoriesto improve the stellar evolution theory and help in understanding the underlyingmagnetic dynamo cycle. Here mass transfer between the components in orbit (mainsequence type stars) leads to changes in the orbit, resulting in orbital period variations.By determining the mass accretion rate in contact binaries (using their O-Cdiagrams) one could even end up discovering a third body in orbit with these systemswhich could be a less massive star or a planet that is few times the size of Jupiter.</p>
      </div>
    </div>
  </motion.section>
);

const CV = () => (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto py-20">
    <h2 className="text-3xl font-bold mb-6">Curriculum Vitae</h2>
    <iframe src="assets/docs/cvmalu.pdf" className="w-full h-96 rounded-lg shadow-md"></iframe>
  </motion.section>
);

const Mentoring = () => (
  <motion.section initial={{ x: 100 }} animate={{ x: 0 }} className="max-w-4xl mx-auto py-20">
    <h2 className="text-3xl font-bold mb-6">Mentoring</h2>
    <ul className="list-disc pl-6">
      <li>Jacqueline Rossbach - Directed Study (2025-present)</li>
      <li>Mentoring Henry Ford College students (2024-present)</li>
      <li>Mohamad Ali Kaddouh - Summer Research Program (2024)</li>
    </ul>
  </motion.section>
);

const News = () => (
  <motion.section initial={{ y: -100 }} animate={{ y: 0 }} className="max-w-4xl mx-auto py-20">
    <h2 className="text-3xl font-bold mb-6">News & Updates</h2>
    <p>NICER/ISS Science Nugget - January 2025</p>
    <p>NICER GO Cycle 7 Proposal Accepted - December 2024</p>
  </motion.section>
);

export default function App() {
  return (
    <Router>
      <Navigation />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/mentoring" element={<Mentoring />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

