// this config we use if we will fwetch the data from local file
const dev = process.env.NODE_ENV !== "production"
export const server =  dev ? "http://localhost:3000" : "http://yourwebsite.com"