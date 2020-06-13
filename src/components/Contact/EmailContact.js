import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"
import { emailStrings } from "./ContactStrings"

class EmailContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: "",
      inputValue: "",
    }
  }

  updateInputValue = ev => {
    this.setState({
      inputValue: ev.target.value,
    })
  }

  clear = () => {
    this.setState({
      inputValue: "asdlfkjasdlkj",
    })
  }

  submitForm = ev => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }

  render() {
    const { status } = this.state
    return (
      <div>
        <section>
          <Title title="Contact " subtitle="   Form" />
          <div>
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/meqrkgzr"
              method="POST"
              className={styles.form}
            >
              <div>
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={styles.formControl}
                  placeholder={emailStrings.namePlaceholder}
                  aria-label="what's is your name"
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={styles.formControl}
                  placeholder={emailStrings.emailPlaceholder}
                  aria-label="what is your email"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="10"
                  className={styles.formControl}
                  placeholder={emailStrings.messagePlaceholder}
                  aria-label="write your message"
                />
              </div>
              <div>
                {status === "SUCCESS" ? (
                  <p>Thanks!</p>
                ) : (
                  this.state.inputValue.length < 1 && (
                    <button
                      value={emailStrings.submitText}
                      className={styles.submit}
                      onSubmit={this.submitForm}
                      aria-label="Send Message"
                    >
                      Submit
                    </button>
                  )
                )}
              </div>

              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
        </section>

        <aside>
          <form>
            <label htmlFor="f_name" aria-label="not real input"></label>
            <input
              name="f_name"
              type="hidden"
              value=""
              aria-label="not real input"
              onChange={this.updateInputValue}
            />
            <label
              htmlFor="g_name"
              aria-label="not real input"
              style={{ position: "absolute", top: "3px", left: "-680px" }}
            ></label>
            <input
              name="g_name"
              type="text"
              value=""
              style={{ position: "absolute", top: "3px", left: "-680px" }}
              onChange={this.updateInputValue}
              aria-label="not real input"
            />
            <label
              htmlFor="j_name"
              aria-label="not real input"
              style={{ display: "none" }}
            ></label>
            <input
              name="j_name"
              type="text"
              value=""
              style={{ display: "none" }}
              onChange={this.updateInputValue}
              aria-label="not real input"
            />
            <label
              htmlFor="k_name"
              aria-label="not real input"
              style={{ visibility: "hidden" }}
            ></label>
            <input
              name="k_name"
              type="text"
              value=""
              style={{ visibility: "hidden" }}
              onChange={this.updateInputValue}
              aria-label="not real input"
            />
            <label
              htmlFor="l_name"
              aria-label="not real input"
              style={{ visibility: "collapse" }}
            ></label>
            <input
              name="l_name"
              type="text"
              value=""
              style={{ visibility: "collapse" }}
              onChange={this.updateInputValue}
              aria-label="not real input"
            />
          </form>
        </aside>
      </div>
    )
  }
}

export default EmailContact
