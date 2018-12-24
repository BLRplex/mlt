import React from 'react';
import pt from 'prop-types';

import { TablePagination } from '@material-ui/core';

import BasicLayout from '../../components/layout/BasicLayout';
import Page from '../../components/blocks/Page';
import UserFilters from '../../components/forms/UserFilters';
import UserTilesGrid from '../../components/blocks/UserTilesGrid';
import { ROWS_PER_PAGE_OPTIONS } from '../../constants';
import { UserPropType } from '../../propTypes';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  getPage() {
    const {
      users: { filteredUsers },
      filters: { appliedFilters: { rowsPerPage, page } },
    } = this.props;

    const startFrom = rowsPerPage * page;
    const endOn = startFrom + rowsPerPage;

    return filteredUsers
      .slice(startFrom, endOn);
  }

  handleChangeRowsPerPage(event) {
    const { onFilterValues } = this.props;
    const { value } = event.target;

    onFilterValues('rowsPerPage', value);
  }

  handleChangePage(event, page) {
    const { onFilterValues } = this.props;

    onFilterValues('page', page);
  }

  render() {
    const {
      users: { filteredUsers },
      filters: { appliedFilters: { rowsPerPage, page } },
    } = this.props;

    const pageData = this.getPage();

    return (
      <BasicLayout>
        <Page>
          <UserFilters />
          <UserTilesGrid data={pageData} />
          {/* Material-UI v3 does not provide pagination element without <td> */}
          {/* It causes warnings in browser console. Avoiding it by wrapping with <table> */}
          <table>
            <tbody>
              <tr>
                <TablePagination
                  rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
                  colSpan={3}
                  count={filteredUsers.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </tr>
            </tbody>
          </table>
        </Page>
      </BasicLayout>
    );
  }
}

LandingPage.propTypes = {
  filters: pt.shape({
    appliedFilters: pt.shape({}),
  }).isRequired,
  users: pt.shape({
    filteredUsers: pt.arrayOf(pt.shape(UserPropType.isRequired)),
  }).isRequired,
  onFilterValues: pt.func.isRequired,
};

export default LandingPage;
