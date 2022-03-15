import './App.css';

function App() {
    let likes = 5

    let increment = () => {
        likes += 1

    }

    let decrement = () => {
        likes -= 1
    }


    return (
        <div>
            <h1>
                {likes}
            </h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
}

export default App;
