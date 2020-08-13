import React from 'react';
import TableComponent from '../../../../components/TableComponent';
import TranslateInput from './TranslateInput';

export default props => {
  const {data, languages,handlePageChange, handleRowsPerPageChange, ...rest} = props;
  
  const labels = [
    {title: 'Key', call: (d) => d}
  ];

  languages.map(lang => { 
    labels.push({
        title: lang.language_name, 
        name: lang.language_code,
        call: (d) => <TranslateInput languageCode={lang.language_code} d={d} />
    })
  })

  return (
      <TableComponent 
        data={Object.keys(data)}
        labels={labels}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        hasCheckbox={false}
        actions={false}
      />
  );
};

