import "./search-box-styles.css";

const SearchBox = ({className, placeHolder, onChangeHandler}) => (
            <div>
            <input
                className={`search-box ${className}`}
                type="search"
                placeholder={placeHolder}
                onChange={onChangeHandler}
            />
            </div>
        );

export default SearchBox;