import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Hero from '@/components/Hero'
import { ReactNode } from 'react'

// Define proper types for component props
interface MockMotionProps {
  children: ReactNode
  [key: string]: unknown
}

interface MockImageProps {
  alt: string
  [key: string]: unknown
}

interface MockLinkProps {
  children: ReactNode
  href: string
  [key: string]: unknown
}

// Mock framer-motion to avoid issues in test environment
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: MockMotionProps) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: MockMotionProps) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: MockMotionProps) => <p {...props}>{children}</p>,
  },
}))

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, src, ...props }: MockImageProps & { src?: string }) => (
    <div data-testid="mock-image" data-alt={alt} data-src={src} {...props} />
  ),
}))

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: MockLinkProps) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Honoring a Life.*Cherishing a Memory/i)
  })

  it('renders call-to-action buttons', () => {
    render(<Hero />)

    const getStartedButton = screen.getByRole('link', { name: /get started today/i })
    const galleryButton = screen.getByRole('link', { name: /view our gallery/i })

    expect(getStartedButton).toBeInTheDocument()
    expect(getStartedButton).toHaveAttribute('href', '/contact')

    expect(galleryButton).toBeInTheDocument()
    expect(galleryButton).toHaveAttribute('href', '/gallery')
  })

  it('renders descriptive text about the service', () => {
    render(<Hero />)

    const description = screen.getByText(/We create beautifully crafted funeral programmes/i)
    expect(description).toBeInTheDocument()
  })

  it('renders trust indicators', () => {
    render(<Hero />)

    expect(screen.getByText(/24-Hour Response/i)).toBeInTheDocument()
    expect(screen.getByText(/Compassionate Support/i)).toBeInTheDocument()
    expect(screen.getByText(/Custom Designs/i)).toBeInTheDocument()
    expect(screen.getByText(/Easy Process/i)).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Hero />)

    const getStartedButton = screen.getByRole('link', { name: /get started today/i })
    const galleryButton = screen.getByRole('link', { name: /view our gallery/i })

    expect(getStartedButton).toHaveAttribute('aria-label')
    expect(galleryButton).toHaveAttribute('aria-label')
  })
})
