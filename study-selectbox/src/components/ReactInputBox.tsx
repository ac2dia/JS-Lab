import React, {useState} from 'react';

const ReactInputBox = () => {

    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([
        {
            id: '1',
            value: '밥먹기',
        },
        {
            id: '2',
            value: '코딩하기',
        },
    ]);

    const addToList = () => {
        setList((prevList) => {
            return [
                {
                    id: list.length + 1 + "",
                    value: inputValue,
                },
                ...prevList,
            ];
        });
        setInputValue('');
    };

    return (
        <div>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={addToList}>추가</button>
            <ul>
                {list.map((item) => {
                    return <li key={item.id}>{item.value}</li>;
                })}
            </ul>
        </div>
    );
};

export default ReactInputBox;