import PageHeader from "./layouts/PageHeader"

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto "></div>
    </div>
  )
}

export default App
