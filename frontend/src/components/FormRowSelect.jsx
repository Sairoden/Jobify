function FormRowSelect({
  labelText,
  list,
  defaultValue = "",
  register,
  required = false,
  id,
  disabled,
  onChange,
}) {
  return (
    <div className="form-row">
      <label htmlFor={id} className="form-label">
        {labelText || id}
      </label>
      <select
        id={id}
        className="form-select"
        defaultValue={defaultValue || ""}
        required={required}
        disabled={disabled}
        {...register(id)}
        onChange={onChange}
      >
        {list.map(status => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormRowSelect;
