// const express = require('express');
// require('./db/mongoose');
// const User = require('./models/user');
// const Task = require('./models/task');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// // app.post('/users', (req, res) => {
// //   const user = new User(req.body);

// //   user
// //     .save()
// //     .then(() => {
// //       res.send(user);
// //     })
// //     .catch((e) => {
// //       res.status(400).send(e);
// //     });
// // });

// app.post('/users', async (req, res) => {
//   const user = new User(req.body);

//   try {
//     await user.save();
//     res.status(201).send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// //Goal : setup the task creation point
// // 1. create  a seprate file for the task model (load it into the task.js)
// //2. create the task creation endpoint
// //3. test the endpoint from postman with good and bad data
// app.post('/tasks', (req, res) => {
//   const task = new Task(req.body);

//   task
//     .save()
//     .then(() => {
//       res.status(201).send(task);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

// app.get('/users', (req, res) => {
//   User.find({})
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get('/users/:id', (req, res) => {
//   const _id = req.params.id;

//   User.findById(_id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send();
//       }

//       res.send(user);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// //Goals:   setup the  task reading point
// //1. create an end pointpoint of all fetching tasks
// // 2. create an endpoints of fetching the task by id
// // 3. set up an request to post amn and test your work

// app.get('/tasks', (req, res) => {
//   Tasks.find({})
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get('/tasks/:id', (req, res) => {
//   const _id = req.params.id;

//   Tasks.findById(_id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send();
//       }

//       res.send(user);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.listen(port, () => {
//   console.log('Server is up on port ' + port);
// });

// const express = require('express');
// require('./db/mongoose');
// const User = require('./models/user');
// const Task = require('./models/task');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// app.post('/users', async (req, res) => {
//   const user = new User(req.body);

//   try {
//     await user.save();
//     res.status(201).send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.get('/users/:id', async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const user = await User.findById(_id);

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.patch('/users/:id', async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ['name', 'email', 'password', 'age'];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );

//   if (!isValidOperation) {
//     return res.status(400).send({ error: 'Invalid updates!' });
//   }

//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.delete('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.post('/tasks', async (req, res) => {
//   const task = new Task(req.body);

//   try {
//     await task.save();
//     res.status(201).send(task);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.get('/tasks', async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.send(tasks);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.get('/tasks/:id', async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const task = await Task.findById(_id);

//     if (!task) {
//       return res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.patch('/tasks/:id', async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ['description', 'completed'];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );

//   if (!isValidOperation) {
//     return res.status(400).send({ error: 'Invalid updates!' });
//   }

//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     if (!task) {
//       return res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.delete('/tasks/:id', async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id);

//     if (!task) {
//       res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.listen(port, () => {
//   console.log('Server is up on port ' + port);
// });

const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const multer = require('multer');
const upload = multer({
  dest: 'images'
});
app.post('/upload', upload.single('upload'), (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const myFunction = async () => {
  const password = 'ankur123456!';
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare('ankur123456!', hashedPassword);
  console.log(isMatch);
};

myFunction();

const myFunction1 = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {
    expiresIn: '7 days'
  });
  console.log(token);

  const data = jwt.verify(token, 'thisismynewcourse');
  console.log(data);
};

myFunction1();
// ankur => jhkklpoihgfdff => ankur
