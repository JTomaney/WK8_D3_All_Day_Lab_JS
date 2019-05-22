const PubSub = require('../helpers/pub_sub.js');
const BucketView = require('./bucket_view.js');

const BucketListView = function(container){
    this.container = container;
}

BucketListView.prototype.bindEvents = function(){
    PubSub.subscribe('BucketList:data-loaded', (evt) => {
       this.render(evt.detail);
    })
}

BucketListView.prototype.render = function(bucketList){
    this.container.innerHTML = '';
    const bucketView = new BucketView(this.container);
    bucketList.forEach((bucket) => bucketView.render(bucket))
};


module.exports = BucketListView;