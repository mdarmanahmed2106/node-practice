const { hostname: systemHostname } = require('os')
const { URL } = require('url')

const myurl = new URL('https://www.example.com/path?query=value#fragment')

console.log('URL Hostname:', myurl.hostname)
console.log('System Hostname:', systemHostname)
console.log('Pathname:', myurl.pathname)
console.log('Search:', myurl.search)
console.log('Hash:', myurl.hash)
console.log('Protocol:', myurl.protocol)
