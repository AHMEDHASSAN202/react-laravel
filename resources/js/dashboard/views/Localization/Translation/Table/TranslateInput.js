import React, { useContext } from 'react';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import DoneIcon from '@material-ui/icons/Done';
import { AppContext } from '../../../../AppContext';
import { UPDATE_TRANSLATE } from '../../../../actions';
import debounce from 'lodash/debounce';

export default props => {
  const {d, languageCode} = props;
  const {data, dispatch} = useContext(AppContext);

  const handleTranslateInputChange = (update) => {
    dispatch({
        TYPE: UPDATE_TRANSLATE, 
        payload: {
            d, 
            languageCode,
            update
        }
    });
  }

  return (
    <FormControl variant="outlined">
        <OutlinedInput
        type='text'
        value={data.translations[d][languageCode]}
        onChange={(e) => handleTranslateInputChange(e.target.value)}
        endAdornment={
            <InputAdornment position="end">
            <IconButton
                aria-label="Update"
                onClick={() => console.log(d)}
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

