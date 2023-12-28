import gql from 'graphql-tag';
export const MediaProps = gql`
    fragment MediaProps on UploadFileEntity {
  id
  attributes {
    url
  }
}
    `;
export const MenusTitles = gql`
    query menusTitles {
  menus {
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;
export const MenuById = gql`
    query menuById($id: ID!) {
  menu(id: $id) {
    data {
      id
      attributes {
        title
        dishes(sort: "createdAt:desc") {
          data {
            id
            attributes {
              media {
                data {
                  ...MediaProps
                }
              }
              title
              price
            }
          }
        }
      }
    }
  }
}
    ${MediaProps}`;
export const DishesBySearchString = gql`
    query dishesBySearchString($searchString: String!) {
  dishes(filters: {title: {contains: $searchString}}, sort: "createdAt:desc") {
    data {
      id
      attributes {
        media {
          data {
            ...MediaProps
          }
        }
        title
        price
      }
    }
  }
}
    ${MediaProps}`;
export const DishById = gql`
    query dishById($id: ID!) {
  dish(id: $id) {
    data {
      id
      attributes {
        title
        price
        media {
          data {
            ...MediaProps
          }
        }
      }
    }
  }
}
    ${MediaProps}`;
export const CreateDish = gql`
    mutation createDish($data: DishInput!) {
  createDish(data: $data) {
    data {
      id
    }
  }
}
    `;
export const UpdateDish = gql`
    mutation updateDish($id: ID!, $data: DishInput!) {
  updateDish(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export const DeleteDish = gql`
    mutation deleteDish($id: ID!) {
  deleteDish(id: $id) {
    data {
      id
    }
  }
}
    `;
export const CreateOrder = gql`
    mutation createOrder($data: OrderInput!) {
  createOrder(data: $data) {
    data {
      id
    }
  }
}
    `;
export const TotalOrdersLength = gql`
    query totalOrdersLength {
  orders(sort: "id:desc", pagination: {limit: 1}) {
    data {
      id
    }
  }
}
    `;
export const RawDashboardHighlightsByDateRange = gql`
    query rawDashboardHighlightsByDateRange($dateStart: DateTime!, $dateEnd: DateTime!) {
  orders(
    pagination: {limit: 999}
    filters: {createdAt: {gte: $dateStart, lt: $dateEnd}}
  ) {
    data {
      attributes {
        owner
        total
        totalDishes
      }
    }
  }
}
    `;
export const PaginatedOrderReportByDate = gql`
    query paginatedOrderReportByDate($pagination: PaginationArg!, $date: DateTimeFilterInput!) {
  orders(pagination: $pagination, filters: {createdAt: $date}) {
    data {
      id
      attributes {
        owner
        total
        status
        dishes {
          data {
            attributes {
              title
            }
          }
        }
      }
    }
  }
}
    `;