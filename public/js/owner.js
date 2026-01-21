const SECRET_KEY = "NZ_SEC_082cdb8785c84b229f694359d95b07d6";

document.getElementById('loginBtn').addEventListener('click', () => {
    const pw = document.getElementById('password').value;
    if (pw === SECRET_KEY) {
        alert("Login successful!");
        document.getElementById('updateSection').style.display = 'block';
    } else {
        alert("Wrong key!");
    }
});

document.getElementById('updateBtn').addEventListener('click', async () => {
    const newConfigs = document.getElementById('vpnConfigsTextarea').value;
    try {
        const response = await fetch('https://your-worker-domain.workers.dev/vpn', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key: SECRET_KEY, vpn_configs: JSON.parse(newConfigs) })
        });
        alert(await response.text());
    } catch(e){
        alert('Update failed: '+e);
    }
});
