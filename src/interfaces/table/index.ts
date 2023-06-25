import { OrderInterface } from 'interfaces/order';
import { TableStatusInterface } from 'interfaces/table-status';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  status_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  table_status?: TableStatusInterface;
  restaurant?: RestaurantInterface;
  _count?: {
    order?: number;
  };
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  status_id?: string;
  restaurant_id?: string;
}
