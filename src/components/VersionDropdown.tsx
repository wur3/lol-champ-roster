import * as React from "react"
import CSS from 'csstype';
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setVersion } from "../reducers/Version";
import { RootState } from "../state/createStore";

const versionDropdown = () => {
  const dispatch = useDispatch()

  const version = useSelector((state: RootState) => state.version.value)
  const vDropdownStyles: CSS.Properties = {
    margin: '0',
    padding: '0',
    position: 'absolute',
    top: '0%',
    left: '1%',
  }

  const versionDropdown = version.all.map((v,i) => 
    <Dropdown.Item eventKey={i} key={i} onClick={() => {dispatch(setVersion({ num: v, all: version.all}))}}>{`${v}`}</Dropdown.Item>
  );

  return (
    <Dropdown style={vDropdownStyles}>
      <Dropdown.Toggle id={`dropdown-variants-0`} variant="secondary">
        { version.num }
      </Dropdown.Toggle>
      <Dropdown.Menu variant={`dark`}>
        { versionDropdown }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default versionDropdown
