import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <Topbar />
      
      <div className='container'>
        <Sidebar />

        <div className='others'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
