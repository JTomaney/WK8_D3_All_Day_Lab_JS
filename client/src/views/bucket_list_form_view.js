const PubSub = require('../helpers/pub_sub.js');


const BucketListFormView = function(form){
   this.form = form; 
}


BucketListFormView.prototype.bindEvents = function(){
    this.form.addEventListener('submit', (evt) => {
        this.handleSubmit(evt);
    })
}

BucketListFormView.prototype.handleSubmit = function(evt){
    evt.preventDefault();
    const newListItem = this.createNewListItem(evt.target);
    console.log(evt.target)
    PubSub.publish('BucketListView:new-bucket-submitted', newListItem)
    evt.target.reset();
}

BucketListFormView.prototype.createNewListItem = function(form){
    const newListItem = {
        thingToDo: form.thingToDo.value,
        status: 'Pending'
    }
  return newListItem;
}

module.exports = BucketListFormView;