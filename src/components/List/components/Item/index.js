import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Col, Card } from 'react-bootstrap';

import Styled from './styles';
import { generateImage } from './helpers';

const Item = ({ name, index }) => {
  return (
    <Col key={name} md={4}>
      <Styled.Card className="mb-4 shadow-sm">
        <Card.Img className="p-5" variant="top" src={generateImage(index)} />
        <hr />
        <Card.Body>
          <Card.Title className="text-capitalize font-weight-bold text-center">{name}</Card.Title>
        </Card.Body>
      </Styled.Card>
    </Col>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default memo(Item);
