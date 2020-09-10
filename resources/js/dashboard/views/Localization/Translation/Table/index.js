import React, {useContext} from 'react';
import TableComponent from '../../../../components/TableComponent';
import TranslateInput from './TranslateInput';
import { AppContext } from '../../../../AppContext';

export default props => {
  const {data, languages, handlePageChange, handleRowsPerPageChange, count, ...rest} = props;
  const context = useContext(AppContext);

  const labels = [
    {title: 'Key', call: (d) => d}
  ];

  languages.map(lang => { 
    labels.push({
        title: lang.language_name, 
        name: lang.language_code,
        call: (d) => <TranslateInput languageCode={lang.language_code} d={d} value={context.data.translations[d][lang.language_code]} dispatch={context.dispatch} />
    })
  })

  return (
      <TableComponent 
        data={data}
        labels={labels}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        hasCheckbox={false}
        actions={false}
        count={count}
      />
  );
};

