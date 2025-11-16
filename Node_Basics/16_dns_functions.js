const dns = require("dns");

// 1. dns.lookup() - hostname to IP
dns.lookup("google.com", (err, address, family) => {
  if (err) throw err;
  console.log("1. dns.lookup()");
  console.log("Address:", address, "Family:", family);
  console.log("------------------------------------");
});

// 2. dns.resolve4() - resolve IPv4 addresses
dns.resolve4("google.com", (err, addresses) => {
  if (err) throw err;
  console.log("2. dns.resolve4()");
  console.log("IPv4 Addresses:", addresses);
  console.log("------------------------------------");

  // 3. dns.reverse() - reverse lookup (IP to domain)
  dns.reverse(addresses[0], (err, hostnames) => {
    if (err) throw err;
    console.log("3. dns.reverse()");
    console.log("Hostnames for", addresses[0], ":", hostnames);
  });
});
