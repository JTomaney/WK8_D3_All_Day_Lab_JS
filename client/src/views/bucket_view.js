const PubSub = require('../helpers/pub_sub.js')

const BucketView = function(container){
    this.container = container;
}

BucketView.prototype.render = function(bucket){
  const bucketContainer = document.createElement('div');
  bucketContainer.id = 'bucket';

  const bucketActivity = this.createHeading(bucket.thingToDo);
  bucketContainer.appendChild(bucketActivity);

  this.container.appendChild(bucketContainer);
}

BucketView.prototype.createHeading = function (textContent){
    const heading = document.createElement('h5');
    heading.textContent = textContent;
    return heading;
}

module.exports = BucketView;