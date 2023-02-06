import _ from "lodash";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";
import { useAccount, useDisconnect } from 'wagmi'
import { ConnectWallet } from "../components/ConnectWallet";
import ClientRehydration from "../utils/ClientRehydration";

export const NavBar = () => {

return (<ClientRehydration>
  <header className='bg-base-100 py-2 sticky top-0 z-50'>
    <div className='container'>
      <div className="navbar px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-circle btn-primary lg:hidden mr-1">
              <i className='bi bi-list text-2xl'></i>
            </label>
            <ul tabIndex={0} className="dropdown-content mt-1 w-52 menu menu-compact p-2 bg-base-200 shadow rounded-box">
            <button className="inline-flex text-primary border-0 py-1 px-2 bg-green-400 dropdown-content mt-1 p-2 shadow rounded-box w-36">
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
          <a className="btn btn-ghost normal-case text-2xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-medium">
          <button className="inline-flex text-primary border-0 py-1 px-2 bg-green-400 dropdown-content mt-1 p-2 shadow rounded-box w-36">
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
        <div className="navbar-end">
        <ConnectWallet />
        </div>
      </div>
    </div>
  </header>

    </ClientRehydration>
    )
}
