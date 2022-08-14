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
        <main className="bg-[#fffbe8] dark:bg-[#202023] font-mono antialiased">
          <Header />
          {children}
          <Footer/>
        </main>
      </div>
    </>
  )
}

export default Layout