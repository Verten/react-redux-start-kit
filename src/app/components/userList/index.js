/**
 * Created by ebinhon on 12/29/2016.
 */
import React from 'react'
import cssModules from 'react-css-modules'
import {withRouter} from 'react-router'
import {Table} from 'antd'
import styles from '../style/components.scss'

class UserList extends React.Component {
  static propTypes = {
    users: React.PropTypes.array
  }

  static defaultProps = {}

  constructor(props, context) {
    super(props, context)
    this.state = {
      loading: true,
      users: null
    }
  }

  componentDidMount() {}

  componentWillMount() {

  }

  initUserData(users) {
    const userData = []
    users.map(user => {
      return userData.push({
        key: user.id,
        name: user.login,
        url: user.html_url
      })
    })
    return userData
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users && nextProps.users.length >= 0) {
      this.setState({
        loading: false,
        users: this.initUserData(nextProps.users)
      })
    }
  }

  renderTableHeader() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 150
    }, {
      title: 'url',
      dataIndex: 'url',
      key: 'url',
      width: 110
    }]
    return columns
  }

  render() {
    const columns = this.renderTableHeader()
    return (
      <Table columns={columns} loading={this.state.loading} dataSource={this.state.users}/>
    );
  }
}

export default withRouter(cssModules(UserList, styles))
