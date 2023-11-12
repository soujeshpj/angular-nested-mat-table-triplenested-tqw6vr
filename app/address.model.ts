import { Comment } from "./comment.model";
import { MatTableDataSource } from "@angular/material/table";

export interface Address {
  street: string;
  zipCode: string;
  city: string;
  comments?: Comment[];
}
