import { Categories } from "./components/Categories"
import { Gallery } from "./components/Gallery"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
function App() {

  return (
    <>
      <Header />

      <main className="py-10">
        <Hero />
      </main>
      
      <Categories />
      <Gallery />
    </>
  )
}

export default App
