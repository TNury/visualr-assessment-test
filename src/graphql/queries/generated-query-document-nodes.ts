import gql from 'graphql-tag';
export const MediaProps = gql`
    fragment MediaProps on UploadFileEntity {
  id
  attributes {
    url
  }
}
    `;
export const MenusData = gql`
    query menusData {
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
        dishes {
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
  dishes(filters: {title: {contains: $searchString}}) {
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
export const RawDashboardHighlightsByDate = gql`
    query rawDashboardHighlightsByDate($dateToday: DateTime!) {
  orders(pagination: {limit: 999}, filters: {createdAt: {gte: $dateToday}}) {
    data {
      attributes {
        owner
        total
        dishes {
          data {
            id
          }
        }
      }
    }
  }
}
    `;