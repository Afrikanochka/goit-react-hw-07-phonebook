import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsAction";
import styles from "./filter.module.css";

const Filter = ({ filter, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      type="text"
      name="name"
      value={filter}
      onChange={onChange}
    ></input>
  </label>
);

const mapstateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapstateToProps, mapDispatchToProps)(Filter);