"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SubHeader from "./subHeader";
import { useState } from "react";

const Header = () => {
	const [menuClicked, setMenuClicked] = useState(false);
	const [pagesClicked, setPagesClicked] = useState(false);
	return (
		<div>
			<div>
				<div className="flex p-4 h-18 lg:h-20 lg:mb-0 bg-mediumGray lg:bg-white">
					<div className="flex flex-1 lg:flex-[0_0_33.3333%] my-auto ml-2 text-3xl lg:text-4xl font-bold text-center uppercase ">
						<div className="flex bg-white lg:bg-mediumGray">
							<h1 className="lg:mb-1 lg:mt-1 px-2 text-mediumGray lg:text-yellow align-center">MULTI</h1>
						</div>
						<div className="flex bg-yellow">
							<h1 className="lg:mb-1 lg:mt-1 px-2 ml-1 text-white lg:text-mediumGray align-center">SHOP</h1>
						</div>
					</div>

					<div className="hidden lg:flex flex-[0_0_33.3333%] items-center">
						<input type="text" className="border border-borderGray w-full py-1 px-3" placeholder="Search for products" />
						<div className="py-1 px-2 border border-borderGray">
							<FontAwesomeIcon icon={faSearch} style={{ color: "#FFD333", height: "16px" }} />
						</div>
					</div>

					<div className="hidden lg:flex flex-col flex-[0_0_33.3333%] my-auto">
						<p className="text-right text-lightGray">Customer Service</p>
						<p className="text-right text-xl font-semibold text-mediumGray">+012 345 6789</p>
					</div>

					<div
						className="relative lg:hidden h-10 w-14 my-auto right-3 border border-paleGray p-2"
						onClick={() => {
							setMenuClicked(!menuClicked);
						}}
					>
						<div className="block h-10 w-14 top-0 z-5 cursor-pointer">
							<div className="absolute h-6 w-6 top-2 left-4 z-2 flex flex-col justify-between ">
								<span className="block h-1 w-full rounded-sm  bg-paleGray"></span>
								<span className="block h-1 w-full rounded-sm  bg-paleGray"></span>
								<span className="block h-1 w-full rounded-sm  bg-paleGray"></span>
							</div>
						</div>
					</div>
				</div>

				<SubHeader />
			</div>

			<div className={`bg-mediumGray ${menuClicked ? "block" : "hidden"}`}>
				<div className="flex flex-col pl-6 text-white">
					<Link className="py-2 text-yellow" href="/">
						Home
					</Link>
					<Link className="py-2 hover:text-yellow" href="/shop">
						Shop
					</Link>
					<Link className="py-2 hover:text-yellow" href="/shop/1">
						Shop Detail
					</Link>
					<Link
						className="py-2 hover:text-yellow"
						href="#"
						onClick={() => {
							setPagesClicked(!pagesClicked);
						}}
					>
						Pages
						<span className="ml-1">
							<FontAwesomeIcon icon={faCaretDown} style={{ color: "#FFFFFF", height: "16px" }} />
						</span>
					</Link>
					<div className={`bg-yellow text-mediumGray font-normal flex flex-col py-2 ${pagesClicked ? "block" : "hidden"}`}>
						<Link className="py-1 px-6 hover:bg-white" href="/shop/shoppingcart">
							Shopping Cart
						</Link>
						<Link className="py-1 px-6 hover:bg-white" href="/shop/checkout">
							Checkout
						</Link>
					</div>
					<Link className="py-2 hover:text-yellow mb-6" href="/shop/contact">
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
