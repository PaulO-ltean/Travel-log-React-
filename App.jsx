import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                <div id="main_body">
                {entryElements}
                <p id="toBe">To be continued...</p>
                </div>

            </main>
        </>
    )
}