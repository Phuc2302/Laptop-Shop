import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


function Search(props) {

  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  function handleChange(e) {
    console.log(e.target.value)
    setSearch(e.target.value);
    props.onSearch(e.target.value)

    if (e.target.value === "") {
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  }

  // function handleSubmit(e){
  //   console.log('handleSubmit');
  //   e.preventDefault()
  // }

  return (
    <section>
      <div className='input-group-search'>
        <form>
          <i><FaSearch /></i>
          <input type="search"
            placeholder="Nhập sản phẩm ..."
            onChange={handleChange}
            className='input-search' />
          {/* <span className='input-group-btn'>
            <button className="input-button"
              type='button'
              // value={e.target.value}
              onClick={handleSubmit}>
              <span><FaSearch /></span> Tìm kiếm
            </button>
          </span> */}
        </form>
      </div>
    </section>
  )
}
export default Search;
