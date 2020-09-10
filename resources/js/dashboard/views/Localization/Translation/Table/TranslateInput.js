import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import DoneIcon from '@material-ui/icons/Done';
import { sectionLoader, updateTranslate } from '../../../../actions';
import { UpdateTranslateApi } from '../../services/TranslatationService';

export default props => {
  const {d, languageCode, value, dispatch} = props;
  const [translatedValue, setTranslatedValue] = useState(value);

  const handleUpdateTranslate = (languageCode, key, translatedValueUpdated) => {
    //show table loader
    dispatch(sectionLoader(true));
    //call api
    UpdateTranslateApi(languageCode, key, translatedValue).then((result) => {
      //update old value with new value translate
      dispatch(updateTranslate({ d, languageCode, update: translatedValueUpdated}));
      //hidden loader
      dispatch(sectionLoader(false));
    })
  }

  return (
    <FormControl variant="outlined">
        <OutlinedInput
        type='text'
        value={translatedValue}
        onChange={(e) => setTranslatedValue(e.target.value)}
        endAdornment={
            <InputAdornment position="end">
            <IconButton
                aria-label="Update"
                onClick={() => handleUpdateTranslate(languageCode, d, translatedValue)}
                edge="end"
            >
                <DoneIcon />
            </IconButton>
            </InputAdornment>
        }
        />
    </FormControl>
  );
};

