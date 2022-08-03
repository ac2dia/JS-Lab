// @flow
import React, {Fragment} from "react";
import Select from 'react-select'

type Props = {
    options: Array<any>;
    isMulti: boolean;
    isDisabled: boolean;
    isClearable: boolean;
    isSearchable: boolean;
};

export const ReactSelectBox = (props: Props) => {

    return (
        <Fragment>
            <Select
                className={`${props.isMulti} ? "basic-multi-select" : "basic-single"`}
                classNamePrefix="select"
                isMulti={props.isMulti}
                defaultValue={props.options[0]}
                isDisabled={props.isDisabled}
                isClearable={props.isClearable}
                isSearchable={props.isSearchable}
                name="color"
                options={props.options}
            />
        </Fragment>
    );
};