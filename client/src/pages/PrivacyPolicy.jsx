import cover from '../assets/cover.jpg';

export default function PrivacyPolicy() {
  return (
    <div className='py-18 pb-4 px-4 max-w-6xl mx-auto'>
      <h1 className="font-bold text-green-500 break-normal text-2xl md:text-2xl link link-underline">
      Privacy Policy
      </h1>
    
    <img src={cover} alt="mockup" width={0} height={0} className='container w-full max-w-6xl mx-auto bg-white bg-cover mt-4 rounded'/>


    <div className="container max-w-5xl mx-auto">
      <div className="mx-0 sm:mx-6">
        <div className=" w-full p-2 md:p-2 text-xl md:text-2xl text-gray-800 leading-normal">
                 <p className="py-6">
                 At BASAVARABD, we are committed to protecting your privacy. This privacy policy describes how we collect, use and protect your personal information when you interact with our website or services.
          </p>

          <p className="py-6">
          information we collect We may collect personal information, such as your name, contact details and preferences when you use our website or  services. This information helps us provide you with a personalized experience and improve our services. How We Use Your Information We use your information to improve user experience, process transactions, provide customer support, and send you relevant updates. We may also use anonymized data for analytical purposes to improve our services.
          </p>

          <ol>
            <li className="py-3">Sharing Information We do not sell, rent or trade your personal information to third parties. We may share your data with trusted service providers who help us deliver our services, but they are bound by confidentiality agreements.</li>
            <li className="py-3">Data Security We prioritize the security of your data and use industry standard measures to protect it from unauthorized access, disclosure, alteration or destruction. Cookies and Tracking We use cookies and similar technologies to collect information about your browsing behavior. You can manage your cookie preferences through your browser settings.</li>
            <li className="py-3">Your Choices You have the right to access, correct and delete your personal information. You can also opt-out of receiving marketing communications. Policy changes We may update our privacy policy and any changes will be posted on our website.</li>
          </ol>

          <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
          By using our website and services, you agree to this privacy policy. If you have any questions or concerns regarding your privacy, please contact us at.

            <br/> - basavarabd.com
          </blockquote>
        </div>
      </div>
    </div>
    </div>
  );
}
