import React from 'react'

export default function SearchBar(props) {
    return (
      <>
     <h1 className="heading">Book Search App</h1>
        <div className="searchbar">
          <input
            type="text"
            id="search-input"
            className="searchbar__input"
            placeholder="Book or author..."
            onChange={(e) => props.onChange(e.target.value)}
          />
          {/* <button
                id="search-button"
                className="searchbar__button"
                onClick={() =>
                    props.onChange(
                        document.getElementById('search-input').value
                    )
                }
            >
                Search
            </button> */}
        </div>
      </>
    );
}
