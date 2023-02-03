import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentArea from './components/ContentArea/ContentArea';

function App(){
    return (
        <div className="App">
            <Header />
            <Footer />
            <ContentArea />
        </div>
    );   
}

export default App;