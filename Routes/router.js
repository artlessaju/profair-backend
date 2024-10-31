// import express

const express = require('express')


const UserController = require('../Controllers/userController')

const projectController = require('../Controllers/projectController')

const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const multerConfig = require('../Middlewares/multerMiddleware')

// create router object or express to define path

const router = new express.Router()

//using router object to define path


//register API path - http://localhost:4000/register -frontend-->

router.post('/register',UserController.register)

//login API path - http://localhost:4000/login -frontend-->

router.post('/login',UserController.login)

//add User Project API path - http//localhost:4000/project/add

router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addUserProject)

// get all users projects path  http//localhost:4000/project/all-user-projects

router.get('/project/all-user-project',jwtMiddleware,projectController.getAllUserProjects)

// get all projects path  http//localhost:4000/project/all-projects

router.get('/project/all-project',jwtMiddleware,projectController.getAllProjects)

// get home project path http//localhost:4000/project/home-project

router.get('/project/home-project',projectController.getHomeProject)

//update project http//localhost:4000/project/update-project/45756798679

router.put('/project/update-project/:pid', jwtMiddleware,multerConfig.single('projectImage'),projectController.updateProject)


//delete project http//localhost:4000/project/delete-project/45756798679

router.delete('/project/delete-project/:pid',jwtMiddleware,projectController.deleteProject)

module.exports = router