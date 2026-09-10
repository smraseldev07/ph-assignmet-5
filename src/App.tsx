import { Suspense } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies"



const technologiesfetch = async () => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}


function App() {
  const techpromise = technologiesfetch()

  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
   <Suspense fallback = {<p>loading,,,,,,,</p>}>
      <Technologies techpromise = {techpromise}></Technologies>
   </Suspense>
    </>
  )
}

export default App
