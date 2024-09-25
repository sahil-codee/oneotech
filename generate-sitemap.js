const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const path = require("path");

const hostname = "https://www.oneotechenterprises.com";

const urls = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/about-us", changefreq: "monthly", priority: 0.8 },
  { url: "/contact-us", changefreq: "monthly", priority: 0.8 },
  { url: "/products", changefreq: "monthly", priority: 0.8 },
  {
    url: "/black-tea-exporters-in-india",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/products/leading-nylon-cable-tie-exporters-in-india",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/products/leading-cable-tie-mounts-exporters-in-india",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/products/leading-din-rail-supplier-in-india",
    changefreq: "weekly",
    priority: 0.8,
  },
  { url: "/product-catalog", changefreq: "weekly", priority: 0.8 },
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
