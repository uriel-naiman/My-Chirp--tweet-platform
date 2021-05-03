import { useState } from "react";

function ProfileForm(props) {
    const [name, setName] = useState('');
    const handleUpdateName = (event) => {
        setName(event.target.value);
    }
    const onClick = (event) => {
        event.preventDefault();
        props.updateProfileName(name);
        setName('');
    }
    return(
        <div className="d-flex flex-column h-100 background bg-dark text-white">
        <form className="d-flex w-50 flex-column pt-2 mx-auto h-100"
                onSubmit={(event) => onClick(event)}>
                <h1 className="mb-2">Profile</h1>
                <p className="">User Name</p>
                <input 
                    type="text" 
                    name="input" 
                    value={name}
                    className="shadow-none bg-dark text-white flex-grow mb-4 border border-light rounded"
                    placeholder="Type here..."
                    style={{outline: "none", height:"46px"}}
                    onChange={handleUpdateName}
                />
                <button className="btn btn-primary btn-sm align-self-end">Save</button>
            </form>
            <div style={{height: '100vh'}}></div>
        </div>
    );
}

export default ProfileForm;