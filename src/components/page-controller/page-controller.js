import React from 'react';
import PropTypes from 'prop-types';
import './page-controller.css';
import { Pagination } from 'antd';


export default function PageController({ total, onChange, current, error }) {
  if (total === 0 || error === true ) {
    return null;
  }

  return (
    <Pagination
      size="small"
      pageSize="1"
      total={total}
      showSizeChanger={false}
      onChange={onChange}
      current={current}
      className="page-controller"
    />
  );
}

PageController.propTypes = {
  error: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  current: PropTypes.number.isRequired,
};
