import express from 'express';

import FormMessage from '../models/formMessage.js';

import { getForms, createForm} from '../controllers/forms.js';
const router = express.Router();

router.get('/', getForms);
// router.get('/name', getFormsByName);


// router.get('/name',(req,res)=>{
//     const name=req.body.name;
//     console.log(req);
    
//     })
router.get('/name/:name',async(req,res)=>{
    const name=req.params['name'];
    console.log(name);
    
const formMessages = await FormMessage.find({name:name});
res.send(formMessages);
    })
    
router.get('/dob/:dob',async(req,res)=>{
    const dob=req.params['dob'];
    console.log(dob);
    
const formMessages = await FormMessage.find({dob:dob});
res.send(formMessages);
    })

// router.get('/dob', getFormsByDOB);
router.post('/', createForm);
// router.patch('/:id', updateReview);
// router.delete('/:id', deleteReview);
// router.patch('/:id/likePost', l

export default router;
