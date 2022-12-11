import { BsFacebook, BsTwitter, BsGithub, BsWhatsapp, BsEnvelopeFill } from 'react-icons/bs';
import logo from '../../assets/images/logo.webp';

function Contactos() {
	return (
		<footer id="footer" className="p-4 bg-white sm:p-6 dark:bg-black">
			<div className="md:flex md:justify-between">
				<div className=" mb-6 md:mb-0 flex flex-row">
					<img src={logo} className="mr-3 h-10 rounded" alt="H-D Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-600">
						Harlistas Cubanos
					</span>
				</div>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<div className="sm:flex sm:items-center sm:justify-between">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2022 *web in development*
				</span>
				<div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
					<a
						href="https://wa.me/+5358117628"
						className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
					>
						<BsWhatsapp />
						<span className="sr-only">WhatsApp contact</span>
					</a>
					<a
						href="https://m.facebook.com/profile.php?id=100032787713039&ref=py_c&_rdr"
						className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
					>
						<BsFacebook />
						<span className="sr-only">Facebook page</span>
					</a>

					<a href="/#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
						<BsTwitter />

						<span className="sr-only">Twitter page</span>
					</a>
					<a
						href="https://github.com/osvafernandez/harlistas-cubanos"
						className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
					>
						<BsGithub />
						<span className="sr-only">GitHub account</span>
					</a>
					<a
						href="mailto:osvanaranjo96@gmail.com"
						className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
					>
						<BsEnvelopeFill />
						<span className="sr-only">Mail account</span>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Contactos;
