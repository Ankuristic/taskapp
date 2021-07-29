// CRUD OPERATION create read  update and delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
const { MongoClient, ObjectID } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })


    // gOAL: INSERT 3 TASKS INTO ANEW TASKS COLLECTION
    // 1. USE INSERTMany to insert three documents
    // 2. description (string), completed boolean
    // setup the callback to handle error or prints ops
    // run the script
    // refresh the database and view data in tasks collection 

   
//     db.collection('tasks').insertMany([
//         {
//             description: 'Clean the house',
//             completed: true
//         },{
//             description: 'Renew inspection',
//             completed: false
//         },{
//             description: 'Pot plants',
//             completed: false
//         }
//     ], (error, result) => {
//         if (error) {
//             return console.log('Unable to insert tasks!')
//         }

//         console.log(result.ops)
// })


// db.collection('users').findOne({ _id: new ObjectID("60fef8039657f42c84e0bf1b") }, (error, user) => {
//         if (error) {
//             return console.log('Unable to fetch')
//         }

//         console.log(user)
//     })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })
  // Goal : use find and findone withe the tasks
   // 1. use findone to fetch the last task by its  id
   // 2. use find to fetch all the tasks are not completed ( print docs to console)
   // 3 . test your work

//    db.collection('tasks').findOne({ _id: new ObjectID("60fefe44f1bbb5ebc72e5bd5") }, (error, task) => {
//     console.log(task)
// })

// db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
//     console.log(tasks)
// })


db.collection('users').updateOne({
        _id: new ObjectID("5c0fe6634362c1fb75b9d6b5")
    }, {
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})
