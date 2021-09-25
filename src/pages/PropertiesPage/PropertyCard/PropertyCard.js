import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import classnames from 'classnames';

import { card, cardText } from './PropertyCard.module.scss';

const PropertyCard = ({ data, setSelectedPropertyId, setSelectedPropertyName }) => {
  const { address1, address2, baseRent, id, name, sqft } = data;
  const baseRentNumber = Number.parseInt(baseRent.replace('$', '').replace(',', '')).toFixed(2);

  return (
    <Card
      className={classnames(card)}
      onClick={() => {
        setSelectedPropertyId(id);
        setSelectedPropertyName(name);
      }}
    >
      <CardBody className="p-0 d-flex flex-column">
        <CardTitle className="p-3 pb-5 border-bottom mb-0 font-weight-bold">{name}</CardTitle>
        <div className="p-3 d-flex flex-column justify-content-between flex-grow-1">
          <div className="d-flex justify-content-between flex-sm-column justify-content-sm-center align-items-sm-center flex-lg-row justify-content-lg-between align-items-lg-start">
            <CardText
              className={classnames(cardText, 'w-50 mb-0 text-left text-sm-center text-lg-left m-0 mb-sm-3 m-lg-0')}
            >{`${address1} ${address2}`}</CardText>
            <CardText>{baseRent}</CardText>
          </div>
          <div className="d-flex justify-content-between flex-sm-column justify-content-sm-center align-items-sm-center flex-lg-row justify-content-lg-between align-items-lg-start">
            <CardText className="d-flex align-items-end mb-0 text-center m-0 mb-sm-3 m-lg-0">{`${sqft} sqft.`}</CardText>
            <CardText className="d-flex align-items-end mb-0 text-center m-0 mb-sm-3 m-lg-0">{`$${(
              sqft / baseRentNumber
            ).toFixed(2)} sqft/mo`}</CardText>
            <CardText className="d-flex align-items-end mb-0 text-center">{`$${(sqft / (baseRentNumber * 12)).toFixed(
              2
            )} sqft/year`}</CardText>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

PropertyCard.propTypes = {
  data: PropTypes.shape({
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string.isRequired,
    baseRent: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOccupied: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    sqft: PropTypes.number.isRequired,
  }).isRequired,
  setSelectedPropertyId: PropTypes.func.isRequired,
  setSelectedPropertyName: PropTypes.func.isRequired,
};

export default PropertyCard;
