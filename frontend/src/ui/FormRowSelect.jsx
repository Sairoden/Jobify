function FormRowSelect({
  name,
  labelText,
  list,
  defaultValue = "",
  register,
  required = false,
}) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        defaultValue={defaultValue || ""}
        required={required}
        {...register(name)}
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
