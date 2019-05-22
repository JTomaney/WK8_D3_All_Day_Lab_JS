const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {
   
   const router = express.Router();

   router.get('/', (req, res) => {
       collection
         .find()
         .toArray()
         .then(docs => res.json(docs))
         .catch(console.error)
   })


   router.post('/', (req, res) => {
       const newData = req.body;
       collection
        .insertOne(newData)
        .then(() => collection.find().toArray())
        .then(docs => res.json(docs));
   })

   router.delete('/:id', (req, res) => {
       const id = req.params.id
       collection.deleteOne({_id: ObjectID(id)})
         .then(() => collection.find().toArray())
         .then(docs => res.json(docs)); 
   })

   router.patch('/:id', (req, res) => {
       const id = req.params.id
      //  const body = req.body.status = `Completed`
       collection.updateOne(
         {_id: ObjectID(id)},
         {$set: {status: 'Completed'} }
         )
         .then(() => collection.find().toArray())
         .then(docs => res.json(docs)); 
   })

  return router;
}

module.exports = createRouter;