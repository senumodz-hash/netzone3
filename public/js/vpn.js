async function copyV2ray(config) {
    navigator.clipboard.writeText(config);
    alert("Copied to clipboard!");
}

fetch('https://your-worker-domain.workers.dev/vpn')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('vpnSection');
    const grid = container.querySelector('.contact-grid');

    data.vpn_configs.forEach(vpn => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${vpn.icon}" alt="${vpn.name}">
        <h3>${vpn.name}</h3>
        <button class="btn" onclick="copyV2ray('${vpn.v2ray}')">Copy Config</button>
      `;
      grid.appendChild(card);
    });
  });
