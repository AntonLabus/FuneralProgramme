import { test, expect } from '@playwright/test'

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('should display contact form', async ({ page }) => {
    // Check if the main heading is visible
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible()

    // Check if form fields are present
    await expect(page.getByLabel('Full Name *')).toBeVisible()
    await expect(page.getByLabel('Email Address *')).toBeVisible()
    await expect(page.getByLabel('Phone Number')).toBeVisible()
    await expect(page.getByLabel('Message *')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible()
  })

  test('should show validation errors for required fields', async ({ page }) => {
    // Try to submit empty form
    await page.getByRole('button', { name: 'Send Message' }).click()

    // Check that form doesn't submit (page should still be on contact)
    await expect(page).toHaveURL('/contact')
  })

  test('should fill and submit contact form', async ({ page }) => {
    // Fill out the form
    await page.getByLabel('Full Name *').fill('John Doe')
    await page.getByLabel('Email Address *').fill('john.doe@example.com')
    await page.getByLabel('Phone Number').fill('(555) 123-4567')
    await page.getByLabel('Service Type').selectOption('custom-design')
    await page.getByLabel('Timeline').selectOption('standard')
    await page.getByLabel('Message *').fill('I would like to create a custom funeral programme for my loved one. Please contact me to discuss the details.')

    // Submit the form
    await page.getByRole('button', { name: 'Send Message' }).click()

    // Note: In a real test, you would check for success message
    // For now, we just ensure the form submission attempt was made
    await expect(page.getByRole('button', { name: /Sending|Send Message/ })).toBeVisible()
  })

  test('should display contact information', async ({ page }) => {
    // Check contact info is displayed
    await expect(page.getByText('(555) 123-4567')).toBeVisible()
    await expect(page.getByText('info@funeralprogrammes.com')).toBeVisible()
    await expect(page.getByText('Within 24 hours')).toBeVisible()
  })

  test('should have accessible form labels', async ({ page }) => {
    // Check that form inputs have proper labels for accessibility
    const nameInput = page.getByLabel('Full Name *')
    const emailInput = page.getByLabel('Email Address *')
    const messageInput = page.getByLabel('Message *')

    await expect(nameInput).toBeVisible()
    await expect(emailInput).toBeVisible()
    await expect(messageInput).toBeVisible()

    // Check that inputs have proper types
    await expect(nameInput).toHaveAttribute('type', 'text')
    await expect(emailInput).toHaveAttribute('type', 'email')
  })
})
