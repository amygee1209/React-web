
const ProfileContent = ({data, handleChange, handleLogInOut}) => {
  let [month, date, year] = data.currDate.toLocaleDateString("en-US").split("/")
  let [hour, minute] = data.currDate.toLocaleTimeString("en-US").split(/:| /)

  const styles = { fontSize: 30 }

  if (true) {
    styles.color = "#FF0000"
  }

  let logInOut = data.isLoggedIn ? "in" : "out";
  let buttonText = data.isLoggedIn ? "OUT" : "IN";

  return (
    <div>
      <form >
        <input 
          type="text"
          name="firstName"
          value={data.firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input 
          type="text"
          name="lastName"
          value={data.lasttName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <div>
        <h1 style={styles}>
          Welcome {`${data.firstName} ${data.lastName}`}!
        </h1>
        <p>
          Today is {`${month}/${date}/${year}`}
        </p>
        <p>
          and it is currently {`${hour}:${minute}`}
        </p>
        <h4>
          You are  currently logged {logInOut} 
        </h4>
        <button onClick={handleLogInOut}>LOG {buttonText}</button>
        {
          data.unreadMessages.length > 0 && 
          <h4>You have {data.unreadMessages.length} unread messages!</h4>
        }
      </div>
      <form>
        <textarea
          name="textContent"
          value={data.textContent}
          placeholder="Write anything"
          onChange={handleChange}
        />

        <br/>
        <label>
          <input 
            type="checkbox"
            name="finishWrite"
            checked={data.finishWrite}
            onChange={handleChange}
          /> Finished Writing
        </label>

        <br/>
        <label>
          <input 
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === "male"}
            onChange={handleChange}
          /> Male
        </label>

        <label>
          <input 
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === "female"}
            onChange={handleChange}
          /> Female
        </label>

        <br/><br/>
        <select 
          multiple
          onChange={handleChange}
        >
          {
            data.cities.map(item => (
              <option value={item.city}>{`${item.city}, ${item.cntry}`}</option>
            ))
          }
        </select>
      </form>

      <h5>You are a {data.gender}</h5>
      <h5>Cities you have visited are: {data.selCities}</h5>
      
    </div>
  )
}

export default ProfileContent