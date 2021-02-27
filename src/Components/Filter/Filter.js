import { useSelector, useDispatch } from "react-redux";
import {changeFilter} from "./../../redux/actions";
import {getValue} from "./../../redux/selectors";

import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getValue);
  const dispatch = useDispatch();

  return (
    <div className={s.filterContainer}>
      <label className={s.filterLabel}>
        Find contact
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;