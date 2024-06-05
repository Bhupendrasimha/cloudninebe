import { BaseProcessor } from '../../common/base.processor';
import { Appointment } from './appointment.entity';

export class FeedbackProcessor extends BaseProcessor {
  getEntity() {
    return Appointment;
  }
}
