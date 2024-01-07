import { ChangeEvent } from "react";
import "./search-box-styles.css";

// const name: string = "124";
// const func1: (a: string, b: boolean, c: number) => boolean = (a, b, c) => { return false}
// const func2: (a: string, b: boolean, c: number) => void = (a, b, c) => {}

// for props there two ways: type or interface for them.
// interface ISearchBoxProps extends IChangeHandlerProps{
//     className: string;
//     placeholder?: string;
// }
// interface IChangeHandlerProps {
//     onChangeHandler: (a: string) => {};
// }
// overloading just one type for both of them
// interface ISearchBoxProps{
//     className: string;
//     placeholder?: string;
// }
// interface ISearchBoxProps {
//     onChangeHandler: (a: string) => void;
// }

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    // onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => (
            <div>
            <input
                className={`search-box ${className}`}
                type="search"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
            </div>
        );

export default SearchBox;