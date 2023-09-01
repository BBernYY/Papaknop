const WEBHOOK_URL = secret
function awaken(){
    var request = new XMLHttpRequest();
    request.open("POST", WEBHOOK_URL);
    // again, replace the url in the open method with yours
    request.setRequestHeader('Content-type', 'application/json');

    // var myEmbed = {
    // author: {
    //     name: ""
    // },
    // title: "Papaknop",
    // description: "Ga naar papa!!1!1!1",
    // color: hexToDecimal("#ff0000")
    // }

    var params = {
    username: "Papaknop",
    // embeds: [ myEmbed ],
    content: "$start C:\\Users\\HP\\Files\\Projects\\Papaknop\\notify.vbs\ "
    }

    request.send(JSON.stringify(params));

    // function that converts a color HEX to a valid Discord color
    function hexToDecimal(hex) {
    return parseInt(hex.replace("#",""), 16)
    }

}