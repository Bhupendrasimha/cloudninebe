import { Router, Request, Response } from 'express';
import { AppointmentRouter } from './modules/appointment/appointment.router';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.json({ success: true });
});


router.use('/appointment',AppointmentRouter)

export default router;
