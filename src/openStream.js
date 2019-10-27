
async function openStream(cb) {
    let stream = null;
    try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
        console.log(stream);
        cb(stream);
    } catch (err) {
        err => console.log(err);
    }
}
module.exports = openStream;