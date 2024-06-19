const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const path = require("path");

const hostname = "https://www.oneotechenterprises.com";

const urls = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contactus", changefreq: "monthly", priority: 0.8 },
  { url: "/products", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
  // Add additional pages here
];

(async () => {
  const sitemapStream = new SitemapStream({ hostname });

  urls.forEach((url) => {
    sitemapStream.write(url);
  });

  sitemapStream.end();

  const sitemapData = await streamToPromise(sitemapStream);

  const publicDir = path.resolve(__dirname, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(
    path.resolve(publicDir, "sitemap.xml"),
    sitemapData.toString()
  );

  console.log("Sitemap generated and saved to public/sitemap.xml");
})();
