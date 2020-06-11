import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"
import { emailStrings } from "./ContactStrings"



class EmailContact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    }
  }


  
  render() {
    const { status } = this.state;
    return (
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
              <input name="f_name" name="text_field" type="hidden" value=""/>
              <input name="g_name" name="phone_fied" type="text" value="" style={{"position": "absolute", "top": "3px", "left": "-680px"}}/>
              <label htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.formControl}
                placeholder={emailStrings.namePlaceholder}
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
              />
            </div>
            <div>
              {status === "SUCCESS" 
                ? <p>Thanks!</p> 
                :<input
                type="submit"
                value={emailStrings.submitText}
                className={styles.submit}
                onPress={()=>submitForm}
              />}
            </div>
            {status === "ERROR" 
              && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </section>
  )
}

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default EmailContact
