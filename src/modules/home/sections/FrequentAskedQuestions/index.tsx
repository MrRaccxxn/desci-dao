export const FrequentAskedQuestions = () => 
{
    return (
        <section className='py-10 md:py-16'>
          <div className='container'>
          <div className='text-center'>
          <h2 className='text-3xl sm:text-5xl font-bold mb-4'>Frequently Asked Questions</h2>
        </div>
            <div className="grid gap-10 md:gap-8 sm:p-3 grid-cols-2 md:grid-cols-1 lg:px-12 xl:px-32">
            
              <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="card-body items-center text-center gap-4">
                  <h2 className="card-title">Does even3 storage any of my personal data?</h2>
                  <p>For attendees, we only <br className="hidden xl:inline"/>collect email address for <br className="hidden xl:inline"/>event invitations and reminders.<br className="hidden xl:inline"/> For event hosts, we <br className="hidden xl:inline"/>collect additional information such <br className="hidden xl:inline"/>as nickname and email address<br className="hidden xl:inline"/> (provided by the google account)<br className="hidden xl:inline"/> which is shared with<br className="hidden xl:inline"/> attendees to improve the <br className="hidden xl:inline"/>event experience.</p>
                </div>
              </div>
    
              <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="card-body items-center text-center gap-4">
                  <h2 className="card-title">How much does it cost?</h2>
                  <p>Our platform is designed <br className="hidden xl:inline"/>to be a public <br className="hidden xl:inline"/>good, and our team <br className="hidden xl:inline"/>is dedicated to keeping <br className="hidden xl:inline"/>it that way as <br className="hidden xl:inline"/>much as possible. We <br className="hidden xl:inline"/>strive to find sustainable <br className="hidden xl:inline"/>solutions to maintain the <br className="hidden xl:inline"/>platform free for our <br className="hidden xl:inline"/>users in the future.</p>
                </div>
              </div>
    
              <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="card-body items-center text-center gap-4">
                  <h2 className="card-title">Can I attende to an event without been registered?</h2>
                  <p>Yes, you can attend <br className="hidden xl:inline"/>an event without being<br className="hidden xl:inline"/> registered on our platform. <br className="hidden xl:inline"/>All you need to <br className="hidden xl:inline"/>do is provide an <br className="hidden xl:inline"/>email address for the <br className="hidden xl:inline"/>event invitation and reminders <br className="hidden xl:inline"/>to be sent to. This<br className="hidden xl:inline"/> way you can still attend <br className="hidden xl:inline"/>the event without having<br className="hidden xl:inline"/> to register for an <br className="hidden xl:inline"/>account on our platform.</p>
                </div>
              </div>
    
              <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="card-body items-center text-center gap-4">
                  <h2 className="card-title">Why you guys are so cool?</h2>
                  <p>We are dedicated to <br className="hidden xl:inline"/>constantly improving our platform <br className="hidden xl:inline"/>and making it accessible <br className="hidden xl:inline"/>to a larger community.<br className="hidden xl:inline"/> Our team is committed <br className="hidden xl:inline"/>to providing a secure <br className="hidden xl:inline"/>and enjoyable event experience <br className="hidden xl:inline"/>for all users. We <br className="hidden xl:inline"/>strive to make our <br className="hidden xl:inline"/>platform user-friendly and <br className="hidden xl:inline"/>constantly work to improve <br className="hidden xl:inline"/>it to make it even <br className="hidden xl:inline"/>more cool!<br className="hidden xl:inline"/></p>
                </div>
              </div>
              </div>
            </div>
       
        </section>
      )
}
