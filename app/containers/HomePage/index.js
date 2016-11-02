/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Button, Modal, Row, Col } from 'antd';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <h1>
        <Row>
          {
            ['default',
              'primary',
              'success',
              'info',
              'warning',
              'danger'
            ].map((c, i) => <Col key={i} span={4}>
              <Button                
                type={c}
                onClick={() => {
                  Modal.error({
                    title: 'Hello',
                    content: 'I am a Modal',
                  });
                } }
                >
                {c}
              </Button>
            </Col>)
          }

        </Row>



        <FormattedMessage {...messages.header} />
      </h1 >
    );
  }
}
