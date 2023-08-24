function EditInput({ name, user, setUser }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name={name}
        value={user && user[name]}
        onChange={changeHandler}
        className="border-r-4 border-r-blue-600 w-full focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
      />
    </div>
  );
}

export default EditInput;
