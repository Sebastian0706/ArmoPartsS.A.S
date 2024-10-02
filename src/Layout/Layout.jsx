import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Router from "../Router/Router"
import Navegacion from "../Components/Header/Navegacion"

const Layout = () => {
  return (
    <>
      <Header/>
      <Navegacion/>
      <div>
       <Router />
      </div>
      <Footer/>
    </>
  )
}

export default Layout
