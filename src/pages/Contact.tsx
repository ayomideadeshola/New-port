import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

export default function Contact() {
	return (
		<section className="py-40">
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[45%_55%] lg:px-8">
				<ContactInfo />
				<ContactForm />
			</div>
		</section>
	);
}
