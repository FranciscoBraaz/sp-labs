import React, { useEffect, useState } from 'react';
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

  const handleClickOutside = React.useCallback(
    (event) => {
      if (
        selectIsOpen &&
        !refDropdown.current.contains(event.target) &&
        !refSelect.current.contains(event.target)
      ) {
        setSelectIsOpen(false);
      }
    },
    [selectIsOpen],
  );

  useEffect(() => {
    if (typeof window != 'undefined') {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    let select = refSelect.current;
    if (selectIsOpen) {
      select.className = 'select select--focus';
    } else {
      select.className = 'select';
    }
  }, [selectIsOpen]);

  return (
    <div className="select" ref={refSelect}>
      <button
        type="button"
        className="select__default"
        onClick={() => setSelectIsOpen(!selectIsOpen)}
      >
        <span>{selectedValue ? selectedValue : 'Seu segmento'}</span>
        <Dropdown />
      </button>
      {selectIsOpen && (
        <ul className="select__list" ref={refDropdown}>
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
