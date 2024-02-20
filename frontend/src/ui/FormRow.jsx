function FormRow({ type, id, labelText, defaultValue, required, register }) {
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
        {...register(id)}
      />
    </div>
  );
}

export default FormRow;
