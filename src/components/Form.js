import React from 'react';

function Form(props) {
    return (
        <div className={props.className} style={props.style}>
            <div className='url-entry'>
                <label>API URL:</label>
                <input id ='url' className="input-box"
                    type='text'
                    value={props.url}
                    onChange={props.onURLChange}
                />
            </div>
            <div className='method-select'>
                {/* <select onChange={props.onMethodChange}>
                    <option id ="buttonget" value='GET'>Get</option>
                    <option id ="buttonpost" value='POST'>Post</option>
                    <option id ="buttonput" value='PUT'>Put</option>
                    <option id ="buttondelete" value='DELETE'>Delete</option>
                    <option id ="buttonpatch" value='PATCH'>Patch</option>
                </select> */}

                <button
                    value="GET"
                    className="buttonselected"
                    id="buttonget"
                    onClick={props.onMethodChange}
                >
                    GET
        </button>
                <button value="POST" id="buttonpost" onChange={props.onMethodChange}>
                    POST
        </button>
                <button value="PUT" id="buttonput" onChange={props.onMethodChange}>
                    PUT
        </button>
                <button value="PATCH" id="buttonpatch" onChange={props.onMethodChange}>
                    PATCH
        </button>
                <button value="DELETE" id="buttondelete" onChange={props.onMethodChange}>
                    DELETE
        </button>

            </div>
            <button className="submit" onClick={props.onSubmit}>Submit</button>
        </div>
    );
}

export default Form;
