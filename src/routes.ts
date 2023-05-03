import { Router } from 'express';
import multer from 'multer';

//User register
import { CreateUserController } from './controller/user/CreateUserController';

import { AuthUserController } from './controller/user/AuthUserController';

import { DetailUserController } from './controller/user/DetailUserController';

// Rotas Tutor Profile 
import { CreateProfileController } from './controller/tutorProfile/CreateProfileController';

import { ListTutorController } from './controller/tutorProfile/ListTutorController';

import { DeleteTutorController } from './controller/tutorProfile/DeleteTutorController';

import { EditTutorController } from './controller/tutorProfile/EditTutorController';

// Rotas Shelter 
import { CreateShelterController } from './controller/shelter/CreateShelterController';

import { AuthShelterController } from './controller/shelter/AuthShelterController';

import { ListShelterController } from './controller/shelter/ListShelterController';

import { SeekShelterController } from './controller/shelter/SeekShelterController';

//Middlewares
import { isAuthenticated } from './middlewares/isAuthenticated';

import { shelterAuthenticated } from './middlewares/shelterAuthenticated';

//Multer
import uploadConfig from './config/multer' ;

//Photo
const upload = multer(uploadConfig.upload("./tmp"))

const router = Router();

// Rotas User register
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/userinfo', isAuthenticated, new DetailUserController().handle)

// Rotas Tutor Profile 
router.post('/profile', isAuthenticated, upload.single('file'), new CreateProfileController().handle)

router.get('/tutors', isAuthenticated, new ListTutorController().handle)

router.delete('/tutores/delete', isAuthenticated, new DeleteTutorController().handle)

router.patch('/edit/tutor', isAuthenticated, new EditTutorController().handle)

// Rotas Shelter
router.post('/shelter', new CreateShelterController().handle)

router.post('/administrator', new AuthShelterController().handle)

router.get('/shelters', new ListShelterController().handle)

router.get('/shelter/me', shelterAuthenticated, new SeekShelterController().handle)

export { router };