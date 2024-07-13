function discordFunc() {
    const discordButton = document.getElementsByClassName('discordsocialstext')[0];
    navigator.clipboard.writeText('copperfork').then(function() {
        if (discordButton) {
            discordButton.innerHTML = "copied to clipboard! :3";
        }
    }).catch(function(err) {
        discordButton.innerHTML = "Failed to copy";
        console.error('Failed to copy: ', err);
    });
}
