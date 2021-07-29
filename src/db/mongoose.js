const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

// const User = mongoose.model('User', {
//   name: {
//     type: String
//   },
//   age: {
//     type: Number
//   }
// });

// const me = new User({
//   name: 'Ankur',
//   age: '20'
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log('Error!', error);
//   });

//Goal : create a model for tasks
// define a new instance of the model
// save the model to the the database
// test your work

//

// validation
// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is invalid');
//       }
//     }
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be a postive number');
//       }
//     }
//   }
// });

// const me = new User({
//   name: '   Ankur  ',
//   email: 'ankur.sh2011@gmail.com   '
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log('Error!', error);
//   });

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const task = new Task({
  description: 'Learn the Mongoose library',
  completed: false
});

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
