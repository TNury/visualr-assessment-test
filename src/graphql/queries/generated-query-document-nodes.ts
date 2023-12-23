import gql from 'graphql-tag';

export const MenusData = gql`
    query menusData {
  menus {
    data {
      id
    }
  }
}
    `;