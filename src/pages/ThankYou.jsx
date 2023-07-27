import { Link } from 'react-router-dom'
import Header from '../components/Header'

const ThankYou = () => {
  return (
    <>
      <Header />
      <section className='py-20 pb-12 mx-5'>
        <h3 className='text-center font-bold text-2xl'>Thank you for your order!</h3>
        <h4 className='text-center font-bold text-xl'>We&apos;ll start fufilling your order and email you when it&apos;s on the way.</h4>
      </section>
      <section className='flex justify-center pb-20'>
        <button className='btn btn-primary mr-2'>
          <Link to='/'>Back to Home</Link>
        </button>
        <button className='btn btn-primary'>
          <Link to='/products'>Continue Shopping</Link>
        </button>
      </section>
    </>
  )
}

export default ThankYou