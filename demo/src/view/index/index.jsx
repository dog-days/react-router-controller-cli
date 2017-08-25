import React from 'react';

class IndexView extends React.Component {
  render() {
    let { i18n: { t } } = this.props;
    console.debug('index页面');
    return (
      <div>
        <br/>
        {t('主页页面')}
      </div>
    );
  }
}

export default IndexView;
