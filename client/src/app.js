const BucketListFormView = require('./views/bucket_list_form_view.js');
const BucketList = require('./models/bucket_list.js')
const BucketListView = require('./views/bucket_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
   const bucketListForm = document.querySelector('form#bucketlistForm');
   const bucketListFormView = new BucketListFormView(bucketlistForm);
   bucketListFormView.bindEvents();

   const bucketListContainer = document.querySelector('div#bucketlistList');
   const bucketListView = new BucketListView(bucketListContainer);
   bucketListView.bindEvents();

   const bucketURL = 'http://localhost:3000/api/bucketlist'
   const bucketList = new BucketList(bucketURL);
   bucketList.bindEvents();
   bucketList.getData();
})