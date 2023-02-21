function Forms({ onSubmitForm }) {
  return (
    <div className="addBox">
      <form className="form" onSubmit={onSubmitForm}>
        <input
          id="input"
          type="text"
          className="inputText"
          placeholder="What will you do today?"
          required
        />
        <button className="btnAdd">+</button>
      </form>
    </div>
  );
}
export default Forms;
