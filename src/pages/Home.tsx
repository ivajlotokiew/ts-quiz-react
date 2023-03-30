import { Quiz } from "../components/Quiz"

export const Home = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>This is Home Page</h1>
            <div className="App">
                <header className="App-header">
                    <Quiz />
                </header>
            </div>
        </>
    )
}
