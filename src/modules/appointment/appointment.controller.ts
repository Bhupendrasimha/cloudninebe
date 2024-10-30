import { BaseController } from '../../common/base.controller';
import { FeedbackProcessor } from './appointment.processor';
import { Request, Response } from 'express';
import { buildCsv } from '../../utils/csv.utils';
import { NO_RECORDS_FOUND, FILE_CREATION_FAILED } from '../../contants/error';
import { customError, ErrorResponse, SuccessResponse } from '../../utils';
export class FeedbackController extends BaseController {
  getProcessor() {
    return new FeedbackProcessor();
  }

  downloadAllData = async (req: Request, res: Response) => {
    try {
      const patients = await this.processor.find({});
      console.log(patients,"patients")
      if (!patients) {
        throw customError(NO_RECORDS_FOUND);
      }
      const date = new Date();
      const day = date.getDate(); // Get day of the month
      const month = date.getMonth() + 1; // getMonth() is zero-indexed, so add 1
      const year = date.getFullYear(); // Get full year

      const fileName = `srividya_clinic_${day}_${month}_${year}.csv`;

      const fileData = await buildCsv(patients, {
        name: 'Patient Name',
        email: 'Email',
        number: 'Contact',
        time: 'Time',
        date: 'Date',
        hospital: 'Hospital',
        reason:'Reason'
      });
      if (fileData === '') {
        throw customError(FILE_CREATION_FAILED);
      }

      res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

      res.send(fileData);
    } catch (error) {
      ErrorResponse(res, error);
    }
  };
}
