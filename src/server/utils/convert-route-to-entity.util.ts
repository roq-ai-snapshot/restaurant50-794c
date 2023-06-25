const mapping: Record<string, string> = {
  'menu-items': 'menu_item',
  orders: 'order',
  'order-items': 'order_item',
  restaurants: 'restaurant',
  tables: 'table',
  'table-statuses': 'table_status',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
