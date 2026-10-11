import ADM from './pages/Adm/Index.jsx';
import Cadastro from './pages/Cadastro/Index.jsx';
import Login from './pages/Login/Index.jsx';
import Notas from './pages/Notas/App.jsx';
import Configs from './pages/configs/Index.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Notas/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/adm' element={<ADM/>}/>
            <Route path='/configs' element={<Configs/>}/>
        </Routes>
        </BrowserRouter>
    );
}