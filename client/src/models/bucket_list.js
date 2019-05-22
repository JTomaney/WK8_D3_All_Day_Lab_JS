const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js')

const BucketList = function(url){
    this.url = url;
}

BucketList.prototype.bindEvents = function(){
    PubSub.subscribe('BucketListView:new-bucket-submitted', (evt)=> {
        this.postBucket(evt.detail);
    })
    
    PubSub.subscribe('BucketView:bucket-deleteOne', (evt) => {
        this.deleteBucket(evt.detail);
    })

    PubSub.subscribe('BucketView:bucket-checkOff', (evt) => {
        this.checkOffBucket(evt.detail);
    })
}

BucketList.prototype.getData = function(){
    const request = new RequestHelper(this.url)
    request.get()
      .then((bucketlist) => {
          PubSub.publish('BucketList:data-loaded', bucketlist)
      })
    .catch(console.error)
}

BucketList.prototype.postBucket = function(bucket){
    const request = new RequestHelper(this.url);
    request.post(bucket)
      .then((bucketlist) => {
          PubSub.publish('BucketList:data-loaded', bucketlist)
      })
    .catch(console.error)
}

BucketList.prototype.deleteBucket = function(bucketID){
    const request = new RequestHelper(this.url);
    request.delete(bucketID)
      .then((bucketlist) => {
          PubSub.publish('BucketList:data-loaded', bucketlist)
      })
      .catch(console.error)
}  

BucketList.prototype.checkOffBucket = function(bucketID){
    const request = new RequestHelper(this.url);
    request.patch(bucketID)
      .then((bucketlist) => {
          PubSub.publish('BucketList:data-loaded', bucketlist)
      })
      .catch(console.error)
} 

module.exports = BucketList;