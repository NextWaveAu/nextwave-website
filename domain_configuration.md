# Domain Configuration Guide for NextWave.au

This document provides instructions for connecting your GoDaddy domain (NextWave.au) to your Vercel-hosted Next.js website.

## Prerequisites

- GoDaddy account with ownership of the NextWave.au domain
- Vercel account with the NextWave website deployed
- Access to GoDaddy DNS management

## Step 1: Deploy to Vercel

1. Push your Next.js project to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Vercel account at https://vercel.com
3. Click "New Project" and import your Git repository
4. Configure the project with the following settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Environment Variables: Add any required environment variables
5. Click "Deploy"
6. Once deployed, Vercel will provide a default domain (e.g., `nextwave-website.vercel.app`)

## Step 2: Add Your Custom Domain in Vercel

1. In your Vercel project dashboard, navigate to "Settings" > "Domains"
2. Enter your domain: `nextwave.au`
3. Click "Add"
4. Vercel will provide DNS configuration instructions for connecting your domain

## Step 3: Configure DNS Settings in GoDaddy

1. Log in to your GoDaddy account
2. Navigate to "My Products" > "Domains" and select `nextwave.au`
3. Click "DNS" or "Manage DNS"
4. You'll need to add the following DNS records:

### Option A: Using A Records (Recommended)

Add these A records to point your domain to Vercel's servers:

| Type | Name | Value           | TTL    |
|------|------|-----------------|--------|
| A    | @    | 76.76.21.21     | 1 hour |
| A    | www  | 76.76.21.21     | 1 hour |

### Option B: Using CNAME Records

If you prefer using CNAME records (note: this won't work for the root domain without GoDaddy's domain forwarding):

| Type  | Name | Value                        | TTL    |
|-------|------|------------------------------|--------|
| CNAME | www  | nextwave-website.vercel.app  | 1 hour |

Then set up domain forwarding from the root domain to www:
1. In GoDaddy domain settings, find "Forwarding" or "Redirect Domain"
2. Set up forwarding from `nextwave.au` to `www.nextwave.au`

## Step 4: Verify Domain Ownership in Vercel

1. In your Vercel project's domain settings, you'll see verification instructions
2. Follow the instructions to verify domain ownership
3. This typically involves adding a TXT record to your DNS configuration:

| Type | Name                  | Value                          | TTL    |
|------|----------------------|--------------------------------|--------|
| TXT  | _vercel              | (provided by Vercel)           | 1 hour |

## Step 5: Configure SSL/HTTPS

1. Vercel automatically provisions SSL certificates for your domain
2. This process begins after DNS propagation and may take up to 24 hours
3. You can check the status in your Vercel domain settings

## Step 6: Test Your Domain

1. After DNS propagation (which can take up to 48 hours, but often completes within a few hours):
   - Visit `https://nextwave.au` to ensure it loads your website
   - Check that HTTPS is working properly
   - Test that www and non-www versions of the domain both work

## Troubleshooting

### Domain Not Connecting

- Verify DNS records are correctly configured in GoDaddy
- Check for any conflicting DNS records
- Ensure DNS propagation has completed (can take up to 48 hours)
- Verify domain ownership in Vercel

### SSL Certificate Issues

- Ensure there are no CAA records blocking certificate issuance
- Verify that DNS propagation has completed
- Check Vercel's domain settings for any SSL-related errors

### Website Not Loading Correctly

- Test the Vercel-provided domain (e.g., `nextwave-website.vercel.app`) to ensure the site works there
- Check for any redirect loops
- Verify that all assets are loading with correct paths

## Additional Configuration

### Email for Your Domain

GoDaddy domain registration includes email forwarding options:

1. In GoDaddy domain settings, navigate to "Email" > "Email Forwarding"
2. Set up email forwarding for addresses like `contact@nextwave.au` to your actual email address

### Domain Privacy

Ensure domain privacy protection is enabled in your GoDaddy settings to protect your personal information in WHOIS records.

## Maintenance

- Renew your domain registration with GoDaddy before expiration
- Vercel will automatically renew SSL certificates
- Periodically check your DNS configuration for any issues

## Support Resources

- GoDaddy Support: https://www.godaddy.com/help
- Vercel Support: https://vercel.com/support
- Next.js Documentation: https://nextjs.org/docs
