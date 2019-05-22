const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js')

const BucketList = function(url){
    this.url = url;
}

BucketList.prototype.bindEvents = function(){
    PubSub.subscribe('BucketListView:new-bucket-submitted', (evt)=> {
        this.postBucket(evt.detail);
    })
}

BucketList.prototype.postBucket = function(bucket){
    const request = new RequestHelper(this.url);
    request.post(bucket)
      .then((bucket) => {
          PubSub.publish('BucketList:data-loaded', bucket)
      })
}

module.exports = BucketList;