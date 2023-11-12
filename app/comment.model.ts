import { Validation } from './validation.model';
import { MatTableDataSource } from '@angular/material/table';

export interface Comment {
  commentID: number;
  comment: string;
  commentStatus: string;
  validations?: Validation[];
}
