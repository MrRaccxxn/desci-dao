import _ from "lodash";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";
import { useAccount, useDisconnect } from 'wagmi'
import { ConnectWallet } from "../components/ConnectWallet";
import ClientRehydration from "../utils/ClientRehydration";

export const NavBar = () => {
    return <ClientRehydration>
	<header className="sticky top-0 z-50 py-2">
	<div className="container">
      <div className="navbar px-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-success btn-circle xl:hidden mr-1">
        <i className="bi bi-list text-2xl"></i>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-200 rounded-box w-52">
      <button className="inline-flex text-white bg-primary_green border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <li><a>CREATE ID SET</a></li>
        </button>
        <li tabIndex={0}>
          <a className="justify-between">
            PDF DAO
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>View Accepted PDF</a></li>
            <li><a>View Proposals</a></li>
			<li><a>Upload PDF</a></li>
          </ul>
        </li>
        <li><a>VIEW ONCHAINPDF FILES</a></li>
      </ul>
    </div>
    <Link href={'/'} className="btn btn-ghost normal-case text-xl">
                    <Image
                        alt="logo"
                        width={36}
                        height={36}
                        src={logo}
                    />
                </Link>
  </div>
  <div className="navbar-center hidden xl:flex">
    <ul className="menu menu-horizontal p-0 font-medium">
      <li><a>CREATE ID SET</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            PDF DAO
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>View Accepted PDF</a></li>
            <li><a>View Proposals</a></li>
			<li><a>Upload PDF</a></li>
          </ul>
        </li>
        <li><a>VIEW ONCHAINPDF FILES</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <ConnectWallet />
  </div>
</div>
</div>
</header>
    </ClientRehydration>
}