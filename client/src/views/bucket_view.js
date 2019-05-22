const PubSub = require('../helpers/pub_sub.js')

const BucketView = function(container){
    this.container = container;
}

BucketView.prototype.render = function(bucket){
  const bucketContainer = document.createElement('div');
  bucketContainer.id = 'bucket';

  const bucketActivity = this.createHeading(bucket.thingToDo);
  bucketContainer.appendChild(bucketActivity);

  const bucketStatus = this.createStatus(bucket.status);
  bucketContainer.appendChild(bucketStatus);

  const bucketCheckOff = this.createCheckButton(bucket._id);
  bucketContainer.appendChild(bucketCheckOff);

  const bucketDeleteOne = this.createDeleteButton(bucket._id);
  bucketContainer.appendChild(bucketDeleteOne);
  

  this.container.appendChild(bucketContainer);
}

BucketView.prototype.createHeading = function (textContent){
    const heading = document.createElement('h3');
    heading.textContent = textContent;
    return heading;
}

BucketView.prototype.createDeleteButton = function(bucketID){
    const button = document.createElement('button');
    button.classList.add('delete-btn');
    button.textContent = ''
    button.value = bucketID;

    button.addEventListener('click', (evt) => {
        PubSub.publish('BucketView:bucket-deleteOne', evt.target.value)
    })
  return button
}

BucketView.prototype.createCheckButton = function(bucketID){
    const button = document.createElement('button');
    button.classList.add('check-btn');
    button.textContent = 'Check-Off'
    button.value = bucketID;

    button.addEventListener('click', (evt) => {
        PubSub.publish('BucketView:bucket-checkOff', evt.target.value)
    })
  return button
}

BucketView.prototype.createStatus = function(bucketStatus){
    const status = document.createElement('p');
    status.textContent = bucketStatus

    return status;
}

module.exports = BucketView;