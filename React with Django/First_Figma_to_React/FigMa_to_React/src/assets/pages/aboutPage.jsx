import HFlayout from "../Layout/headerFooterLayout"

const About = () => {
  return (
    <div>
        <HFlayout>
        <div class="flex">
            <div class="w-1/2 p-4 ml-7">
                <h1 className="text-black mt-7 text-[64px] font-bold">About</h1>
                <div data-layer="Subheading for description or instructions" class="SubheadingForDescriptionOrInstructions text-[#828282] text-2xl font-normal font-['Inter'] leading-9">Subheading for description or instructions</div>
                <div data-layer="Paragraph" class="Paragraph text-black text-xl font-medium font-['Inter'] leading-[30px]">Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:<br/><br/>Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.</div>
                <form >
                    <div data-layer="Contact me" class="ContactMe text-black text-[32px] font-semibold font-['Inter'] leading-[48px]">Contact me</div>
                    <div className="row-1 flex">
                        <div data-layer="First name" class="FirstName w-1/2 p-4  text-black text-base font-medium font-['Inter'] leading-normal">
                            <h3>First Name</h3>
                            <input type="text" class="border border-black mx-auto w-full" />
                        </div>
                        <div data-layer="Last name" class="LastName w-1/2 p-4 text-black text-base font-medium font-['Inter'] leading-normal">
                            <h3>Last Name</h3>
                            <input type="text" class="border border-black w-full" />
                        </div>
                    </div>
                    <div data-layer="Email address" class="EmailAddress ml-4.5  text-black text-base font-medium font-['Inter'] leading-normal">Email address</div>
                    <input  placeholder="email" class=" text-black ml-4.5 mr-6 w-full px-4 py-2.5 mt-2 text-base" />

                </form>
            </div>
            <div class="w-1/2 p-4 mr-7">
                <div className="image mt-7">
                    <img src="public\images\about\Image.jpg" alt="" />
                </div>
            </div>
        </div>

        </HFlayout>
    </div>
  )
}

export default About