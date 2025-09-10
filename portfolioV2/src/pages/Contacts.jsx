import Header from "../components/Header";

// Icons
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Contact() {
  const contacts = [
    { icon: <FaPhoneAlt />, name: "phone", value: "+33 6 01 01 17 23" },
    { icon: <FaLocationDot />, name: "address", value: "Nouvelle Aquitaine, France" },
    { icon: <IoIosMail />, name: "email", value: "louis.jagueneau@viacesi.fr" },
  ];

  return (
    <div className="bg-bg dark:bg-bg-dark min-h-screen flex flex-col">
      <Header />

      {/* Container centré verticalement et horizontalement */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-5 md:px-14 lg:px-20 flex py-10 lg:py-0 flex-col-reverse lg:flex-row gap-10 w-full max-w-6xl">
          
          {/* Formulaire */}
          <section className="lg:w-1/2 flex justify-center">
            <div className="bg-bg-light dark:bg-bg-light-dark px-10 py-6 rounded-sm w-full max-w-md">
              <h2 className="text-text dark:text-text font-light font-rem text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem] mb-8">
                Contact us
              </h2>
              <form className="text-text dark:text-text placeholder-text-muted dark:placeholder-text-muted-dark font-poppins font-light flex flex-col gap-y-5">
                <input type="text" name="name" placeholder="Name" className="px-4 py-5 h-[48px] border border-black/15 dark:border-white/15 focus:border-[#ec1c24] outline-none" />
                <input type="email" name="email" placeholder="Email" className="px-4 py-5 h-[48px] border border-black/15 dark:border-white/15 focus:border-[#ec1c24] outline-none" />
                <input type="text" name="subject" placeholder="Subject" className="px-4 py-5 h-[48px] border border-black/15 dark:border-white/15 focus:border-[#ec1c24] outline-none" />
                <textarea name="message" placeholder="Type your message here ..." className="px-4 py-5 min-h-[150px] border border-black/15 dark:border-white/15 focus:border-[#ec1c24] outline-none"></textarea>
                <input type="submit" className="bg-primary rounded-sm py-2 cursor-pointer text-white" />
              </form>
            </div>
          </section>

          {/* Infos de contact */}
          <section className="lg:w-1/2 flex justify-center lg:items-center lg:justify-center">
            <div className="w-full max-w-md">
              {contacts.map((contact) => (
                <div key={contact.name} className="flex items-stretch gap-5 mb-8 lg:mb-16">
                  <div className="text-text-muted dark:text-text-muted bg-bg-light dark:bg-bg-light-dark p-4 rounded-sm">
                    <span className="text-[28px]">{contact.icon}</span>
                  </div>
                  <div className="font-poppins flex flex-col justify-center">
                    <span className="text-text-muted dark:text-text-muted-dark capitalize">{contact.name}</span>
                    <p className="text-text dark:text-text text-[1.1rem]">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Contact;
