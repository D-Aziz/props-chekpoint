var style = {color: "#617d98"}

const Profile = (props) => {

  const {fullName, bio, profession, children} = props ;
    
  const clickHandler = () => {
    alert (fullName);
  };

    return (
    <article className = "Profile">

          {children} 
      
      <p>{bio}</p>
      <h3 style = {style}>{profession}</h3>
      <button type="button" onClick={clickHandler}>click here</button>
  
    </article>
    )
  }

  export default Profile;