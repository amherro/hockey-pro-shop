import { Link } from 'react-router-dom'
import Header from '../components/Header'

const ThankYou = () => {
  return (
    <>
      <Header />
      <section className='py-20 pb-12 mx-5'>
        <h3 className='text-center font-bold text-2xl pb-4'>Thank you for your order!</h3>
        <h4 className='text-center font-bold text-xl'>We&apos;ll begin fulfilling it and email you when it&apos;s on the way.</h4>
      </section>
      <section className='flex justify-center pb-10'>
        <button className='btn bg-blue-700 text-white mr-2 border-none'>
          <Link to='/'>Back to Home</Link>
        </button>
        <button className='btn bg-blue-700 text-white border-none'>
          <Link to='/products'>Continue Shopping</Link>
        </button>
      </section>
    </>
  )
}

export default ThankYou