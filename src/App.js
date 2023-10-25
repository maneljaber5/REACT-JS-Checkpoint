
import './App.css';
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Footer from './components/Footer';
import Mapp from './components/Mapp';
function App() {
  return (
    <>
    {/* appel navbar */}
    <Navbarr/>
    {/* creation h1 */}
    <h1>seasons</h1>
    {/* appel card 1 */}
    <div className='cards'>
      <Card1/>
    {/* appel card 2 */}
    <Card2/>
    {/* appel card 3 */}
    <Card3/>
    </div>
    {/* appel footer */}
    <Footer/>
    {/* <Mapp/> */}
    </>
  );
}

export default App;
