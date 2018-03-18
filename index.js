'use strict';

var IPFS = require('ipfs-api');

var ipfs = IPFS();

function store () {
    var toStore = document.getElementById('source').value;
    ipfs.add(Buffer.from(toStore), function (err, res) {
        if (err || !res) {
            return console.error('ipfs add error', err, res)
        }

        res.forEach(function (file) {
            if (file && file.hash) {
                console.log('successfully stored', file.hash)
                display(file.hash)
            }
        })
    })
}

function display (hash) {
    // buffer: true results in the returned result being a buffer rather than a stream
    ipfs.cat(hash, {buffer: true}, function (err, res) {
        if (err || !res) {
            return console.error('ipfs cat error', err, res)
        }

        document.getElementById('hash').innerText = hash
        document.getElementById('content').innerText = res.toString()
    })
}

function upload() {
    console.log("Upload");
    var file = document.getElementById('inputId').value;
    console.log("file")
    console.log(file)

    // const buf = buffer.Buffer(file)
    // console.log("buf")
    // console.log(buf)

    const reader = new FileReader();
    reader.onloadend = function() {
        // const ipfs = window.IpfsApi('localhost', 5001) // Connect to IPFS
        const buf = buffer.Buffer(reader.result) // Convert data into buffer
        console.log("buf")
        console.log(buf)

        ipfs.add(buf, function (err, res) {
            console.log("ipfs add")
            if (err || !res) {
                return console.error('ipfs add error', err, res)
            }


            res.forEach(function (file) {
                if (file && file.hash) {
                    console.log('successfully stored', file.hash)
                    display(file.hash)
                }
            })
        })
    }

}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('store').onclick = store;
    document.getElementById('uploadButtonId').onclick = upload;
});