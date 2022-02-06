import PropTypes from 'prop-types';


const Profile = ({fullname,bio,profession,children,handleAlertName}) => {
    window.onload = function() {
        handleAlertName(fullname)
    }

return (
        <div className='div2'>
            <h3>My name is : {fullname} </h3>
            <h3>Description : {bio} </h3>
            <h3>Profession : {profession} </h3>
            {children}
        </div>
    )
}



Profile.defaultProps={
    fullname : 'User',
    Description : 'About me',
    profession : 'None'
}

Profile.propTypes = {
    fullname : PropTypes.string,
    Description : PropTypes.string,
    profession : PropTypes.string
}
export default Profile