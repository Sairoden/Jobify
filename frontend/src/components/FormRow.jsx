function FormRow({
  type,
  id,
  labelText,
  defaultValue,
  required = false,
  register,
  disabled,
  onChange,
}) {
  return (
    <div className="form-row">
      <label htmlFor={id} className="form-label">
        {labelText || id}
      </label>

      <input
        type={type}
        id={id}
        className="form-input"
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        {...register(id)}
        onChange={onChange}
      />
    </div>
  );
}

export default FormRow;
