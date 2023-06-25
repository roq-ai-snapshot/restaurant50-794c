import { TableInterface } from 'interfaces/table';
import { GetQueryInterface } from 'interfaces';

export interface TableStatusInterface {
  id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  table?: TableInterface[];

  _count?: {
    table?: number;
  };
}

export interface TableStatusGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
}
