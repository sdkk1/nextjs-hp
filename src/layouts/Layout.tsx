import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <div className='flex min-h-screen flex-col items-center justify-center font-mono text-sm text-gray-600'>
    <header>
      <nav className='flex h-14 w-screen items-center bg-gray-800 pl-16'>
        <div className='flex h-14 items-center space-x-4'>
          <Link href='/'>
            <a className='nav-link'>Home</a>
          </Link>
          <Link href='/blog'>
            <a className='nav-link'>Blog</a>
          </Link>
          <Link href='/contact'>
            <a className='nav-link'>Contact</a>
          </Link>
        </div>
      </nav>
    </header>

    <main className='flex w-screen flex-1 flex-col items-center justify-center'>
      {children}
    </main>

    <footer className='flex h-12 w-full items-center justify-center border-t'>
      <a
        className='flex items-center'
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
      </a>
    </footer>
  </div>
)

export default Layout
