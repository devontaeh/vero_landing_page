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
-- You may want to restrict this further based on your needs
CREATE POLICY "Allow reading waitlist entries" ON waitlist
  FOR SELECT
  USING (true);
