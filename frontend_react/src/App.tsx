import { About, Header, Skills, Footer } from './containers';
import { Navbar } from './components';


const App = () => {
  return (
    <div className='app'>
      <Navbar /> 
      <Header /> 
      <About /> 
      <Skills /> 
      <Footer /> 
    </div>
  );
}

export default App;