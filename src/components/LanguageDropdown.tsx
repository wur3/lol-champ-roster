import * as React from "react"
import CSS from 'csstype';
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/createStore";
import { setLanguage } from "../reducers/Language";

const languageDropdown = () => {
  const dispatch = useDispatch()

  const language = useSelector((state: RootState) => state.language.value)
  const lDropdownStyles: CSS.Properties = {
    margin: '0',
    padding: '0',
    position: 'absolute',
    top: '0%',
    left: '20%',
  }

  const languageDropdown = language.all.map((l,i) => 
    <Dropdown.Item eventKey={i} key={i} onClick={() => {dispatch(setLanguage({ code: l, all: language.all}))}}>{`${l}`}</Dropdown.Item>
  );

  return (
    <Dropdown style={lDropdownStyles}>
      <Dropdown.Toggle id={`dropdown-variants-1`} variant="secondary">
        { language.code }
      </Dropdown.Toggle>
      <Dropdown.Menu variant={`dark`}>
        { languageDropdown }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default languageDropdown