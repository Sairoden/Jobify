function SubmitButton({ isPending, formBtn }) {
  return (
    <button
      type="submit"
      className={`btn btn-block ${formBtn && "form-btn"}`}
      disabled={isPending}
    >
      {isPending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default SubmitButton;
