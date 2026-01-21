const SECRET_KEY = "NZ_SEC_082cdb8785c84b229f694359d95b07d6";

// Optional: Initial configs
let vpnConfigs = [
  {
    "name": "Dialog Zoom",
    "v2ray": "nm-vless://Pr/jCdH3qj3XXeymFvwXvzRKoyljum4GN8zOsFYUdk4QE7gCp4JnupCScXhm8YB9fhxjjsoBjcm0H5UvqT3AUg72/nAmB94w7Ow3pl9MXJPXZiaUo7e13AL5/BL2tRHH4W3LN7KPLQS/XlLsqUc6ZacVEVQQTfKCIC/bmCW8YOCIPOB4bRS2g8xnFYT0K5Jezay3zjStp0cAdTuDp06cF2xr3f3KDHzQCOGQcSOR7b8=",
    "icon": "images/dialog.jpg"
  }
];

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if(request.method === "GET" && url.pathname === "/vpn") {
        return new Response(JSON.stringify({ vpn_configs: vpnConfigs }), { headers: { "Content-Type": "application/json" } });
    }

    if(request.method === "POST" && url.pathname === "/vpn") {
        const body = await request.json();
        if(body.key !== SECRET_KEY) return new Response("Unauthorized", { status: 401 });
        if(!body.vpn_configs) return new Response("No configs provided", { status: 400 });

        vpnConfigs = body.vpn_configs;
        return new Response("VPN configs updated!");
    }

    return new Response("Not found", { status: 404 });
  }
};
