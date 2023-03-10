const url = new URL(window.location.href);
const origin = url.origin;
const recordingId = url.pathname.split("/")[4];
// mp4 file url
const mp4_url = `${origin}/recording/${recordingId}.mp4`;
// mp4 player url
const mp4_player_url = `${origin}/mp4/?meetingId=${recordingId}`;

function if_url_exists(url, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=UTF-8"
    );
    request.setRequestHeader("Accept", "*/*");
    request.onprogress = function (event) {
        let status = event.target.status;
        let statusFirstNumber = status.toString()[0];
        switch (statusFirstNumber) {
            case "2":
                request.abort();
                return callback(true);
            default:
                request.abort();
                return callback(false);
        }
    };
    request.send("");
}

function dowload_button() {
    var element = document.getElementsByClassName("vjs-control-bar");
    var div = document.createElement("div");
    var a = document.createElement("a");
    var span = document.createElement("span");
    a.setAttribute("href", mp4_url);
    a.setAttribute("target", "_blank");
    a.style.cssText = "text-decoration: none;color: white;";
    div.classList = "vjs-remaining-time vjs-time-control vjs-control";
    a.appendChild(document.createTextNode("Download"));
    span.className = "";
    span.appendChild(a);
    div.appendChild(span);
    element[0].appendChild(div);
}

function check_mp4() {
    if_url_exists(mp4_url, function (exists) {
        console.log("MP4 present? :", exists);

        if (exists) {
            window.location.href = mp4_player_url
        }
    });
}

window.onload = () => check_mp4()