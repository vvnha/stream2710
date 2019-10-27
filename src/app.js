console.log("xin chao");
const openStream = require('./openStream');
const playVideo = require('./playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');

openStream(function (stream) {
    playVideo(stream, 'localStream');
    //--------------------------------
    const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream });
    p.on('signal', token => {
        $('#txtMySignal').val(JSON.stringify(token));
    });

    /* gửi tin nhắn 
    p.on('connect', ()=> {
        console.log('connected');
        setInterval(()=> p.send(Math.random()) , 2000 );
    });
    */
    /* lắng nghe và nhận tin
    p.on('data', data => console.log('Nhan dư lieu: ' + data));
    */

    $('#btnConnect').click(() => {
        const friendSignal = JSON.parse($('#txtFriendSignal').val());
        p.signal(friendSignal);

    });

    p.on('stream', friendStream => {
        playVideo(friendStream, 'friendStream');
    });
});
