const BucketListFormView = require('./views/bucket_list_form_view.js');
const BucketList = require('./models/bucket_list.js')

document.addEventListener('DOMContentLoaded', () => {
   const bucketListForm = document.querySelector('form#bucketlistForm');
   const bucketListFormView = new BucketListFormView(bucketlistForm);
   bucketListFormView.bindEvents();

   const bucketURL = 'http://localhost:3000/api/bucketlist'
   const bucketList = new BucketList();
//    bucketList.getData();
   bucketList.bindEvents();
})