import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import classnames from 'classnames';
import style from './style.module.scss';

export const Search = ({ onChange }) => {
  const handleChange = (event) => {
    event.persist();
    const { value } = event.target;
    onChange(value);
  };

  return (
    <InputGroup className={classnames(style.container)}>
      <FormControl
        placeholder="City"
        className={style.input}
        onChange={handleChange}
      />
    </InputGroup>
  );
};
