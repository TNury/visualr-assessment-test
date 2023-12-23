import gql from 'graphql-tag';

export const Menus = gql`
    query menus {
  menus {
    data {
      id
    }
  }
}
    `;