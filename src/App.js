import './App.css';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ServiciosPage from './Pages/ServiciosPage';
import ServicePage1 from './Pages/ServicePage1';
import ServicePage2 from './Pages/ServicePage2';
import ServicePage3 from './Pages/ServicePage3';
import GaleriaPage from './Pages/GaleriaPage';
import GaleriaPage2 from './Pages/GaleriaPage2';
import GaleriaPage3 from './Pages/GaleriaPage3';
import BlogPage  from './Pages/BlogPage';
import PostPage1  from './Pages/PostPage1';
import PostPage2  from './Pages/PostPage2';
import PostPage3  from './Pages/PostPage3';
import ContactoPage from './Pages/ContactoPage';
import FormPage from './Pages/FormPage';

function App() {
  return (
    <div className="App">
        <div className="Home">
                        
        <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/servicios" exact>
                <ServiciosPage />
              </Route>
              <Route path="/servicios3" exact>
                <ServicePage1 />
              </Route>
              <Route path="/servicios4" exact>
                <ServicePage2 />
              </Route>
              <Route path="/servicios5" exact>
                <ServicePage3 />
              </Route>
              <Route path="/galeria" exact>
                <GaleriaPage />
              </Route>
              <Route path="/galeria2" exact>
                <GaleriaPage2 />
              </Route>
              <Route path="/galeria3" exact>
                <GaleriaPage3 />
              </Route>
              <Route path="/blog" exact>
                <BlogPage />
              </Route>
              <Route path="/post1" exact>
                <PostPage1 />
              </Route>
              <Route path="/post2" exact>
                <PostPage2 />
              </Route>
              <Route path="/post3" exact>
                <PostPage3 />
              </Route>
              <Route path="/contacto" exact>
                <ContactoPage />
              </Route>
              <Route path="/formulario" exact>
                <FormPage />
              </Route>
              </Switch>
              </div>
    </div>
  );
}

export default App;
