
function Radio({ bookData, setBookData }) {
  const { category } = bookData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  return (
    <div>
      <p className="text-blue-800 font-bold text-xl mb-4">دسته بندی</p>
      <div className="flex justify-around">
        <div className="flex items-center gap-2 bg-blue-200 p-2 rounded">
          <label htmlFor="handout">جزوه درسی</label>
          <input
            type="radio"
            name="category"
            value="handout"
            id="handout"
            checked={category === "handout"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center gap-2 bg-blue-200 p-2 rounded">
          <label htmlFor="academic">علمی</label>
          <input
            type="radio"
            name="category"
            value="academic"
            id="academic"
            checked={category === "academic"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center gap-2 bg-blue-200 p-2 rounded">
          <label htmlFor="story">داستانی</label>
          <input
            type="radio"
            name="category"
            value="story"
            id="story"
            checked={category === "story"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center gap-2 bg-blue-200 p-2 rounded">
          <label htmlFor="novel">رمان</label>
          <input
            type="radio"
            name="category"
            value="novel"
            id="novel"
            checked={category === "novel"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Radio;