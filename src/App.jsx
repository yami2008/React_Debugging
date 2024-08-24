import Counter from './components/Counter';
import UserInfo from './components/UserInfo';

function App() {
    const user = { name: 'John Doe', email: 'john@example.com' };

    return (
        <div className="App">
            <h1>React Debugging Example</h1>
            <Counter />
            <UserInfo user={user} />
        </div>
    );
}

export default App;
