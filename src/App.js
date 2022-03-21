import './App.css';
import {useState} from "react";
import Counter from "./components/Counter";

function App() {
    const [value, setValue]= useState(1)

    return (
        <div>
<Counter />
        </div>
    );
}

export default App;
