import './App.css';
import {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
    const [value, setValue]= useState(1)

    return (
        <div>
<Counter />

            <ClassCounter />
        </div>
    );
}

export default App;
