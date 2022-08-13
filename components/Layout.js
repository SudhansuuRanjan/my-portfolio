import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div >
        <main>
          <Header />
          {children}
          <Footer/>
        </main>
      </div>
    </>
  )
}

export default Layout