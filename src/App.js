import "./styles.css";
import Card from "./Card";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="intro">
          <p className="main-text">Why The Industry Choose Clickdee?</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
            purus purus. Ut tempus leo non justo fringilla sodales. Donec a
            fringilla risus. Sed nec risus lacus. In hac habitasse platea
            dictumst. Vivamus ornare scelerisque eros nec vehicula. Mauris ac
            viverra nibh. Nunc sed hendrerit purus, sed mollis libero. Proin
            malesuada elit id magna molestie rutrum ut ultricies elit.
          </p>
        </div>
        <Card
          title={"Choose Your Local Targetting"}
          imageUrl={"a"}
          content={
            "Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."
          }
        />
        <Card
          title={"Track Your Conversion"}
          imageUrl={"a"}
          content={
            "Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."
          }
        />
        <Card
          title={"Customized Campaigns"}
          class="content-right"
          imageUrl={"a"}
          content={
            "Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."
          }
        />
        <Card
          title={"Get Dedicated Support Team"}
          imageUrl={"a"}
          content={
            "Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."
          }
        />
        <Card
          title={"Quality Assurance"}
          imageUrl={"a"}
          content={
            "Our targeted and tracked calls are tailored to your business needs, audience, and geolocation."
          }
        />
      </div>
    </div>
  );
}
