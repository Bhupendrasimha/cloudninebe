import { BaseController } from '../../common/base.controller';
import { FeedbackProcessor } from './appointment.processor';

export class FeedbackController extends BaseController {
  getProcessor() {
    return new FeedbackProcessor();
  }
}
