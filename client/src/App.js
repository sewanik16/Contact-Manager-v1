
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import ContactList from './components/ContactsList'
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import ViewContact from './components/ViewContact';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/contacts/list"/>}></Route>
        <Route path="/contacts/list" element={<ContactList/>}></Route>
        <Route path="/contact/add" element={<AddContact/>}></Route>
        <Route path="/contact/edit/:contactid" element={<EditContact/>}></Route>
        <Route path="/contact/view/:contactid" element={<ViewContact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;