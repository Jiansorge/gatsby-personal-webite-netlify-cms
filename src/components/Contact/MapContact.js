import React from "react"
import Title from "../Title"
import styled from "styled-components"

const MapContact = () => {
  return (
    <section>
      <Title title="My   " subtitle="Location" />
      <br />

      <MapWrapper style={{ "margin-top": "7px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172138.65426536786!2d-122.48215056594603!3d47.613174641881706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sdk!4v1594159372290!5m2!1sen!2sdk"
          title="my-location"
          frameBorder="0"
          width="100%"
          height="353px"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          aria-label="Seattle, WA, USA"
        ></iframe>
      </MapWrapper>
    </section>
  )
}

const MapWrapper = styled.div`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  &:hover {
    box-shadow: var(--darkShadow);
  }
`

export default MapContact
