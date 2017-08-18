import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Icon = (props) =>
  <span
    className={classNames('icon', props.className, {
      "is-small": props.small,
      "is-medium": props.medium,
      "is-large": props.large,
    })}
  >
    <i className={`fa fa-${props.name}`} />
  </span>

Icon.propTypes = {
  name: PropTypes.string,
  small: PropTypes.boolean,
  medium: PropTypes.boolean,
  large: PropTypes.boolean,
  className: PropTypes.string,
}

export default Icon
