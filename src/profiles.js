function Profile(props){
  
    const profile = props.guitar;
    
    return( 
    <div className="profile_card">
      <h1>{profile.name}</h1>
      <p>
        {profile.description}
      </p>
      <img src ={profile.picture} className="strat" />
    </div>
  )
}
const Profiles =() => {
    const profiles = [
        {
            name: 'Stratocaster',
            description:"This is a stratocaster",
            picture: 'https://c.pxhere.com/photos/29/c4/stratocaster_electric_guitar_music_guitar_musical_instrument_stringed_instrument_fender_rock_guitar-591288.jpg!d'
          },
          {
            name: 'Telecaster',
            description:"This is a Telecaster",
            picture: 'https://c.pxhere.com/photos/0b/9f/guitars_sangraal_guitars_telecaster_guitarist-1295162.jpg!d'
          }
    ];

    return (
        <div className="profile_grid">
          {/* <Button></Button>
          <Car></Car> */}
          {profiles.map((profile) => (
            <Profile guitar = {profile} key={profile.name}/>
            )
          )}
          
        </div>
      )
}

export default Profiles;
