# Waitlist System Setup Guide

This guide will help you set up the waitlist system for your Vero landing page.

## Overview

The waitlist system includes:

- A responsive waitlist form with email validation
- Supabase integration for storing email addresses
- Smooth scrolling from CTA buttons to the waitlist form
- Proper error handling and success states
- Accessibility features

## Supabase Setup

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be fully initialized

### 2. Set Up Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project dashboard under Settings > API.

### 3. Create the Waitlist Table

Run the following SQL in your Supabase SQL editor (or use the migration file):

```sql
-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert into waitlist
CREATE POLICY "Allow public waitlist signups" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow reading waitlist entries (for admin purposes)
CREATE POLICY "Allow reading waitlist entries" ON waitlist
  FOR SELECT
  USING (true);
```

## Features

### WaitlistForm Component

- **Location**: `src/components/WaitlistForm.tsx`
- **Features**:
  - Email validation
  - Loading states with spinner
  - Success/error feedback
  - Accessibility support
  - Responsive design
  - Duplicate email handling

### CTA Button Integration

All CTA buttons throughout the site now scroll smoothly to the waitlist form:

- Header "Join Waitlist" button
- Hero "Join the Waitlist" button
- CTA section "Join the Waitlist" button
- ProductShowcase "Join Waitlist" button

### Form States

1. **Idle**: Default state with email input and submit button
2. **Loading**: Shows spinner and "Joining..." text
3. **Success**: Shows green checkmark and "You're on the waitlist 🎉"
4. **Error**: Shows red error message for validation or duplicate emails

## Testing

### Without Supabase (Simulation Mode)

If Supabase environment variables are not set, the form will:

- Simulate a 1-second API call
- Show success message
- Log the email to console
- Work fully for testing purposes

### With Supabase

1. Set up your environment variables
2. Create the waitlist table
3. Test form submission
4. Check your Supabase dashboard to see submitted emails

## Accessibility Features

- Proper `label` and `htmlFor` attributes
- ARIA roles for error and success states
- Screen reader friendly
- Keyboard navigation support
- Focus management

## Styling

The form uses your existing design system:

- Primary blue color: `#015FFC`
- Consistent spacing and typography
- Responsive design (full-width on mobile, inline on desktop)
- Hover and focus states
- Loading spinner animation

## Troubleshooting

### Common Issues

1. **Form not submitting**: Check Supabase environment variables
2. **Duplicate email errors**: This is expected behavior - emails must be unique
3. **Styling issues**: Ensure Tailwind CSS is properly configured
4. **Scroll not working**: Check that the waitlist form has `id="waitlist"`

### Environment Variables Not Working

If you're having issues with environment variables:

1. Ensure `.env.local` is in the project root
2. Restart your development server after adding variables
3. Check that variable names start with `NEXT_PUBLIC_`
4. Verify the values are correct in your Supabase dashboard

## Customization

### Changing Form Text

Edit the text in `src/components/WaitlistForm.tsx`:

- Button text: "Join the Waitlist"
- Success message: "You're on the waitlist 🎉"
- Error messages: Various validation messages

### Styling Changes

The form uses Tailwind classes that match your design system. Key classes:

- Primary button: `bg-[#015FFC]`
- Success state: `bg-green-50 border-green-200 text-green-700`
- Error state: `bg-red-50 border-red-200 text-red-700`

### Adding More Fields

To add more fields to the waitlist:

1. Update the Supabase table schema
2. Add form fields to `WaitlistForm.tsx`
3. Update the form submission logic
4. Add validation for new fields
