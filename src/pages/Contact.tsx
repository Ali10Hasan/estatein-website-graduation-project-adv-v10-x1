import Form from "../components/Form/Form"

import PageHero from "../components/Hero/PageHero"

const Contact = () => {
    return (
        <div>
            <PageHero
                title={"Get in Touch with Estatein"}
                description={"Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."}
                className="2xl:h-450 xl:h-345 h-257"
          
            />
              <Form/>
        </div>
    )
}

export default Contact