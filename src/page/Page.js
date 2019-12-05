import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Results from './Results';

class Page extends Component {
  render() {
    const {
      title,
      titleWarn,
      organizer,
      compsData,
      resultsData,
      diffData,
      colorLessPointsTask
    } = this.props;

    return (
      <Fragment>
        <Header
          title={title}
          titleWarn={titleWarn}
          organizer={organizer}
          compsData={compsData}
        />
        <Results
          results={resultsData}
          diffData={diffData}
          colorLessPointsTask={colorLessPointsTask}
        />
      </Fragment>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string,
  titleWarn: PropTypes.string,
  organizer: PropTypes.string,
  compsData: PropTypes.array,
  resultsData: PropTypes.array,
  diffData: PropTypes.array,
  colorLessPointsTask: PropTypes.bool
};

Page.defaultProps = {
  titleWarn: '',
  diffData: [],
  colorLessPointsTask: false
};

export default Page;
