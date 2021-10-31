import React from 'react';

export const UserItem = props => {
    const { name, dob, picture, email } = props.userData;
    // const date = new Date (dob);
    // const dateFormated = date.getFullYear()
    return (
        <div className="col s12">
            <div className="card horizontal">
                <div className="card-image card-img-wrapper">
                    {/* {name.title ==! mr ? style='background=red' : none} */}
                    <img id="img" src={picture.thumbnail} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>name: {name}</p>
                        <p>email: {email}</p>
                        {/* <p>date of birth: {dateFormated}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


