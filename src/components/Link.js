import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames'

const DynamicLink = ({
  match, location, history, className, to, ...props,
}) =>
  <Link
    {...props}
    to={to}
    className={classNames(className, {
      'is-active': location.pathname === to,
    })}
  />

export default withRouter(DynamicLink)
