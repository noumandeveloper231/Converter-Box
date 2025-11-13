/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://converterbox.online', // 👈 Replace with your actual site URL
  generateRobotsTxt: true, // Generate robots.txt file too
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404', '/server-sitemap.xml'], // Optional
};
