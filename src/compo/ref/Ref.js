import React ,{useState}from 'react';

const Ref = () => {
    const [name, setName] = useState()

    return (
        <>
            <input value={name} onChange={e=>setName(e.target.value)} />
            <div>my name is {name}</div>
        </>
    );
};

export default Ref;