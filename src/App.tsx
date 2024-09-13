import React from 'react';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Gallery from './Components/Gallery/Gallery';
import Testimonials from './Components/Testimonials/Testimonials';
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;