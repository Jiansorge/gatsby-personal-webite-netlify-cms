import React from "react"
import Title from "../Title"
import styled from "styled-components"

const MapContact = () => {
  return (
    <section>
      <Title title="My   " subtitle="Location" />
      <MapWrapper>
        <iframe
          title="change-maps"
          frameBorder="0"
          width="100%"
          height="350px"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d4498.957199824347!2d12.558091!3d55.6806665!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x4652530842a47dc5%3A0xdac6d190593fa013!2sIndre%20By%2C%201369%20Copenhagen%20Municipality!3m2!1d55.6818902!2d12.5582548!5e0!3m2!1sen!2sdk!4v1589950896463!5m2!1sen!2sdk&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
          aria-label="Via oriani 22 Cervia"
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
