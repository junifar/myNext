import { Fragment } from 'react'
import Footer from '../components/common/footer'
import Navbar from '../components/common/navbar'
import Jumbotron from '../components/index/jumbotron'
import ProductList from '../components/index/product_list'

export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <main>
        <Jumbotron/>
        <ProductList/>
      </main>
      <Footer/>
    </Fragment>
  )
}
