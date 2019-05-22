const RequestHelper = function (url) {
    this.url = url;
}

RequestHelper.prototype.post = function(payload){
    return fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => response.json());
}

module.exports = RequestHelper;