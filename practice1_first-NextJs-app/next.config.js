/** @type {import('next').NextConfig} */
module.exports = {
  // output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [getCmsPath(process.env.IMAGE_PATH)],
  },
};

function getCmsPath({ urlString }) {
  const { hostname, pathname, protocol, port } = new URL(urlString);
  return {
    hostname,
    pathname,
    protocol,
    port,
  };
}
