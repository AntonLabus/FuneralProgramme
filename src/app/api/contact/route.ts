import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form data
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const message = formData.get('message') as string
    const serviceType = formData.get('serviceType') as string
    const urgency = formData.get('urgency') as string

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Submit to Netlify Forms using the fetch API
    const netlifyFormData = new FormData()
    netlifyFormData.append('form-name', 'contact')
    netlifyFormData.append('name', name)
    netlifyFormData.append('email', email)
    netlifyFormData.append('phone', phone || '')
    netlifyFormData.append('message', message)
    netlifyFormData.append('serviceType', serviceType || '')
    netlifyFormData.append('urgency', urgency || 'standard')

    const netlifyResponse = await fetch(`${process.env.DEPLOY_URL || 'https://localhost:3000'}/`, {
      method: 'POST',
      body: netlifyFormData,
    })

    if (netlifyResponse.ok) {
      return NextResponse.json(
        { message: 'Thank you for your message. We will respond within 24 hours.' },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'There was an error sending your message. Please try again or call us directly.' },
        { status: 500 }
      )
    }
  } catch {
    return NextResponse.json(
      { error: 'There was an error sending your message. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}
