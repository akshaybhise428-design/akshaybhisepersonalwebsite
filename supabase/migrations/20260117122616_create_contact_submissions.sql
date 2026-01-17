/*
  # Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text) - Name of the person contacting
      - `email` (text) - Email address
      - `phone_number` (text) - Phone number
      - `business_website` (text, optional) - Website URL if provided
      - `services_required` (text) - Services they're interested in
      - `message` (text) - Additional message
      - `created_at` (timestamptz) - Submission timestamp
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting contact submissions (public access for form submissions)
    - Add policy for viewing submissions (authenticated admin only)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text NOT NULL,
  business_website text DEFAULT '',
  services_required text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);