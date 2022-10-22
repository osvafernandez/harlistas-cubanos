import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import wideLogoEn from '../../assets/images/wide-logo-en.png';

const MENU_ITEMS = [
	{
		text: 'Inicio',
		link: '#inicio'
	},
	{
		text: 'Proximo Evento',
		link: '#prox-event'
	},
	{
		text: 'Galeria',
		link: '#galeria'
	},
	{
		text: 'Contactos',
		link: '#footer'
	}
];

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
			<img className="mx-0 mt-[20px] max-w-xs" src={wideLogoEn} alt="una foto de harley" />

			<ul className="hidden md:flex">
				{MENU_ITEMS.map(({ text, link }) => (
					<li key={`desktop-${link}`} className="p-4 cursor-pointer hover:text-[#FF6600]">
						<a href={link}>{text}</a>
					</li>
				))}
			</ul>

			<div onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
				{isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			<div
				className={
					isOpen
						? 'fixed left-0 top-0 w-[50%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
						: 'fixed left-[-100%]'
				}
			>
				<h1 className="mr-[10px] text-3xl font-bold p-5 text-[#FF6600]">Harlistas Cubanos</h1>

				<ul className="uppercase p-4">
					{MENU_ITEMS.map(({ text, link }) => (
						<li key={`mobile-${link}`} className="p-4 border-b border-gray-600  hover:text-[#FF6600]">
							<a onClick={() => setIsOpen(!isOpen)} href={link}>
								{text}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
