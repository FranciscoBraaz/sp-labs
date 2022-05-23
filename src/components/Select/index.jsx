import React, { useState } from 'react';
import { ReactComponent as Dropdown } from '../../assets/images/arrow-down.svg';
import './styles.css';

export function Select({ segments }) {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectIsOpen, setSelectIsOpen] = React.useState(false);
  const refSelect = React.useRef(null);
  const refDropdown = React.useRef(null);

  function handleChange(item) {
    setSelectedValue(item);
    setSelectIsOpen(false);
  }

  return (
    <div className="select" ref={refSelect}>
      <button
        type="button"
        className="select__default"
        onClick={() => setSelectIsOpen(!selectIsOpen)}
      >
        <span>{selectedValue ? selectedValue : 'Selecione uma resposta'}</span>
        <Dropdown />
      </button>
      {selectIsOpen && (
        <ul
          className="select__list"
          // style={{
          //   height: condition ? 'calc(4*3.6rem)' : 'unset',
          //   overflowY: condition ? 'auto' : 'unset',
          // }}
          ref={refDropdown}
        >
          {segments.map((segment) => {
            return (
              <li className="select__option" key={segment}>
                <button type="button" onClick={() => handleChange(segment)}>
                  {segment}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
