# Deployment Guide for Levity Breakfast House Website

## Pre-Deployment Checklist

### ✅ Content Verification
- [ ] All restaurant information is accurate
- [ ] Menu items and prices are current
- [ ] Contact information is correct
- [ ] Hours of operation are up to date
- [ ] Social media links work properly

### ✅ Technical Verification
- [ ] All pages load without errors
- [ ] Navigation works on all devices
- [ ] Forms function correctly
- [ ] Images load properly
- [ ] External links open in new tabs

### ✅ Performance Optimization
- [ ] Images are optimized for web
- [ ] CSS and JS are minified
- [ ] Unused code is removed
- [ ] Loading times are acceptable

## Deployment Options

### Option 1: Netlify (Recommended for Beginners)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Your site will be live instantly

3. **Custom Domain** (Optional):
   - Purchase domain from registrar
   - Add custom domain in Netlify settings
   - Configure DNS records

### Option 2: Vercel

1. **Connect GitHub**:
   - Push code to GitHub repository
   - Connect Vercel to GitHub
   - Auto-deploy on every push

2. **Manual Deploy**:
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel --prod`

### Option 3: Traditional Web Hosting

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload files**:
   - Upload contents of `dist` folder to web server
   - Ensure index.html is in root directory

3. **Configure server**:
   - Set up URL rewriting for SPA routing
   - Enable HTTPS
   - Configure caching headers

## Domain Setup

### Recommended Domain Names
- `levitybreakfasthouse.com`
- `levitybreakfast.com`
- `levitynorman.com`

### DNS Configuration
```
Type    Name    Value
A       @       [Your server IP]
CNAME   www     [Your domain]
```

## SSL Certificate

Most hosting providers offer free SSL certificates:
- **Netlify**: Automatic SSL
- **Vercel**: Automatic SSL
- **Traditional hosting**: Let's Encrypt or provider SSL

## Performance Monitoring

### Tools to Monitor
- Google PageSpeed Insights
- GTmetrix
- Lighthouse (built into Chrome)

### Key Metrics to Track
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Time to Interactive (TTI)

## SEO Setup

### Google Business Profile
1. Claim your business listing
2. Add accurate information
3. Upload photos
4. Encourage customer reviews

### Local SEO
- Add structured data markup
- Submit to local directories
- Optimize for "breakfast Norman OK" keywords

### Analytics Setup
1. **Google Analytics**:
   - Create account
   - Add tracking code to index.html
   - Set up goals and conversions

2. **Google Search Console**:
   - Verify website ownership
   - Submit sitemap
   - Monitor search performance

## Maintenance Schedule

### Weekly
- [ ] Check website functionality
- [ ] Monitor loading speeds
- [ ] Review analytics data
- [ ] Update social media links

### Monthly
- [ ] Update menu items/prices
- [ ] Check for broken links
- [ ] Review and respond to online reviews
- [ ] Backup website files

### Quarterly
- [ ] Update dependencies
- [ ] Review and optimize performance
- [ ] Update content and photos
- [ ] Security audit

## Emergency Procedures

### Website Down
1. Check hosting provider status
2. Verify DNS settings
3. Contact hosting support
4. Use backup/cached version if available

### Content Updates
1. Update source files
2. Test changes locally
3. Deploy to staging (if available)
4. Deploy to production

## Contact Information for Technical Support

### Hosting Issues
- Document hosting provider contact info
- Keep login credentials secure
- Maintain backup of all files

### Domain Issues
- Document registrar contact info
- Keep domain renewal dates tracked
- Set up auto-renewal if possible

## Success Metrics

### Website Performance
- Page load time < 3 seconds
- Mobile-friendly score > 95%
- Accessibility score > 90%

### Business Metrics
- Increase in phone calls
- More foot traffic
- Online review mentions
- Social media engagement

## Post-Launch Tasks

### Week 1
- [ ] Monitor for any technical issues
- [ ] Set up Google Analytics goals
- [ ] Submit to search engines
- [ ] Share on social media

### Month 1
- [ ] Analyze visitor behavior
- [ ] Gather customer feedback
- [ ] Optimize based on data
- [ ] Plan content updates

### Ongoing
- [ ] Regular content updates
- [ ] SEO optimization
- [ ] Performance monitoring
- [ ] Security updates

---

**Remember**: A website is never "finished" - it requires ongoing maintenance and updates to remain effective and secure.
