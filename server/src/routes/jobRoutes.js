import express from 'express';
import {
    getAllJobs,
    createJob,
    getJob,
    updateJob,
    deleteJob
} from '../controllers/jobController.js';

const router = express.Router();

router.get("/", getAllJobs);
router.get("/:id", getJob);
router.post('/', createJob);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router